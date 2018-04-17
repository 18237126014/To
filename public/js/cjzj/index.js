$(document).ready(function(){
		
	$(".header .inner ul.nav_box li").mouseover(function(){	
		 $(this).find(".child_box").slideDown(500);
    });
	$(".header .inner ul.nav_box li").mouseleave(function(){	
		 $(this).find(".child_box").hide();
    });
	//浮动 start
	$(".float_box .float").hover(function(){
		$(this).addClass("show");
	});
	$(".float_box .float").mouseleave(function(){
		$(this).removeClass("show");
	});
	$(".float_box .float06").hover(function(){
		$(this).find(".custom_ul").slideDown(200);
	});
	$(".float_box .float06").mouseleave(function(){
		$(this).find(".custom_ul").hide();
	});
	
	//浮动 end
	$(".header .inner ul.nav_box li").hover(function(){
		$(this).addClass("show");
	});
	$(".header .inner ul.nav_box li").mouseleave(function(){
		$(this).removeClass("show");
	});
	
	// 左侧菜单切换事件
	$(".home_fund .left_side ul li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var className = $(this).attr("class").substring(0,6);
		$("#"+className+"").show().siblings().hide();
	});
	
	$("#zxkf").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=1604929181&json=%257BbusinessId%253A16%252Ctoken%253A%2522token%2522%252CcustomerId%253A1462001615718%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		$("#zxkf2").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=1604929181&json=%257BbusinessId%253A16%252Ctoken%253A%2522token%2522%252CcustomerId%253A1462001615718%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		$("#zxkf3").click(function(){
			$(".custom_ul").toggle();
		});
		
		$("#sjzq").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=8566328822&json=%257BbusinessId%253A16%252Ctoken%253A%2522token%2522%252CcustomerId%253A1465218132895%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		$("#wsjy").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=5932140162&json=%257BbusinessId%253A13%252Ctoken%253A%2522token%2522%252CcustomerId%253A1465218132895%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		$("#lccp").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=9761307461&json=%257BbusinessId%253A14%252Ctoken%253A%2522token%2522%252CcustomerId%253A1465218132895%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		$("#jjzx").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=7541794610&json=%257BbusinessId%253A15%252Ctoken%253A%2522token%2522%252CcustomerId%253A1465218132895%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		$("#zhyw").click(function(){
			window.open("http://call.95579.com/webcall/cgi-bin/webcall/OpenWindowAction?rand=7122389531&json=%257BbusinessId%253A17%252Ctoken%253A%2522token%2522%252CcustomerId%253A1465218132895%252CcustomerName%253A%2522%25E6%25B8%25B8%25E5%25AE%25A2%2522%252Csex%253A%2522%25E6%259C%25AA%25E7%259F%25A5%2522%252CloginType%253A%25220%2522%252Cattributes%253A%2522%2522%257D",
			"","height=500,width=600,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=400");
		});
		
		checkTop();

})	

	   function checkTop(){//监听滑过元素返回最初位置
		   var count = $("#marquee p").length;
		   var _height = $("#marquee p").height();
		   setInterval(function(){ 
			   for(var i=0;i<count;i++){
				   var _this = $("#marquee p").eq(i);
				   if(_this.position().top==_height*-1){
					   _this.css("top",(count-1)*_height+"px");
				   }
			   }
		   },100);
	   }
	   
