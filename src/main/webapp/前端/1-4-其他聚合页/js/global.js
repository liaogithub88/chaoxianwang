/*全部商品 关闭 展开*/
$(function(){
	$('.pro-all').click(function(){
		$(this).children('i').toggleClass('fa-sort-desc');
		$(this).siblings('ul').slideToggle('slow');
	});
});
/*内容居中*/
function elementAuto(elememt,childElement){
    var childWid=$(childElement).width();
    var eleWid=$(elememt).width();
    $(childElement).css("margin-left",(eleWid - childWid)/2 + "px");
    };
$(function(){
    elementAuto('#bannerIndex','#bannerIndex .hd');
    elementAuto('.lib-tab1','.lib-tab1 .hd');
    elementAuto('.copy','.copy-nav');
    elementAuto('.banner-quotes02','.banner-quotes02 .hd');
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
});
/*搜索页 二级下拉菜单*/
$(function(){
    $('.menuPro-left dl dd .menuPro-first').each(function(){
        if($(this).hasClass("selected")){
            $(this).children('i').addClass('fa-minus-square');
            $(this).siblings('.menuPro-second').show(0);
        };
        $(this).click(function(){
           $(this).children('i').toggleClass('fa-minus-square');
           $(this).siblings('.menuPro-second').slideToggle();
           $(this).closest('dd').siblings('dd').find('.menuPro-second').slideUp();
           $(this).closest('dd').siblings('dd').find('i').removeClass('fa-minus-square');
        });
    });
    $('.member-left dl dd .menuPro-first').each(function(){
        if($(this).hasClass("selected")){
            $(this).children('i').addClass('fa-minus-square');
            $(this).siblings('.menuPro-second').show(0);
        };
        $(this).click(function(){
           $(this).children('i').toggleClass('fa-minus-square');
           $(this).siblings('.menuPro-second').slideToggle();
           $(this).closest('dd').siblings('dd').find('.menuPro-second').slideUp();
           $(this).closest('dd').siblings('dd').find('i').removeClass('fa-minus-square');
        });
    });
});
/*table 隔行变色*/
$(function(){
  $('.search-table table tr:even,.logistics-route tr:odd,.table-points tr:odd').css({
     background:"#e9f5ff"
  });
});
/*我的承运单*/
$(function(){
  /*筛选*/
  $('.order-status a').click(function(){
    $(this).toggleClass('selected');
    $(this).siblings('a').removeClass('selected');
  });
  /*价格操作*/
  $('.price-btn').click(function(){
    $(this).closest('tr').find('.price-sub').show();
    $(this).closest('tr').find('.price-input').show();
    $(this).closest('tr').find('.price-txt').hide();
  });
  $('.price-sub').click(function(){
    $(this).closest('tr').find('.price-sub').hide();
    $(this).closest('tr').find('.price-input').hide();
    $(this).closest('tr').find('.price-txt').show();
  });
  $('.price-input').keypress(function(e){
    var k = e.keyCode || e.which;
    if(k>=48&&k<=57||k==8){
        return true;
    };
    return false;
  });
});
$(function(){
    $('.order-received').each(function(){
      $(this).find('table td table').each(function(){
            $(this).find('tr:last').css({
              border:'none'
            });
      });
    });
});
/*上传资源*/
// $(function(){
//   // 增加
//   $('.method-table .add').on('click',function(){
//     var tr = $(this).closest('.method-table').find('tr').eq(1).clone();
//     tr.find('input').val('');
//     tr.find('select').selectedIndex=1;
//     $(this).closest('.method-table').children('table').append(tr);
//   });
//   // 删除
//   $(document).on('click','.method-table .del',function(){
//        if($(this).closest('tbody').find('tr').length ==1){
//            alert("对不起，至少保留一行数据！")
//        }else{
//            $(this).closest('tr').remove();
//        }
//   });
// });
/*单击预览大图*/
$(function(){
    // 图片放大
    $('.preview-img').each(function(){
        $(this).click(function(){
            var ImgSrc = $(this).children('img').attr("src");
            $('.bigPic img').attr("src",ImgSrc);
            $('.mask').fadeIn(500);
        });
    });
    $('.pop-pay').each(function(){
        $(this).click(function(){
            var ImgSrc = $(this).attr("data-src");
            $('.bigPic img').attr("src",ImgSrc);
            $('.mask').fadeIn(500);
        });
    });
    $('.bigPic i').click(function(){
        $('.mask').fadeOut(500);
    });
});
/*承运管理 我的车辆*/
$(function(){
    // 修改信息
    $('.car-revise').each(function(){
        $(this).click(function(){
            $('.mask-car').fadeIn(500);
        });
    });
    $('.bigPic i,.bigPic .car-sub').click(function(){
        $('.mask-car').fadeOut(500);
    });
});
/*弹出框*/
$(function(){
  // 显示
  $('.pop-btn').click(function(){
    $(this).closest('td').find('.pop').fadeIn(200);
  });
  // 隐藏
  $('.pop-sub,.pop i').click(function(){
    $(this).closest('.pop').fadeOut(200);
  });
});
/*弹出框*/
$(function(){
   // 供应商管理-修改价格
    $('.pop-sub').each(function(){
        $(this).click(function(){
            $('.mask01').fadeIn(500);
        });
    });
    $('.bigPic i,.bigPic .closed').click(function(){
        $('.mask01').fadeOut(500);
    });
});
/*输入框*/
function showtxt(element, txt) {
    var inputName = element;
    var inputTxt = txt;
    inputName.val(inputTxt);
    //点击时
    inputName.click(function() {
        if (inputName.val() == inputTxt) {
            inputName.val("");
        }
    });
    //失去焦点时
    inputName.blur(function() {
        if (inputName.val() == "") {
            inputName.val(inputTxt);
        }
    });
}
$(function(){
   showtxt($(".helpMe-input"), '写下您的真实需求，收到后我们会立即给您回电确认。');
});

