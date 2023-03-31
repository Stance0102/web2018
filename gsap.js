$(function(){
	var i,time;
	IndexRun();
	function IndexRun(){
		var run1=$(".run1"),run2=$(".run2");
		TweenLite.to(run1,2,{left:"-100%",autoAlpha:1});
		TweenLite.to(run2,2,{left:0,autoAlpha:1});
	}
	UdFade();
	function UdFade(){
		var h1=$(".udrunh1"),h2=$(".udrunh2"),box=$(".udrun"),run=500;
		$(window).on("load scroll resize",function(){
			box.each(function(){
				var $this=$(this),settop=$this.offset().top
				if($(window).scrollTop()>(settop+run)-$(window).height()){
					TweenLite.to(h1,2.5,{top:0,autoAlpha:1});
					TweenLite.to(h2,2.5,{top:0,autoAlpha:1});
				}else{
					TweenLite.to(h1,2.5,{top:"-100%",autoAlpha:0});
					TweenLite.to(h2,2.5,{top:"100%",autoAlpha:0});
				}
			});
		});
	}
	LrFade();
	function LrFade(){
		var h1=$(".lrrunh1"),h2=$(".lrrunh2"),box=$(".lrrun"),run=500;
		$(window).on("load scroll resize",function(){
			box.each(function(){
				var $this=$(this),settop=$this.offset().top
				if($(window).scrollTop()>(settop+run)-$(window).height()){
					TweenLite.to(h1,2.5,{left:0,autoAlpha:1});
					TweenLite.to(h2,2.5,{left:0,autoAlpha:1});
				}else{
					TweenLite.to(h1,2.5,{left:"-100%",autoAlpha:0});
					TweenLite.to(h2,2.5,{left:"100%",autoAlpha:0});
				}
			});
		});
	}
	FadeIn1();
	function FadeIn1(){
		var img=$(".fadeimg1"),run=500,dtime=0.5;
		$(window).on("load scroll resize",function(){
			img.each(function(i){
				var $this=$(this),settop=$this.offset().top;
				if($(window).scrollTop()>(settop+run)-$(window).height()){
					TweenLite.to(img[i],0.5,{autoAlpha:1,delay:(i*dtime)});
				}else{
					TweenLite.to(img[i],0.5,{autoAlpha:0,delay:(i*dtime)});
				}
			});
		});
	}
	FadeIn2();
	function FadeIn2(){
		var img=$(".fadeimg2"),run=500,dtime=0.5;
		$(window).on("load scroll resize",function(){
			img.each(function(i){
				var $this=$(this),settop=$this.offset().top;
				if($(window).scrollTop()>(settop+run)-$(window).height()){
					TweenLite.to(img[i],0.5,{autoAlpha:1,delay:(i*dtime)});
				}else{
					TweenLite.to(img[i],0.5,{autoAlpha:0,delay:(i*dtime)});
				}
			});
		});
	}
	ShowSlidelr1();
	function ShowSlidelr1(){
		var i,cur=0,now,width=$("#slidebox1").width(),prev=$("#prev1"),next=$("#next1"),dot=$(".dot"),interval;
		time=1500;
		slideOn();
		dotcur();
		function slideOn(){
			now=cur+1;
			interval=setInterval(slide,6000);
		}
		function slideOff(){
			clearInterval(interval);
		}
		prev.click(function(){
			now=cur-1;
			slide();
			dotcur();
		});
		next.click(function(){
			now=cur+1;
			slide();
			dotcur();
		});
		$("#dot1").click(function(){
			now=cur=0;
			slide();
			dotcur();
		});
		$("#dot2").click(function(){
			now=cur=1;
			slide();
			dotcur();
		});
		$("#dot3").click(function(){
			now=cur=2;
			slide();
		});
		$("#dot4").click(function(){
			now=cur=3;
			slide();
		});
		$("#dot5").click(function(){
			now=cur=4;
			slide();
		});
		$("#dot6").click(function(){
			now=cur=5;
			slide();
		});
		$("#dot7").click(function(){
			now=cur=6;
			slide();
		});
		$("#dot8").click(function(){
			now=cur=7;
			slide();
		});
		$("#dot9").click(function(){
			now=cur=8;
			slide();
		});
		$("#dot10").click(function(){
			now=cur=9;
			slide();
		});
		function slide(){
			if(now>9){now=0;}
			if(now<0){now=9;}
			cur=now;
			slideOff();
			dotcur();
			$("#leftslide1").stop(true).animate({left:-width*now},time);
			$("#rightslide1").stop(true).animate({right:-width*now},time,function(){slideOn();});
		}
		function dotcur(){
			for(i=0;i<dot.length;i++){
				dot[i].style.backgroundColor="transparent";
			}
			dot[cur].style.backgroundColor="#333";
		}
	}
	ShowSlidelr2();
	function ShowSlidelr2(){
		var i,cur=0,now,width=$("#slidebox2").width(),prev=$("#prev2"),next=$("#next2"),dot=$(".dot"),interval;
		time=1500;
		slideOn();
		dotcur();
		function slideOn(){
			now=cur+1;
			interval=setInterval(slide,6000);
		}
		function slideOff(){
			clearInterval(interval);
		}
		prev.click(function(){
			now=cur-1;
			slide();
		});
		next.click(function(){
			now=cur+1;
			slide();
		});
		$("#dot11").click(function(){
			now=cur=0;
			slide();
		});
		$("#dot12").click(function(){
			now=cur=1;
			slide();
		});
		$("#dot13").click(function(){
			now=cur=2;
			slide();
		});
		$("#dot14").click(function(){
			now=cur=3;
			slide();
		});
		function slide(){
			if(now>3){now=0;}
			if(now<0){now=3;}
			cur=now;
			slideOff();
			dotcur();
			$("#leftslide2").stop(true).animate({left:-width*now},time);
			$("#rightslide2").stop(true).animate({right:-width*now},time,function(){slideOn();});
		}
		function dotcur(){
			for(i=0;i<dot.length;i++){
				dot[i].style.backgroundColor="transparent";
			}
			dot[cur].style.backgroundColor="#333";
		}
	}
	upslide();
	function upslide(){
		var cur=0,now,height=$("#slidebox3").height(),down=$(".down"),up=$(".up");
		time=1500;
		down.click(function(){
			now=cur+1;
			slide();
		});
		up.click(function(){
			now=cur-1;
			slide();
		});
		function slide(){
			if(now>9){now=0;}
			if(now<0){now=9;}
			cur=now;
			$(".upslide").stop(true).animate({top:-height*now},time);
		}
	}
});