$(function(){

  $(window).scroll(function(){
    if($(this).scrollTop()>105){
      $('#sp_fix_nav').fadeIn();
    }else{
      $('#sp_fix_nav').fadeOut(200);
    }
    });

  $('.show').click(function(){
    $('#modal').fadeIn();
    $("html,body").css("overflow", "hidden");
  });
  
  $('#close').click(function(){
    $('#modal').fadeOut();
    $('body,html').css('overflow', 'visible');
  });
  
  $('#modal').click(function(){
  // モーダルが出ている時に画面をクリックすると
    $('#close').click();
  // 閉じるボタンを押した時のイベントが起こる
  });







});

