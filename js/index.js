(function init(){
	//alert(1);
	$(document).ready(function(){
		$(".slideBar a").click(function(){
			//alert($(this).index());
			//debugger
			index = $(this).index();
			var old = $("ul.slideImg li.on");
			old.fadeOut().attr("class", "off");
			//old.attr("class", "off");
			$(".slideBar a.on").attr("class","off");

			var li=$(".slideImg li").eq(index);
			li.fadeIn().attr("class", "on");
			//li.attr("class", "on");
			$(this).attr("class","on");

		});
		//$("ul.slideImg li.on").fadeOut();
	});

})();