/* 城市查询 城市切换*/
$(function(){
  // tab 切换
  $('.lib-tab9').each(function(){
     $(this).find('.lib-menus li').click(function(){
        $(this).addClass('hover');
        $(this).siblings('.lib-menus li').removeClass('hover');
        var Index =$(this).index();
        console.log(Index);
        $(this).closest('.lib-tab9').find('.child-contents').eq(Index).css({'display':'block'});
        $(this).closest('.lib-tab9').find('.child-contents').eq(Index).siblings('.child-contents').css({'display':'none'});
     });
  });
  $('.inquiry-tool label').each(function(){
    // 显示列表
    $('i').click(function(){
      $('.inquiry-list').hide();
      $(this).closest('label').find('.inquiry-list').show();
      $('.input01').focusout();
    });
    $(this).find('.input01').focus(function(){
      $('.inquiry-list').hide();
      $(this).closest('label').find('.inquiry-list').show();
    });
    // 隐藏列表
    $('.closed').click(function(){
      $(this).closest('label').find('.inquiry-list').hide();
    });
  });
  // 获取数据
  $('.inquiry-span span').click(function(){
      $(this).addClass('selected');
      $(this).siblings('span').removeClass('selected');
      var dataName = $(this).attr('data-name');
      $(this).closest('label').find('.input01').val(dataName);
       $(this).closest('label').find('.input01').blur();
  });
  // 常用
  $('.inquiry-span[index="0"]').find('span').click(function(){
      var index = $(this).closest('label').find('.inquiry-span[index="3"]').closest('.child-contents').index();
      $(this).closest('.lib-tab9').find('.lib-menus li').eq(index).addClass('hover');
      $(this).closest('.lib-tab9').find('.lib-menus li').eq(index).siblings('li').removeClass('hover');
      $('.inquiry-span[index="3"]').closest('.child-contents').css({display:'block'});
      $('.inquiry-span[index="3"]').closest('.child-contents').siblings('.child-contents').hide();
  });
  // 省
  $('.inquiry-span[index="1"]').find('span').click(function(){
      var index = $(this).closest('label').find('.inquiry-span[index="2"]').closest('.child-contents').index();
      $(this).closest('.lib-tab9').find('.lib-menus li').eq(index).addClass('hover');
      $(this).closest('.lib-tab9').find('.lib-menus li').eq(index).siblings('li').removeClass('hover');
      $('.inquiry-span[index="2"]').closest('.child-contents').css({display:'block'});
      $('.inquiry-span[index="2"]').closest('.child-contents').siblings('.child-contents').hide();
  });
  // 市
  $('.inquiry-span[index="2"]').find('span').click(function(){
      var index = $(this).closest('label').find('.inquiry-span[index="3"]').closest('.child-contents').index();
      $(this).closest('.lib-tab9').find('.lib-menus li').eq(index).addClass('hover');
      $(this).closest('.lib-tab9').find('.lib-menus li').eq(index).siblings('li').removeClass('hover');
      $('.inquiry-span[index="3"]').closest('.child-contents').css({display:'block'});
      $('.inquiry-span[index="3"]').closest('.child-contents').siblings('.child-contents').hide();
  });
  //区
  $('.inquiry-span[index="3"]').find('span').click(function(){
      $('.inquiry-list').hide();
  });
});