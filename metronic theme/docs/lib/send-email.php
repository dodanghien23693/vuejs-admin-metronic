<?php

include __DIR__ . '/PHPMailer-6.0.5/src/Exception.php';
include __DIR__ . '/PHPMailer-6.0.5/src/PHPMailer.php';
include __DIR__ . '/PHPMailer-6.0.5/src/SMTP.php';

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;


class SendEmail {

	public $errors = array();
	public $name;
	public $email;
	public $phone;
	public $skype;
	public $budget;
	public $message;
	public $remove_ip;

	public function __construct() {
		$this->verify();
	}

	public function verify() {
		$this->name      = isset( $_REQUEST['name'] ) ? $_REQUEST['name'] : '';
		$this->email     = isset( $_REQUEST['email'] ) ? $_REQUEST['email'] : '';
		$this->phone     = isset( $_REQUEST['phone'] ) ? $_REQUEST['phone'] : '';
		$this->skype     = isset( $_REQUEST['skype'] ) ? $_REQUEST['skype'] : '';
		$this->budget    = isset( $_REQUEST['budget'] ) ? $_REQUEST['budget'] : '';
		$this->message   = isset( $_REQUEST['message'] ) ? $_REQUEST['message'] : '';
		$this->remove_ip = $this->get_client_ip();

		if ( isset( $_REQUEST['g-recaptcha-response'] ) ) {
			$result = $this->recaptcha( $_REQUEST['g-recaptcha-response'] );
			if ( ! isset( $result['success'] ) || ! $result['success'] ) {
				$this->errors[] = 'Invalid reCaptcha validation';
			}

			if ( empty( $this->errors ) ) {
				$this->send_email();
			}
		}
	}

	/**
	 * Function to get the client IP address
	 * @return array|false|string
	 */
	function get_client_ip() {
		$ipaddress = '';
		if ( getenv( 'HTTP_CLIENT_IP' ) ) {
			$ipaddress = getenv( 'HTTP_CLIENT_IP' );
		} else if ( getenv( 'HTTP_X_FORWARDED_FOR' ) ) {
			$ipaddress = getenv( 'HTTP_X_FORWARDED_FOR' );
		} else if ( getenv( 'HTTP_X_FORWARDED' ) ) {
			$ipaddress = getenv( 'HTTP_X_FORWARDED' );
		} else if ( getenv( 'HTTP_FORWARDED_FOR' ) ) {
			$ipaddress = getenv( 'HTTP_FORWARDED_FOR' );
		} else if ( getenv( 'HTTP_FORWARDED' ) ) {
			$ipaddress = getenv( 'HTTP_FORWARDED' );
		} else if ( getenv( 'REMOTE_ADDR' ) ) {
			$ipaddress = getenv( 'REMOTE_ADDR' );
		} else {
			$ipaddress = 'UNKNOWN';
		}

		return $ipaddress;
	}

	public function recaptcha( $response ) {
		// recaptcha
		$url    = 'https://www.google.com/recaptcha/api/siteverify';
		$secret = '6Lf92jMUAAAAAMRDPw9NHlvNtw9ofpYkq6J31Xz8';

		$result = file_get_contents( $url . '?secret=' . $secret . '&response=' . $response );

		return json_decode( $result, true );
	}

	public function send_email() {
		$mail = new PHPMailer( true );                              // Passing `true` enables exceptions
		try {
			//Server settings
			//$mail->SMTPDebug = 2;                                 // Enable verbose debug output
			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host       = 'mail.authsmtp.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth   = true;                               // Enable SMTP authentication
			$mail->Username   = 'ac69251';                 // SMTP username
			$mail->Password   = 's1r-vQe-DVR-42n';                           // SMTP password
			$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port       = 2525;                                    // TCP port to connect to

			//Recipients
			$mail->setFrom( 'no-reply@keenthemes.com', 'Keenthemes No-reply' );
			$mail->addAddress( 'support@keenthemes.com' );     // Add a recipient
			$mail->addAddress( 'sales@keenthemes.com' );     // Add a recipient
			//$mail->addAddress( 'jai.crys@gmail.com' );     // Add a recipient
			$mail->addReplyTo( $this->email, $this->name );

			//Content
			$mail->isHTML( true );                                  // Set email format to HTML
			$mail->Subject = 'Quote request from ' . $this->name;
			$mail->Body    = <<<HTML
<p>
Name:<br/>
$this->name
</p>
<p>
Email:<br/>
$this->email
</p>
<p>
Contact Phone:<br/>
$this->phone
</p>
<p>
Skype ID:<br/>
$this->skype
</p>
<p>
Budget:<br/>
$this->budget
</p>
<p>
Project Details:<br/>
$this->message
</p>
<p>
IP Address:<br/>
$this->remove_ip
</p>
<p>
Use https://www.iplocation.net/ to locate country of sender by ip address
HTML;


			$mail->send();
			echo 'Message has been sent';
		} catch ( Exception $e ) {
			echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
		}
	}

}

new SendEmail();