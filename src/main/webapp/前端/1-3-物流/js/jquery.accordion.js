(function(jQuery) {
  jQuery.fn.accordion = function(options) {
    var settings = jQuery.extend({}, {open: false}, options);
    return this.each(function() {
      var dts = jQuery(this).children('dt');
      dts.click(onClick);
      dts.each(reset);
      if(settings.open) {
        jQuery(this).children('dt').eq(0).next().show();
        jQuery(this).children('dt').eq(0).children('.quote-btn').hide();
      }
    });
    function onClick() {
      jQuery(this).siblings('dt').each(hide);
      jQuery(this).next().slideDown('fast');
      jQuery(this).children('.quote-btn').hide();
      jQuery(this).siblings('dt').children('.quote-btn').show();
      return false;
    }
    function hide() {
      jQuery(this).next().slideUp('fast');
    }
    function reset() {
      jQuery(this).next().hide();
    }
  }
})(jQuery);
(function(jQuery) {
  jQuery.fn.accordionHover = function(options) {
    var settings = jQuery.extend({}, {open: false}, options);
    return this.each(function() {
      var dds = jQuery(this).children('dd');
      var dts = jQuery(this).children('dt');
      dts.hover(onClick);
      dds.each(reset);
      if(settings.open) {
        jQuery(this).children('dd').eq(0).show();
        jQuery(this).children('dt').eq(0).hide();
      }
    });
    function onClick() {
      $(this).siblings('dt').show();
      $(this).siblings('dd').hide();
      $(this).hide();
      $(this).next('dd').show();
      return false;
    }
    function reset() {
      $(this).siblings('dd').hide();
    }
  }
})(jQuery);
