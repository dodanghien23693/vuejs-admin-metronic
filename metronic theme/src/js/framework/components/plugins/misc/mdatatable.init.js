var defaults = {
	layout: {
		icons: {
			pagination: {
				next: 'la la-angle-right',
				prev: 'la la-angle-left',
				first: 'la la-angle-double-left',
				last: 'la la-angle-double-right',
				more: 'la la-ellipsis-h',
			},
			rowDetail: {expand: 'fa fa-caret-down', collapse: 'fa fa-caret-right'},
		}
	}
};

if (mUtil.isRTL()) {
	defaults = {
		layout: {
			icons: {
				pagination: {
					next: 'la la-angle-left',
					prev: 'la la-angle-right',
					last: 'la la-angle-double-left',
					first: 'la la-angle-double-right',
				},
				rowDetail: {collapse: 'fa fa-caret-down', expand: 'fa fa-caret-right'},
			}
		}
	}
}

$.extend(true, $.fn.mDatatable.defaults, defaults);