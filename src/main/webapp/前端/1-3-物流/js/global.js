/*内容居中*/
function elementAuto(elememt,childElement){
    var childWid=$(childElement).width();
    var eleWid=$(elememt).width();
    $(childElement).css("margin-left",(eleWid - childWid)/2 + "px");
    };
$(function(){
    elementAuto('.lib-tab1','.lib-tab1 .hd');
    elementAuto('.copy','.copy-nav');
});
/*tab 选项卡*/
function setTabs(BoxTabs,LiTabs,ConTabs){
    $(BoxTabs).each(function(){
      $(this).find('.lib-menu li')
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
   setTabs('.lib-tab5','.lib-tab5 .lib-menu li','.lib-tab5 .lib-content .child-content');
   setTabs('.lib-tab6','.lib-tab6 .lib-menu li','.lib-tab6 .lib-content .child-content');
});
function hoverTabs(BoxTabs,LiTabs,ConTabs){
    $(BoxTabs).each(function(){
        $(LiTabs).hover(function(){
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
  hoverTabs('.lib-tab7','.lib-tab7 .lib-menu li','.lib-tab7 .child-content');
})
/*table 隔行变色*/
$(function(){
  $('.logistics-route,.lib-tab5 table,.comment-list table').each(function(){
    $(this).find('tr:odd').css({
       background:"#e9f5ff"
    });
  });
});
/*条件筛选*/
$(function(){
  $('.sequence .btn13').click(function(){
    $(this).addClass('selected');
    $(this).siblings('.btn13').removeClass('selected');
  });
});
/*网点地图*/
$(function(){
  $('.con-list').hide();
  $('.branch-tit li').click(function(){
    $(this).addClass('selected');
    $(this).siblings('li').removeClass('selected');
  });
  $('.map-pic').click(function(){
    $('.con-list').hide();
    $('.con-pic').show();
  });
  $('.map-list').click(function(){
    $('.con-list').show();
    $('.con-pic').hide();
  })
});

/* 城市查询 城市切换*/
$(function(){
  // tab 切换
  $('.lib-tab9').each(function(){
     $(this).find('.lib-menus li').click(function(){
        $(this).addClass('hover');
        $(this).siblings('.lib-menus li').removeClass('hover');
        var Index =$(this).index();
        $(this).closest('.lib-tab9').find('.child-contents').eq(Index).css({'display':'block'});
        $(this).closest('.lib-tab9').find('.child-contents').eq(Index).siblings('.child-contents').css({'display':'none'});
     });
  });
  $('.city-linkage').each(function(){
    // 初始化
    $(this).parent('.controls').css({zIndex:'2'});
    $(this).css({position:'relative'});
    var listTop =$(this).children('input').outerHeight();
    var listLeft =$(this).children('input').css('margin-left');
    $(this).children('.inquiry-list').css({
      top:listTop+'px',
      left:listLeft
    });
    // 提示文字
    var inputName = $(this).children('input');
    var inputTxt = '请输入城市';
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
    // 显示列表
    $('i').click(function(){
      $('.inquiry-list').hide();
      $(this).closest('.city-linkage').find('.inquiry-list').show();
    });
    $(this).find('input').focus(function(){
      $('.inquiry-list').hide();
      $(this).closest('.city-linkage').find('.inquiry-list').show();
    });
    // 隐藏列表
    $('.closed').click(function(){
      $(this).closest('.city-linkage').find('.inquiry-list').hide();
    });
  });
  // 获取数据
   function spanClick(){
      $('.inquiry-span').on('click','span',function(){
        $(this).closest('.inquiry-span').find('span').removeClass('selected');
        $(this).addClass('selected');
        var dataName = $(this).attr('data-name');
        $(this).closest('.city-linkage').find('input').val(dataName);
    });
  };
  spanClick();
  // 常用
  $('.inquiry-span[index="0"]').on('click','span',function(){
      var index = $(this).closest('.city-linkage').find('.inquiry-span[index="3"]').closest('.child-contents').index();
      var lib = $(this).closest('.lib-tab9');
      lib.find('.lib-menus li').eq(index).addClass('hover');
      lib.find('.lib-menus li').eq(index).siblings('li').removeClass('hover');
      lib.find('.inquiry-span[index="3"]').closest('.child-contents').css({display:'block'});
      lib.find('.inquiry-span[index="3"]').closest('.child-contents').siblings('.child-contents').hide();
  });
  // 省
  $('.inquiry-span[index="1"]').on('click','span',function(){
      var index = $(this).closest('.city-linkage').find('.inquiry-span[index="2"]').closest('.child-contents').index();
      var lib = $(this).closest('.lib-tab9');
      lib.find('.lib-menus li').eq(index).addClass('hover');
      lib.find('.lib-menus li').eq(index).siblings('li').removeClass('hover');
      lib.find('.inquiry-span[index="2"]').closest('.child-contents').css({display:'block'});
      lib.find('.inquiry-span[index="2"]').closest('.child-contents').siblings('.child-contents').hide();
  });
 // 市
  $('.inquiry-span[index="2"]').on('click','span',function(){
      var index = $(this).closest('.city-linkage').find('.inquiry-span[index="3"]').closest('.child-contents').index();
      var lib = $(this).closest('.lib-tab9');
      lib.find('.lib-menus li').eq(index).addClass('hover');
      lib.find('.lib-menus li').eq(index).siblings('li').removeClass('hover');
      lib.find('.inquiry-span[index="3"]').closest('.child-contents').css({display:'block'});
      lib.find('.inquiry-span[index="3"]').closest('.child-contents').siblings('.child-contents').hide();
  });
  //区
  $('.inquiry-span[index="3"]').on('click','span',function(){
    setTimeout(function(){
      $('.inquiry-list').hide();
    },0);
  });
});