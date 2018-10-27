<script>
import template from "./ProfilePage.html";
import AppDatePicker from "@/components/date-picker/AppDatePicker";
import AppDateTimePicker from "@/components/datetime-picker/AppDateTimePicker";
import TimePicker from "@/components/time-picker/AppTimePicker";
import AppSummernote from "@/components/summernote/AppSummerNote";
import AppColorPicker from "@/components/color-picker/AppColorPicker";
import AppDatatable from "@/components/datatable/AppDatatable";
import AppForm from "@/components/app-form/AppForm";
import AppInput from "@/components/app-input/AppInput";
import AppDropzone from "@/components/app-dropzone/AppDropzone";

export default {
	name: "profile",
	inject: ["$validator"],
	template: template,
	data: function() {
		return {
			userInfor: {
				image:
					"https://vietnammoi.vn/stores/news_dataimages/htt/032018/21/10/4006_ef50189c12294e6298121aa3a2b58d91.jpg",
				name: "n",
				email: "daohai3031996@gmail.com",
				contact: "0943611060",
				isSupperAdmin: true,
				dateTime: "2018/07/26 10:30",
				sex: "girl",
				time: "10:20:91",
				birthday: "01/08/2018",
				note: "dao hai la nguoi rat dep trai",
				hex: "#61485c"
			},
			updateImage: { dataURL: "a" },
			tableConfig: {
				data: {
					type: "local",
					source: [
						{
							RecordID: 10,
							OrderID: "55154-5393",
							ShipCountry: "NG",
							ShipCity: "Sapele",
							ShipName: "Moen, Kertzmann and Mills",
							ShipAddress: "1 Nancy Junction",
							CompanyEmail: "epere9@sina.com.cn",
							CompanyAgent: "Ely Pere",
							CompanyName: "Jacobi, O'Conner and Kuhlman",
							Currency: "NGN",
							Notes:
								"adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula",
							Department: "Shoes",
							Website: "whitehouse.gov",
							Latitude: 5.8750769,
							Longitude: 5.6931356,
							ShipDate: "1/1/2016",
							PaymentDate: "2017-06-20 10:42:35",
							TimeZone: "Africa/Lagos",
							Status: 3,
							Type: 1,
							TotalPayment: "88,211.68 NGN"
						},
						{
							RecordID: 263,
							OrderID: "43406-0032",
							ShipCountry: "US",
							ShipCity: "Fort Pierce",
							ShipName: "Moore-Schaden",
							ShipAddress: "451 Fuller Junction",
							CompanyEmail: "tdefau7a@google.pl",
							CompanyAgent: "Tristan Defau",
							CompanyName: "Mayer and Sons",
							Currency: "USD",
							Notes:
								"mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
							Department: "Music",
							Website: "cornell.edu",
							Latitude: 27.3980151,
							Longitude: -80.3714326,
							ShipDate: "1/1/2017",
							PaymentDate: "2017-05-21 01:45:57",
							TimeZone: "America/New_York",
							Status: 2,
							Type: 2,
							TotalPayment: "7,105.23 USD"
						},
						{
							RecordID: 77,
							OrderID: "68016-527",
							ShipCountry: "PH",
							ShipCity: "Batarasa",
							ShipName: "Gibson Inc",
							ShipAddress: "948 Roxbury Center",
							CompanyEmail: "smatitiaho24@dailymotion.com",
							CompanyAgent: "Skippy Matitiaho",
							CompanyName: "Monahan, Haley and Murphy",
							Currency: "PHP",
							Notes:
								"sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius",
							Department: "Jewelery",
							Website: "printfriendly.com",
							Latitude: 8.5015747,
							Longitude: 117.3557854,
							ShipDate: "1/12/2017",
							PaymentDate: "2016-09-07 16:34:55",
							TimeZone: "Asia/Manila",
							Status: 1,
							Type: 3,
							TotalPayment: "9,541.82 PHP"
						},
						{
							RecordID: 330,
							OrderID: "54868-5303",
							ShipCountry: "PH",
							ShipCity: "Sillon",
							ShipName: "Balistreri Group",
							ShipAddress: "8203 Truax Center",
							CompanyEmail: "kvickarman95@storify.com",
							CompanyAgent: "Kipp Vickarman",
							CompanyName: "Kerluke and Sons",
							Currency: "PHP",
							Notes:
								"lobortis ligula sit amet eleifend pede libero quis orci nullam molestie",
							Department: "Clothing",
							Website: "vkontakte.ru",
							Latitude: 11.186148,
							Longitude: 123.7487563,
							ShipDate: "1/14/2017",
							PaymentDate: "2017-05-16 18:29:45",
							TimeZone: "Asia/Manila",
							Status: 6,
							Type: 1,
							TotalPayment: "8,300.97 PHP"
						},
						{
							RecordID: 51,
							OrderID: "49884-659",
							ShipCountry: "ID",
							ShipCity: "Atap",
							ShipName: "Blanda Group",
							ShipAddress: "1 Monica Alley",
							CompanyEmail: "sjackes1e@reuters.com",
							CompanyAgent: "Shelagh Jackes",
							CompanyName: "Schiller Inc",
							Currency: "IDR",
							Notes:
								"iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
							Department: "Jewelery",
							Website: "forbes.com",
							Latitude: 3.8152026,
							Longitude: 117.1147095,
							ShipDate: "1/15/2016",
							PaymentDate: "2016-06-24 03:01:19",
							TimeZone: "Asia/Makassar",
							Status: 2,
							Type: 1,
							TotalPayment: "8,397.18 IDR"
						},
						{
							RecordID: 313,
							OrderID: "23155-179",
							ShipCountry: "PA",
							ShipCity: "Potrero Grande",
							ShipName: "Olson, Schmeler and Little",
							ShipAddress: "3 Bartillon Place",
							CompanyEmail: "cgrandison8o@auda.org.au",
							CompanyAgent: "Corliss Grandison",
							CompanyName: "Mills-Beatty",
							Currency: "PAB",
							Notes:
								"egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend",
							Department: "Clothing",
							Website: "mlb.com",
							Latitude: 8.881634,
							Longitude: -79.8268729,
							ShipDate: "1/16/2016",
							PaymentDate: "2017-12-06 10:30:59",
							TimeZone: "America/Panama",
							Status: 3,
							Type: 2,
							TotalPayment: "85,706.89 PAB"
						},
						{
							RecordID: 153,
							OrderID: "53341-515",
							ShipCountry: "MD",
							ShipCity: "Saharna",
							ShipName: "Leffler, Sawayn and Denesik",
							ShipAddress: "07247 Del Sol Hill",
							CompanyEmail: "fshank48@spotify.com",
							CompanyAgent: "Findley Shank",
							CompanyName: "Reilly LLC",
							Currency: "MDL",
							Notes:
								"dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo",
							Department: "Industrial",
							Website: "discuz.net",
							Latitude: 47.6949791,
							Longitude: 28.9654659,
							ShipDate: "1/17/2016",
							PaymentDate: "2017-01-05 15:53:50",
							TimeZone: "Europe/Chisinau",
							Status: 6,
							Type: 1,
							TotalPayment: "993,295.17 MDL"
						},
						{
							RecordID: 112,
							OrderID: "50580-198",
							ShipCountry: "PT",
							ShipCity: "Loureiro",
							ShipName: "Labadie, Hegmann and Jones",
							ShipAddress: "9986 Arapahoe Place",
							CompanyEmail: "bglaister33@bbb.org",
							CompanyAgent: "Baxie Glaister",
							CompanyName: "Stark, Haley and Koepp",
							Currency: "EUR",
							Notes:
								"suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
							Department: "Tools",
							Website: "apple.com",
							Latitude: 41.4808684,
							Longitude: -8.3624629,
							ShipDate: "1/17/2016",
							PaymentDate: "2016-04-24 01:53:42",
							TimeZone: "Europe/Lisbon",
							Status: 3,
							Type: 3,
							TotalPayment: "9,705.78 EUR"
						},
						{
							RecordID: 29,
							OrderID: "30142-106",
							ShipCountry: "RU",
							ShipCity: "Loukhi",
							ShipName: "Klein-Streich",
							ShipAddress: "61 Cascade Plaza",
							CompanyEmail: "mgallamores@businesswire.com",
							CompanyAgent: "Minor Gallamore",
							CompanyName: "Huels-Strosin",
							Currency: "RUB",
							Notes:
								"sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
							Department: "Beauty",
							Website: "epa.gov",
							Latitude: 66.0733463,
							Longitude: 33.0544476,
							ShipDate: "1/17/2016",
							PaymentDate: "2016-03-09 04:40:38",
							TimeZone: "Europe/Moscow",
							Status: 2,
							Type: 2,
							TotalPayment: "931,956.17 RUB"
						},
						{
							RecordID: 135,
							OrderID: "49348-387",
							ShipCountry: "FR",
							ShipCity: "Sens",
							ShipName: "Collins, Hackett and Vandervort",
							ShipAddress: "594 Hanover Crossing",
							CompanyEmail: "tkiezler3q@live.com",
							CompanyAgent: "Tommy Kiezler",
							CompanyName: "Eichmann and Sons",
							Currency: "EUR",
							Notes:
								"etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
							Department: "Toys",
							Website: "instagram.com",
							Latitude: 48.1903349,
							Longitude: 3.2995005,
							ShipDate: "1/18/2017",
							PaymentDate: "2016-12-28 03:56:57",
							TimeZone: "Europe/Paris",
							Status: 2,
							Type: 2,
							TotalPayment: "811,814.44 EUR"
						}
					],
					pageSize: 5
				},
				// search: { input: $("#generalSearch") },
				columns: [
					// {
					// 	field: "RecordID",
					// 	title: "#",
					// 	sortable: !1,
					// 	width: 40,
					// 	// locked: { left: "xl" },
					// 	selector: { class: "m-checkbox--solid m-checkbox--brand" }
					// },
					{
						field: "ID",
						title: "ID",
						sortable: !1,
						width: 40,
						// locked: { left: "xl" },
						template: "{{RecordID}}"
					},
					{
						field: "ShipCountry",
						title: "Ship Country",
						width: 150,
						template: function(t) {
							return t.ShipCountry + " - " + t.ShipCity;
						}
					},
					{ field: "Longitude", title: "Longitude" },
					{ field: "ShipCity", title: "Ship City" },
					{ field: "Currency", title: "Currency", width: 100 },
					{ field: "ShipDate", title: "Ship Date", sortable: "asc" },
					{ field: "Latitude", title: "Latitude" },
					{
						field: "Status",
						title: "Status",
						template: function(t) {
							var a = {
								1: { title: "Pending", class: "m-badge--brand" },
								2: { title: "Delivered", class: " m-badge--metal" },
								3: { title: "Canceled", class: " m-badge--primary" },
								4: { title: "Success", class: " m-badge--success" },
								5: { title: "Info", class: " m-badge--info" },
								6: { title: "Danger", class: " m-badge--danger" },
								7: { title: "Warning", class: " m-badge--warning" }
							};
							return (
								'<span class="m-badge ' +
								a[t.Status].class +
								' m-badge--wide">' +
								a[t.Status].title +
								"</span>"
							);
						}
					},
					{
						field: "Type",
						title: "Type",
						template: function(t) {
							var a = {
								1: { title: "Online", state: "danger" },
								2: { title: "Retail", state: "primary" },
								3: { title: "Direct", state: "accent" }
							};
							return (
								'<span class="m-badge m-badge--' +
								a[t.Type].state +
								' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' +
								a[t.Type].state +
								'">' +
								a[t.Type].title +
								"</span>"
							);
						}
					},
					{
						field: "Actions",
						width: 110,
						title: "Actions",
						sortable: !1,
						locked: { right: "xl" },
						overflow: "visible",
						template: function(t, a, e) {
							return (
								'\t\t\t\t\t\t<div class="dropdown ' +
								(e.getPageSize() - a <= 4 ? "dropup" : "") +
								'">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
							);
						}
					}
				]
			}
		};
	},
	components: {
		AppDatePicker,
		AppDateTimePicker,
		TimePicker,
		AppSummernote,
		AppColorPicker,
		AppDatatable,
		AppForm,
		AppInput,
		AppDropzone
	},
	created: function() {},
	methods: {
		submit(e) {
			this.$swal("Cập nhật thành công", "Tiêu đề con", "OK");
		}
	}
};
</script>
