(($) => {

	let focusANDEnterField = function () {

		$('input, textarea').focus(function() {
			let get_family = $(this).parent();
			$(get_family).addClass('focus');
		});

		$('input, textarea').focusout(function() {
				let get_family = $(this).parents('.input_box');

				$(get_family).removeClass('focus');

				if ($(this).val().trim().length === 0) {

						$(get_family).removeClass('enter');
				} else {
						$(get_family).addClass('enter');
				}
		});

		$('input').focusout();
};

focusANDEnterField();

	$('.view-checkbox').on('change', (e) => {

		let $this = $(e.currentTarget)
			, targetData =  $this.data('target')
			, $viewElement = $(targetData);

			if( $this.prop('checked') !== false ){
				$viewElement.slideDown();
				return;
			}

			$viewElement.slideUp();
	});

})(jQuery);