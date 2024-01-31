$(document).ready(function () {

  /* 메인메뉴 풀다운 */
  $(".gnb").hover(function () {
    $(this).find(".lnb").stop().slideDown();
    $(".lnbBg").stop().slideDown();
  }, function () {
    $(this).find(".lnb").stop().slideUp();
    $(".lnbBg").stop().slideUp();
  });
});


/* 메인비주얼 */
let $img = $(".mainImage ul li");
let $btn = $(".indicator ul li");
let $lbtn = $(".mainSideBtn .mainPre");
let $rbtn = $(".mainSideBtn .mainNex");
let oldidx = 0;
let idx = 0;
let img_n = $img.length;

function mainImage(idx) {
  if (oldidx != idx) {
    $btn.eq(oldidx).removeClass("active");
    $btn.eq(idx).addClass("active");
    $img.eq(oldidx).stop().fadeOut(300);
    $img.eq(idx).stop().fadeIn(300);
  }
  oldidx = idx;
};


//자동함수 생성
function changeAuto() {
  idx++;
  if (idx > img_n - 1) {
    idx = 0;
  }
  mainImage(idx);
};

timer = setInterval(changeAuto, 4000);

//좌우버튼
$lbtn.click(function () {
  clearInterval(timer);
  idx--;
  if (idx < 0) {
    idx = img_n - 1;
  }
  mainImage(idx);
  timer = setInterval(changeAuto, 4000);
});

$rbtn.click(function () {
  clearInterval(timer);
  idx++;
  if (idx > img_n - 1) {
    idx = 0;
  }
  mainImage(idx);
  timer = setInterval(changeAuto, 4000);
});

//하단버튼
$btn.click(function () {
  clearInterval(timer);
  idx = $(this).index();
  mainImage(idx);
  timer = setInterval(changeAuto, 4000);


  // /* 하단자동배너 */
  // let x = 0;
  // let s = 1;

  // function motion() {
  //   x = x + s;
  //   if (x < -1890) { x = 0 };
  //   if (x > 0) { x = -1890 };

  //   $(".bottomBannerList .bottomBanner").css({ left: x });
  // };

  // bottomAuto = setInterval(motion, 20);

  // //오버시 멈춤
  // $(".bottomBannerList .bottomBanner").hover(function () {
  //   clearInterval(bottomAuto);
  // }, function () {
  //   bottomAuto = setInterval(motion, 20);
  // });



























});
