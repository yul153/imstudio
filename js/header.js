$(document).ready(function () {

  /* 메인 탑메뉴 풀다운 */
  $(".gnb").hover(function () {
    $(this).find(".lnb").stop().slideDown();
    $(".lnbBg").stop().slideDown();
  }, function () {
    $(this).find(".lnb").stop().slideUp();
    $(".lnbBg").stop().slideUp();
  });

  /* 메인비주얼 */
  let $img = $(".mainImage ul li");
  let $btn = $(".indicator ul li");
  let $lbtn = $(".mainSideBtn .mainPre");
  let $rbtn = $(".mainSideBtn .mainNex");
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx) {
    if (oldidx != idx) {
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  function changeAuto() {
    idx++;
    if (idx > img_n - 1) {
      idx = 0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto, 4000);

  //하단버튼
  $btn.click(function () {
    clearInterval(timer);
    idx = $(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto, 4000);
  });

  //좌우버튼
  $lbtn.click(function () {
    clearInterval(timer);
    idx--;
    if (idx < 0) {
      idx = img_n - 1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 4000);
  });

  $rbtn.click(function () {
    clearInterval(timer);
    idx++;
    if (idx > img_n - 1) {
      idx = 0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 4000);
  });


  /* 탑버튼 상단에서는 안보이게 */
  $(window).scroll(function () {

    let pos = $(window).scrollTop();

    if (pos > 200) {
      $("header, .topButton").addClass('active');
    } else {
      $("header, .topButton").removeClass('active');
    };
  });
});
