$(document).ready(function () {

  /* _______________________studio */
  let $simg = $(".slideImage ul");
  let $simgli = $(".slideImage ul li");
  let $snext = $(".slideButton .rbtn");
  let $spre = $(".slideButton .lbtn");
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx = 0;
  let sindex = 0;

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex) {
    targetX = -(sindex * simg_w)
    $simg.stop().animate({ left: targetX }, 600);
    soldidx = sindex;
  };

  //자동함수 생성
  function slideAuto() {
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
  };
  auto = setInterval(slideAuto, 4000);

  //좌우버튼
  $spre.click(function () {
    clearInterval(auto);
    sindex--;
    if (sindex < 0) {
      sindex = simg_n - 1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  $snext.click(function () {
    clearInterval(auto);
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  //오버시 멈춤
  $(".slideImage").hover(function () {
    clearInterval(auto);
  }, function () {
    auto = setInterval(slideAuto, 4000);
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
    if (g_pop < 38) {
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
  let tab_party = window.location.pathname;
  $(".tabMenu ul li a[href='" + tab_party + "']").addClass("active");


  $(".photographerImage_list li").click(function () {
    g_pop1 = $(this).index();
    $(".pm_page span:nth-child(1)").text(g_pop1 + 1);
    $("html").css({ "overflow-y": "hidden" });
    $(".ppop_body>ul>li").eq(g_pop1).show();
    $(".ppopup").stop().fadeIn();
  });

  $(".pmleft_btn").click(function () {
    if (g_pop1 > 0) {
      $(".ppop_body ul li").eq(g_pop1).stop().fadeOut();
      g_pop1--;
      $(".pm_page span:nth-child(1)").text(g_pop1 + 1);
      $(".ppop_body ul li").eq(g_pop1).stop().fadeIn();
    };
  });

  $(".pmright_btn").click(function () {
    var totalImages = $(".ppop_body ul li").length;
    if (g_pop1 < totalImages - 1) {
      $(".ppop_body ul li").eq(g_pop1).stop().fadeOut();
      g_pop1++;
      $(".pm_page span:nth-child(1)").text(g_pop1 + 1);
      $(".ppop_body ul li").eq(g_pop1).stop().fadeIn();
    };
  });

  $(".pmbtn_close").click(function () {
    $("html").css({ "overflow-y": "scroll" });
    $(".ppopup").stop().fadeOut();
    $(".ppop_body ul li").stop().hide();
  });

  /* _______________________Guide */
  /* 이용안내 모달 */
  $(".useModalContent a").click(function () {
    $(this).next().show();
    $("html").css({ "overflow-y": "hidden" });
  });

  $(".useModalClose, .usePop").click(function () {
    $(".usePop").hide();
    $("html").css({ "overflow-y": "scroll" });
  });






});