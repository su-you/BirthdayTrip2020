$(function () {

  //ハンバーガーメニュー
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".hamburger").addClass("active");
    } else {
      $(".hamburger").removeClass("active");
    }
  });
  // $(".hamburger__list").click(function () {
  //   $(".hamburger,.hamburger-btn").removeClass("active");
  // });


  // ハンバーガーアコーディオン
  $('.hamburger__ac--parent').on('click', function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac-parentのopenクラスを取る
    // $('.ac-parent').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    // $('.ac-parent').not($(this)).next('.ac-child').slideUp();
  });


  /*②こちらがリンク先からリンク先へスムーズに移動するためのコードです*/
  /*試しにハンバーガーメニューの中のボタンを押してみてください*/
  /*僕はこのコードの意味は分かってません*/
  /*このようなコードをプログラミングでは「おまじない」と言います*/
  /*理解しなくてもいいのでそのままコピペしてください*/
  /*プログラミングではこの「おまじない」が度々出てきますが全無視で大丈夫です*/
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });




  // faqアコーディオン
  $('.faq__aco-contents').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('rotate');
  });
  $('.faq__aco-contents--question').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('rotate2');
  });


  // slider
  $('#slick-slider').slick({
    autoplay: true, //自動再生
    arrows: false, //矢印の表示
    dots: true, //ドットの表示
  });

});