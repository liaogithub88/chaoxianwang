// 弹窗封装的效果
;(function($){
	$.fn.extend({
	"pop_up":function(options){
		options=$.extend({
			popboxbg:$("<div class=\"pop_box\">"+"</div>"),
			popbox:$(".kf_ghhm"),
			popclick:$(".mo_qrtj"),
			colseclick:$(".ghhm_colse"),
			popboxwid:527,
			popboxheig:377
		},options);
		return this.each(function(index, el) {
			options.popbox.css("opacity",0);
			options.popbox.css("width",options.popboxwid+"px");
			options.popbox.css("height",options.popboxheig+"px");
			options.popboxbg.css({"width":"100%","height":$(document).height()+"px","position":"absolute","left":"0px","top":"0px","background":"#000","opacity":"0","z-index":"99"})
			options.popclick.click(function(){
				$("body").append(options.popboxbg);
				options.popboxbg.animate({"opacity":"0.7"},1000).css({"display":"block"})
				options.popbox.animate({"opacity":"1"},1000)
	    		var popboxleft=($("body").width()-options.popbox.width())/2
	    		options.popbox.css({"left":popboxleft+"px","display":"block"})
			})
			options.colseclick.click(function(){
				options.popbox.animate({"opacity":"0"},1000)
		    	options.popbox.css({"display":"none"})
		    	options.popboxbg.animate({"opacity":"0"},1000)
		    	options.popboxbg.css({"display":"none"})
			})
		});

	}
})
})(jQuery);