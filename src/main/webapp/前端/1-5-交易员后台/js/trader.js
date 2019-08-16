//========================================================
//取地区
function GetArea(parentID, selVal, obj) {
    $.ajax({
        type: "POST",
        url: "/Ajax/Ajax_GetArea.ashx?rnd=" + Math.random(),
        data: "ParentID=" + parentID,
        dataType: "html",
        beforeSend: function () {
        },
        success: function (data) {
            $(obj).empty();
            $(obj).append(data);
            $(obj).val(selVal);

        },
        error: function () {
            lib.alert("请求失败,请重试!");
        }
    });
}

$(function () {
    // 点击图片放大
    $("img.upload_img").click(function (event) { 
        var imgurl = $(this).attr("src");
        var winwidth = $(window).width();
        var bannermar_lef = (winwidth - 500) / 2;
        var bigimg = $("<img class='big-img'/>").css({ "left": bannermar_lef + "px" });
        bigimg.attr("src", imgurl);
        var ttimg = $("<div class='Mask'></div>").append(bigimg);
        $("body").append(ttimg);
        event.stopPropagation();

    });
});
