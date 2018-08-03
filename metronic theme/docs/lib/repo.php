<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Repo
{

	const DB_SERVERNAME = 'localhost';

	const DB_USERNAME   = 'keenthemes';

	const DB_PASSWORD   = '2VD3H95HX8kMgU00';

	const DB_NAME       = 'github';

	const ENVATO_APIKEY = '05kxpfkxwymzzczjm75d9s3li4spg0j1';

	const SMTP_SERVER   = 'mail.authsmtp.com';

	const SMTP_USERNAME = 'ac69251';

	const SMTP_PASSWORD = 'TpE-rqc-QPV-8YV';

	const GITHUB_TOKEN  = 'b20b7b7afb9a06b25ae77f9b86cc9b3ed68e7a03';

	const GITHUB_LIMIT  = 50;

	public $errors = [];
	public $dbh;

	function __construct()
	{
		$this->connectDb();
		if (isset($_REQUEST['cron'])) {
			$this->initCron();
		} else {
			$this->initRegistration();
		}
	}

	public function connectDb()
	{
		$this->dbh = new PDO('mysql:host='.self::DB_SERVERNAME.';dbname='.self::DB_NAME.';charset=utf8',
			self::DB_USERNAME, self::DB_PASSWORD, [
				PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES   => false,
			]
		);
		if ( ! $this->dbh) {
			die('Connection failed: '.$this->dbh->errorInfo());
		}
	}

	public function initCron()
	{
		// check limit
		if (count($this->dbCheckLimit()) >= self::GITHUB_LIMIT) {
			die('Limit reached');
		}

		$users = $this->dbGetQueue();

		foreach ($users as $user) {
			if ( ! isset($user['username'])) {
				continue;
			}

			$errors = [];
			$result = $this->githubInvite('Metronic-Default', $user['username']);
			if (isset($result['message'])) {
				$errors[] = $result['message'];
			}

			if (empty($errors)) {
				$result = $this->githubInvite('Metronic-Angular', $user['username']);
				if (isset($result['message'])) {
					$errors[] = $result['message'];
				}
			}

			$status = 0;
			if (empty($errors)) {
				$status = 1;
			}
			$this->dbChangeStatus($user['id'], $status, $errors);
		}
	}

	public function dbCheckLimit()
	{
		$stmt = $this->dbh->prepare('SELECT id FROM user WHERE created_dt >= NOW() - INTERVAL 1 DAY');

		$stmt->execute();

		return $stmt->fetchAll();
	}

	public function dbGetQueue()
	{
		$stmt = $this->dbh->prepare('SELECT * FROM user WHERE status=?');

		$stmt->execute([0]);

		return $stmt->fetchAll();
	}

	public function githubInvite($repo, $user)
	{
		return json_decode(
			$this->curl('https://api.github.com/repos/KeenthemesHub/'.$repo.'/collaborators/'.$user,
				json_encode(['permission' => 'pull']), 'PUT', [
					'Authorization: token '.self::GITHUB_TOKEN,
					'Content-Type: application/json',
				]), true);
	}

	public function curl($url, $data = null, $request = 'GET', $headers = [])
	{
		$ch = curl_init();
		curl_setopt_array($ch,
			[
				CURLOPT_URL            => $url,
				CURLOPT_POSTFIELDS     => $data,
				CURLOPT_CUSTOMREQUEST  => $request,
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_HTTPHEADER     => $headers,
			]
		);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
		$output = curl_exec($ch);
		curl_close($ch);

		return $output;
	}

	public function dbChangeStatus($id, $status, $logs = [])
	{
		$stmt = $this->dbh->prepare('UPDATE user SET status=?, logs=?, updated_dt=? WHERE id=?');

		return $stmt->execute([$status, json_encode($logs), date('Y-m-d H:i:s'), $id]);
	}

	public function initRegistration()
	{
		if (isset($_REQUEST['g-recaptcha-response'])) {
			$result = $this->recaptcha($_REQUEST['g-recaptcha-response']);
			if ( ! isset($result['success']) || ! $result['success']) {
				$this->errors[] = 'Invalid reCaptcha validation';
			}

			if (empty($this->errors)) {
				$result = $this->githubCheckUser($_REQUEST['username']);
				if (isset($result['message'])) {
					$this->errors[] = 'Username not found';
				}
			}

			if (empty($this->errors)) {
				if ($this->dbIsRegistered($_REQUEST['purchase_code'])) {
					$this->errors[] = 'This purchase code has been already registered';
				}
			}

			if (empty($this->errors)) {
				$result = $this->envatoVerifyPurchase($_REQUEST['purchase_code']);
				if ( ! isset($result['verify-purchase']) || empty($result['verify-purchase'])) {
					$this->errors[] = 'Invalid purchase code';
				}
				/*if (isset($result['verify-purchase']['supported_until'])) {
					$expire = strtotime($result['verify-purchase']['supported_until']);
					$today  = strtotime('today midnight');
					if ($today >= $expire) {
						$this->errors[] = 'Purchase code has been expired. Please renew the subscription and retry.';
					}
				}*/
			}

			if (empty($this->errors)) {
				$this->dbAddQueue($_REQUEST);
			}

			if (count($this->dbCheckLimit()) >= self::GITHUB_LIMIT) {
				$this->errors[]
					= 'Github invitation request limit has been reached. GitHub limits the number of people who can be added to a repository within a 24-hour period. 
						Your registration has been added into the queue and we will send your invitation within 24-hour.';
			}

		} else {
			$this->errors[] = 'reCaptcha is required';
		}

		header('Content-type: application/json');
		die(json_encode(['errors' => $this->errors,]));
	}

	public function recaptcha($response)
	{
		// recaptcha
		$url    = 'https://www.google.com/recaptcha/api/siteverify';
		$secret = '6Lf92jMUAAAAAMRDPw9NHlvNtw9ofpYkq6J31Xz8';

		$result = file_get_contents($url.'?secret='.$secret.'&response='.$response);

		return json_decode($result, true);
	}

	public function githubCheckUser($username)
	{
		return json_decode(
			$this->curl('https://api.github.com/users/'.$username,
				null, 'GET', [
					'Authorization: token '.self::GITHUB_TOKEN,
					'Content-Type: application/json',
				]), true);
	}

	public function dbIsRegistered($purchase_code)
	{
		$stmt = $this->dbh->prepare('SELECT id FROM user WHERE purchase_code=?');

		$stmt->execute([$purchase_code]);

		return $stmt->fetchColumn();
	}

	public function envatoVerifyPurchase($purchaseCode)
	{
		return json_decode(
			$this->curl('https://marketplace.envato.com/api/edge/keenthemes/'.
			            self::ENVATO_APIKEY.'/verify-purchase:'.$purchaseCode.'.json'), true);
	}

	public function dbAddQueue($data)
	{
		$data = [
			'username'      => $data['username'],
			'purchase_code' => $data['purchase_code'],
		];

		$ph   = '?'.str_repeat(',?', count($data) - 1);
		$stmt = $this->dbh->prepare('INSERT INTO user ('.implode(',', array_keys($data)).') VALUES ('.$ph.')');
		$stmt->execute(array_values($data));

		return $this->dbh->lastInsertId();
	}
}

new Repo();