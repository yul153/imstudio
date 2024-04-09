$(document).ready(function () {
  
  // /* 하단자동배너 */
  let x = 0;
  let s = 1;

  function motion() {
    x = x + s;
    if (x < -1890) { x = 0 };
    if (x > 0) { x = -1890 };

    $(".bottomBannerList .bottomBanner").css({ left: x });
  };

  bottomAuto = setInterval(motion, 20);

  //오버시 멈춤
  $(".bottomBannerList .bottomBanner").hover(function () {
    clearInterval(bottomAuto);
  }, function () {
    bottomAuto = setInterval(motion, 20);
  });



























});
