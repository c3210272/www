$(window).on('load resize', function() {
  var w = window.innerWidth ? window.innerWidth : $(window).width(),
      wrapper = $('#wrapper').outerHeight(true),
      header = $('header').outerHeight(true);

  //600より大きい時は#rightcolumnの内容が少なくても最大にする

  if (w > 600) {
    $('#leftcolumn-wrap').css('min-height', wrapper + 'px');
    $('#leftcolumn').css('padding-top', header + 'px');
  } else {
    $('#leftcolumn-wrap').css('min-height', 'auto');
    $('#leftcolumn').css('padding-top', '');
  }
});


