var DropzoneDemo = {
	init: function() {
		(Dropzone.options.mDropzoneOne = {
			paramName: "file",
			maxFiles: 1,
			maxFilesize: 5,
			addRemoveLinks: !0,
			accept: function(e, o) {
				"justinbieber.jpg" == e.name ? o("Naha, you don't.") : o();
			}
		}),
			(Dropzone.options.mDropzoneTwo = {
				paramName: "file",
				maxFiles: 10,
				maxFilesize: 10,
				addRemoveLinks: !0,
				accept: function(e, o) {
					"justinbieber.jpg" == e.name ? o("Naha, you don't.") : o();
				}
			}),
			(Dropzone.options.mDropzoneThree = {
				paramName: "file",
				maxFiles: 10,
				maxFilesize: 10,
				addRemoveLinks: !0,
				acceptedFiles: "image/*,application/pdf,.psd",
				accept: function(e, o) {
					"justinbieber.jpg" == e.name ? o("Naha, you don't.") : o();
				}
			});
	}
};
DropzoneDemo.init();
