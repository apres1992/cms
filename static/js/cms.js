
!function($, window){

	//页面hover事件
	$('.page').hover(function(){
		$(this).addClass('active');
	}, function(){
		$(this).removeClass('active');
	});

}(window.$ || window.jQuery, window, undefined);