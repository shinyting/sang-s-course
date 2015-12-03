$(function () {
	var tabs = $('footer').find('a');
	$(tabs).on('click', function () {
		var index = $(this).index();
		var curItem = '#item' + index;
		$(curItem).show();
		$(curItem).siblings().hide();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	function backMine () {
		
	}
})