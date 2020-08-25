$(function () {
  // #で始まるリンクをクリックしたら実行
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    const speed = 500; // ミリ秒で記述
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
