let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".header-top__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

// function ibg() {
// 	if (isIE()) {
// 		let ibg = document.querySelectorAll(".ibg");
// 		for (var i = 0; i < ibg.length; i++) {
// 			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
// 				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 			}
// 		}
// 	}
// }
// ibg();


$('input,textarea').focus(function () {
	if ($(this).val() == $(this).attr('data-value')) {
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		if ($(this).attr('data-type') == 'pass') {
			$(this).attr('type', 'password');
		};
		$(this).val('');
	};
	removeError($(this));
});
$('input[data-value], textarea[data-value]').each(function () {
	if (this.value == '' || this.value == $(this).attr('data-value')) {
		this.value = $(this).attr('data-value');
		if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
			$(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
		}
	}
	if (this.value != $(this).attr('data-value') && this.value != '') {
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
			$(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
		}
	}

	$(this).click(function () {
		if (this.value == $(this).attr('data-value')) {
			if ($(this).attr('data-type') == 'pass') {
				$(this).attr('type', 'password');
			};
			this.value = '';
		};
	});
	$(this).blur(function () {
		if (this.value == '') {
			this.value = $(this).attr('data-value');
			$(this).removeClass('focus');
			$(this).parent().removeClass('focus');
			if ($(this).attr('data-type') == 'pass') {
				$(this).attr('type', 'text');
			};
		};
	});
});
$('.form-input__viewpass').click(function (event) {
	if ($(this).hasClass('active')) {
		$(this).parent().find('input').attr('type', 'password');
	} else {
		$(this).parent().find('input').attr('type', 'text');
	}
	$(this).toggleClass('active');
});
