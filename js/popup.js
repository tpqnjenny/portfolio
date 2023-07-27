$(function(){
  if($.cookie("pop") != "no") $("#popup").show();
  // .cookie("pop") : map name = "pop"
  $("#popup").css("cursor", "move").draggable();
  // .draggable() : 드래그 가능 (js-1.10.4 플러그인과 같이 써야함)
  $(".close span").on("click", function(){
    if($('.close input').is(':checked')){
      $.cookie("pop", "no", {expires:1});
      // 클릭한 경우 쿠키의 value 값을 no로 설정
      // {expires:1} : 1일동안 열리지 않음
      $("#popup").fadeOut("fast");
    } else{
      $("#popup").fadeOut("fast");
    }
  });
});