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
     setTimeout(function(){
      $('.inquiry-list').hide();
    },0);
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
  //市
  $('.inquiry-span[index="2"]').on('click','span',function(){
    setTimeout(function(){
      $('.inquiry-list').hide();
    },0);
  });
});