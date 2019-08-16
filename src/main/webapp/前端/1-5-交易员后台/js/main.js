$(function(){
	//阴影
	$(".prev_con").append("<div class='top_shad'></div><div class='left_shad'></div><div class='right_shad'></div><div class='bottom_shad'></div>");
	// 文本输入框提示文字
    $(".i-txt").each(function() {
        var d_val = $(this).val()
        $(this).focus(function() {
            if ($(this).val() == d_val){
                $(this).val("");
                $(this).css("color","#666")
            }
        });
        $(this).blur(function() {
            if ($(this).val() == "") {
                $(this).val(d_val);
            }
        });
        })
    $(".right-message").animate({"height":"200px"}, 2000)
    setInterval(function(){
                    $(".right-message").animate({"height":"0px"}, 2000)
                },8000); 
    $(".right-message .tit span").click(function(event) {
        $(".right-message").hide();
    });

    /*tab 选项卡*/
function setTabs(BoxTabs,LiTabs,ConTabs){
    $(BoxTabs).each(function(){
        $(LiTabs).click(function(){
          if(!!($(this).parent('.lib-menu').find('css3-container').length == 0)){
              var Index=$(this).index();
          }else{
              var Index=Math.floor($(this).index()/2);
          };
          $(this).addClass('hover');
          $(this).siblings('li').removeClass('hover');
          $(ConTabs).eq(Index).css({'display':'block'});
          $(ConTabs).eq(Index).siblings(ConTabs).css({'display':'none'});
        });
    });
};
$(function(){
   setTabs('.lib-tab1','.lib-tab1 .lib-menu li','.lib-tab1 .lib-content .child-content');
   setTabs('.lib-tab2','.lib-tab2 .lib-menu li','.lib-tab2 .lib-content .child-content');
   setTabs('.lib-tab3','.lib-tab3 .lib-menu li','.lib-tab3 .lib-content .child-content');
   setTabs('.lib-tab4','.lib-tab4 .lib-menu li','.lib-tab4 .lib-content .child-content');
   setTabs('.lib-tab5','.lib-tab5 .lib-menu li','.lib-tab5 .lib-content .child-content');
   setTabs('.lib-tab6','.lib-tab6 .lib-menu li','.lib-tab6 .lib-content .child-content');
   setTabs('.lib-tab7','.lib-tab7 .lib-menu li','.lib-tab7 .lib-content .child-content');
});

// 会员审核 证件点击放大
 $(".sfz-img img").click(function(event) {
   var imgurl=$(this).attr("bigsrc");
   var winwidth=$(window).width();
   var bannermar_lef=(winwidth-500)/2;
   var bigimg=$("<img class='big-img'/>").css({"left":bannermar_lef+"px"});
   bigimg.attr("src",imgurl);
   var ttimg=$("<div class='Mask'></div>").append(bigimg);
   $("body").append(ttimg); 
   event.stopPropagation();
 });
 $(".big-img").live('click', function(event) {
   event.stopPropagation();
 });
 $("html,body").click(function(event) {
    $(".Mask").remove();
 });

 // 左侧导航展开
   $(".nav_li li ul li").each(function(index, el) {
      if($(this).hasClass('active')){
          $(this).parent("ul").css({"display":"block"});
        }
   });

   $(".nav_li li").click(function(event) {
     $(this).find("ul").css({"display":"block"});
   });

    $(".nav_li li:not(.nav_li li ul li)").click(function(){
        $(".nav_li li ul").hide();
        $(this).find("ul").css({"display":"block"});
    })
})
// 2015.8.20
$(".member-column").find(".child-content").each(function(index, el) {
    var that=this;
    $(this).find("input[type='radio']").click(function(event) {
      $(that).find(".inp-b").hide();
      var indexed = $(that).find("input[type='radio']").index(this);
      $(that).find(".inp-b").eq(indexed).show();
    });
});

 // 供应商授权书 点击放大
 $(".zxyl-p").click(function(event) {
   var imgurl=$(this).attr("bigsrc");
   var winwidth=$(window).width();
   var bannermar_lef=(winwidth-500)/2;
   var bigimg=$("<img class='big-img'/>").css({"left":bannermar_lef+"px"});
   bigimg.attr("src",imgurl);
   var ttimg=$("<div class='Mask'></div>").append(bigimg);
   $("body").append(ttimg); 
   event.stopPropagation();
 });
 $(".big-img").live('click', function(event) {
   event.stopPropagation();
 });
 $("html,body").click(function(event) {
    $(".Mask").remove();
 });

 // 2015.10.11  css
 $(function () {
    // 显示
    $('.pop-btn').click(function () {
        $(this).closest('td').css('zIndex', '2');
        $(this).closest('td').find('.pop').fadeIn(200);
    });
    // 隐藏
    //  $('.pop-sub,.pop i').click(function(){
    //    $(this).closest('.pop').fadeOut(200);
    //  });
    $('.pop i').click(function () {
        $(this).closest('.pop').fadeOut(200);
        $(this).closest('td').removeAttr('style');
    });
});