var time=1;		
var ts;
/**弹出下载框*/
function showMsg(urlArr){
var htmlcontent = "<div class=\"pop_box download_pop\"><div class=\"title_box\"><a href=\"javascript:void(0);\"class=\"icon_close\" onclick=\"cancelDown();\"></a><h3>软件测速下载</h3></div><div class=\"cont_download\"><div class=\"download_tit\"><span>下载热点</span><span>下载速度</span></div>";
			if(urlArr.length>0){
				if(urlArr[0]!='null'){
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_dx\">武汉电信</p><div class=\"loading_box\" id='loading_box0'>正在检测网速....</div><div class=\"bar_box\" id='bar_box0'><span><em id='img0'></em></span></div><span class=\"speed\" id='text0'></span><a href='"+urlArr[0]+"' class=\"click_download\">点击下载</a></div>";
            	}else{
            		htmlcontent+="<div class=\"download_box\"><p class=\"icon_dx\">武汉电信</p><div class=\"bar_box\"><span><em id='img0'></em></span></div><span class=\"speed\" id='text0'></span><a href='javascript:void(0);' class=\"click_download\">点击下载</a></div>";
            	}
            	if(urlArr[1]!='null'){
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_dx\">成都电信</p><div class=\"loading_box\" id='loading_box1'>正在检测网速....</div><div class=\"bar_box\" id='bar_box1'><span><em id='img1'></em></span></div><span class=\"speed\" id='text1'></span><a href='"+urlArr[1]+"' class=\"click_download\">点击下载</a></div>";
            	}else{
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_dx\">成都电信</p><div class=\"bar_box\"><span><em id='img1'></em></span></div><span class=\"speed\" id='text1'></span><a href='javascript:void(0);' class=\"click_download\">点击下载</a></div>";
            	}
            	if(urlArr[2]!='null'){
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_dx\">深圳电信</p><div class=\"loading_box\" id='loading_box2'>正在检测网速....</div><div class=\"bar_box\" id='bar_box2'><span><em id='img2'></em></span></div><span class=\"speed\" id='text2'></span><a href='"+urlArr[2]+"' class=\"click_download\">点击下载</a></div>";
            	}else{
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_dx\">深圳电信</p><div class=\"bar_box\"><span><em id='img2'></em></span></div><span class=\"speed\" id='text2'></span><a href='javascript:void(0);' class=\"click_download\">点击下载</a></div>";
            	}
            	if(urlArr[3]!='null'){
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_wt\">哈尔滨网通</p><div class=\"loading_box\" id='loading_box3'>正在检测网速....</div><div class=\"bar_box\" id='bar_box3'><span><em id='img3' ></em></span></div><span class=\"speed\" id='text3'></span><a href='"+urlArr[3]+"' class=\"click_download\">点击下载</a></div>";
            	}else{
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_wt\">哈尔滨网通</p><div class=\"bar_box\"><span><em id='img3'></em></span></div><span class=\"speed\" id='text3'></span><a href='javascript:void(0);' class=\"click_download\">点击下载</a></div>";	
            	}
            	if(urlArr[4]!='null'){
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_wt\">武汉网通</p><div class=\"loading_box\" id='loading_box4'>正在检测网速....</div><div class=\"bar_box\" id='bar_box4'><span><em id='img4'></em></span></div><span class=\"speed\" id='text4'></span><a href='"+urlArr[4]+"' class=\"click_download\">点击下载</a></div>";
            	}else{
					htmlcontent+="<div class=\"download_box\"><p class=\"icon_wt\">武汉网通</p><div class=\"bar_box\"><span><em id='img4'></em></span></div><span class=\"speed\" id='text4'></span><a href='javascript:void(0);' class=\"click_download\">点击下载</a></div>";
            	}
			}else{
				htmlcontent+="<div><p>暂无下载地址...</p></div>";
			}
		htmlcontent+="</div></div>";
	popup(htmlcontent,249);
}	
/**测速开始**/
function getUrl(urlArr){
ts=setInterval("time++",1);  
try{
	showMsg(urlArr);
	for(var i=0;i<urlArr.length;i++){
	$("#bar_box"+i).hide();
		setTimeout("timeout("+i+")",5000);
		 if(urlArr[i]!='null'){
			 $(".footer").append("<img src="+urlArr[i]+Math.random(100)*6+" width=1 height=1 id=testimg"+i+" onerror=auto("+i+") />");
		 }
	}
 }catch(e){  
 }
}

/**判断快慢**/
function auto(i){
		 $("#testimg"+i).remove(); 
		if(time<100){
			//$("#img"+i).html("<img src='/images/dshk.gif' width='200'>");
			$("#loading_box"+i).hide();
			$("#bar_box"+i).show();
			$("#img"+i).css("width","100%");
			$("#text"+i).html("很快");
		}
		else if(100<=time&&time<300){
			//$("#img"+i).html("<img src='/images/dskk.gif' width='160'>");
			$("#loading_box"+i).hide();
			$("#bar_box"+i).show();
			$("#img"+i).css("width","70%");
			$("#text"+i).html("快");
		}
		else if(300<=time&&time<=600){
			//$("#img"+i).html("<img src='/images/dszz.gif' width='110'>");
			$("#loading_box"+i).hide();
			$("#bar_box"+i).show();
			$("#img"+i).css("width","50%");
			$("#text"+i).html("一般");
		}
		else if(600<=time&&time<1000){
			//$("#img"+i).html("<img src='/images/dsmm.gif' width='50'>");
			$("#loading_box"+i).hide();
			$("#bar_box"+i).show();
			$("#img"+i).css("width","10%");
			$("#text"+i).html("慢");
		}else{
			//$("#img"+i).html("<img src='/images/dsmm.gif' width='50'>");
			$("#loading_box"+i).hide();
			$("#bar_box"+i).show();
			$("#img"+i).css("width","10%");
			$("#text"+i).html("很慢");
		}
	}
/**超时**/
function timeout(i){
	clearInterval(ts);
	time=0;
	var str=$("#text"+i).html();
	if(str==null && (str==" " || str=="&nbsp;")){
		//$("#img"+i).html("<img src='/images/dsmm.gif'>");
		$("#img"+i).css();
		$("#text"+i).html("很慢");
	}
	 $("#testimg"+i).remove(); 
}
/**取消下载**/
function cancelDown(){
	time=0;
	index=5;
	clearInterval(ts);
    for(var i=0;i<index.length;i--){
     	 $("#testimg"+index).remove(); 
     }
     hidePopup();
}

// 点击弹框事件
	// $(".btn").each(function(){
	// 	$(this).click(function(){
	// 		var id= $(this).attr("val");
	// 		$("#"+id+"block").show();
	// 		$("#"+id+"div").show();
	// 	});
	// });
	
	// 关闭事件
	// $(".icon_close,.close_btn").each(function(){
	// 	$(this).click(function(){
	// 		$(this).parent().parent().hide();
	// 		$(this).parent().parent().prev().hide();
	// 	});
	// });
