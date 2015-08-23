//(function init(){
	//alert(1);
	$(document).ready(function(){
		var config={
						"startDate":Date.parse("2015-08-22 00:00:00"),
						"endDate":Date.parse("2015-08-23 17:00:00")
					};
		function init(){
			now=Date.now();
			if(now>config.endDate){
				$(".mask").show();
				$(".m-expire").show();
			}
		}
		init();
		$(".slideBar a").click(function(){
			//alert($(this).index());
			//debugger
			/*
			index = $(this).index();
			var old = $("ul.slideImg li.on");
			old.fadeOut().attr("class", "off");
			$(".slideBar a.on").attr("class","off");

			var li=$(".slideImg li").eq(index);
			li.fadeIn().attr("class", "on");
			$(this).attr("class","on");*/
			index = $(this).index();
			var old = $("ul.slideImg li.on");
			old.fadeOut(1000, function(){
				$(this).attr("class", "off");
				$(".slideImg li").eq(index).fadeIn(500).attr("class", "on");
			});
			$(".slideBar a.on").attr("class","off");
			$(this).attr("class","on");

		});
		$(".signup").click(function(){
			//alert(1);
			//debugger
			url="/activity/buddaexpress/sign.m"
			data=$(".m-form").serialize();
			//alert(data)
			/*
			$.post(url,data,function(response,status){
				if(status==200){
					switch(response.code){
						case 200:
							alert("success");
							break;
						case 401:
							alert("not login");
							break;
						case 203:
							alert("expire");
							break;
						default:
							alert("error");
					}

				}
				else{
					alert("500");
				}
			});*/
			function callback(response, status){
				if(status==200){
					switch(response.code){
						case 200:
							$(".mask").fadeIn(100, function(){
								$(".m-dlg.m-signup").show(300);
							});

							break;
						case 401:
							alert("not login");
							break;
						case 203:
							alert("expire");
							break;
						default:
							break;
					}
				}
			}
			var rslt = {code:200};
			callback(rslt,200);
		});
		$(".u-btn-s").click(function(){
			$(".m-dlg").hide(500);
			$(".mask").fadeOut(300);
		});
	});

//})();