// ハンバーガーメニュー
$(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
    $("#nav").toggleClass('active');
  })
}) $(function () {
  $('#nav a').on('click', function () {
    $('#nav').toggleClass('active');
    $(".menu").toggleClass('active');
  })
});

// ハンバーガーメニュー（バックグラウンドの影付き）
$(function () {
	$('.ハンバーガーメニュー').click(function () {
		$(this).toggleClass('active');
		$('.バックグラウンド').fadeToggle();
		$('.メニューの部分').toggleClass('open');
	})
	$('.バックグラウンド').click(function () {
		$(this).fadeOut();
		$('.ハンバーガーメニュー').removeClass('active');
		$('.メニューの部分').removeClass('open');
	});
});

// ヘッダースクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});