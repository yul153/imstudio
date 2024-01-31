$(document).ready(function () {

  /* 서브메뉴 풀다운 */
  $(".gnb").hover(function () {
    $(this).find(".lnb").stop().slideDown();
    $(".lnbBg").stop().slideDown();
  }, function () {
    $(this).find(".lnb").stop().slideUp();
    $(".lnbBg").stop().slideUp();
  });

  $(".main1").hover(function () {
    $(this).find(".lnb-reservation").stop().slideDown();
    $(".lnbBg").stop().slideDown();
  }, function () {
    $(this).find(".lnb-reservation").stop().slideUp();
    $(".lnbBg").stop().slideUp();
  });


  /* _______________________studio */
  let imgon_w = $(".slideImage ul li").width();
  let imgon_n = $(".slideImage ul li").length;
  let soldidxon = 0;
  let sindexon = 0;

  $(".slideImage ul li:last").prependTo(".slideImage ul");
  $(".slideImage ul").css({ left: -imgon_w });

  function slideonImg(sindexon, m) {
    if (m == 0) {
      $(".slideImage ul").stop(true, true).animate({
        left: "+=" + imgon_w + "px"
      }, 600, "easeOutCubic", function () {
        $(".slideImage ul li:last").prependTo(".slideImage ul");
        $(".slideImage ul").css({ left: -imgon_w });
      });
    } else {
      $(".slideImage ul").stop(true, true).animate({
        left: "-=" + imgon_w + "px"
      }, 600, "easeOutCubic", function () {
        $(".slideImage ul li:first").appendTo(".slideImage ul");
        $(".slideImage ul").css({ left: -imgon_w });
      });
    }
    soldidxon = sindexon;
  };

  function slideonAuto() {
    sindexon++;
    if (sindexon == imgon_n) {
      sindexon = 0;
    }
    slideonImg(sindexon, 1);
  };
  timeron = setInterval(slideonAuto, 4000);

  //좌우버튼
  $(".rbtn").click(function () {
    clearInterval(timeron);
    sindexon++;
    if (sindexon == imgon_n) {
      sindexon = 0;
    }
    slideonImg(sindexon, 1);
    timeron = setInterval(slideonAuto, 4000);
  });

  $(".lbtn").click(function () {
    clearInterval(timeron);
    sindexon--;
    if (sindexon < 0) {
      sindexon = imgon_n - 1;
    }
    slideonImg(sindexon, 0);
    timeron = setInterval(slideonAuto, 4000);
  });

  //재배치
  for (let i = 1; i <= imgon_n; i++) {
    $(".slideImage ul li.i" + i).appendTo(".slideImage ul");
  }
  $(".slideImage ul li:last").prependTo(".slideImage ul");
  $(".slideImage ul li:last").prependTo(".slideImage ul");

  for (let i = 1; i <= sindexon + 1; i++) {
    slideonImg(sindexon, 1);
  }
  timeron = setInterval(slideonAuto, 4000);

  //오버시 멈춤
  $(".slideImage ul li").hover(function () {
    clearInterval(timeron);
  }, function () {
    timeron = setInterval(slideonAuto, 4000);
  });


  /* _______________________gallery */

  //각 목록을 클릭했을때
  $(".galleryImage_list>li").click(function () {
    g_pop = $(this).index();
    $(".m_page span:nth-child(1)").text(g_pop + 1);
    $("html").css({ "overflow-y": "hidden" });
    $(".pop>li").eq(g_pop).show();
    $(".popup").stop().fadeIn();
  });

  //이전다음버튼
  $(".mleft_btn").click(function () {
    if (g_pop > 0) {
      $(".pop>li").eq(g_pop).stop().fadeOut();
      g_pop--;
      $(".m_page span:nth-child(1)").text(g_pop + 1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    };
  });

  $(".mright_btn").click(function () {
    if (g_pop < 14) {
      $(".pop>li").eq(g_pop).stop().fadeOut();
      g_pop++;
      $(".m_page span:nth-child(1)").text(g_pop + 1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    };
  });

  //닫기버튼
  $(".mbtn_close").click(function () {
    $("html").css({ "overflow-y": "scroll" });
    $(".popup").stop().fadeOut();
    $(".pop>li").stop().hide();
  });

  /* _______________________photographer */
  //각 목록을 클릭했을때
  $(".photographerImage_list>li").click(function () {
    g_pop = $(this).index();
    $(".m_page span:nth-child(1)").text(g_pop + 1);
    $("html").css({ "overflow-y": "hidden" });
    $(".pop>li").eq(g_pop).show();
    $(".popup").stop().fadeIn();
  });



 /* _______________________Guide */
/* 이용안내 모달 */
$(".useModalContent a").click(function(){
  $(this).next().show();
  $("html").css({"overflow-y":"hidden"});
});

$(".useModalClose, .usePop").click(function(){
  $(".usePop").hide();
  $("html").css({"overflow-y":"scroll"});
});






});