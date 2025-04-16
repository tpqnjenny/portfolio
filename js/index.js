// MENU scroll event
let prevScrollpos = window.pageYOffset;
let navi = document.getElementById("navi")
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    navi.style.display = 'none';
    navi.style.transition = "opacity .3s"
  } else {
    navi.style.display = 'flex';
    navi.style.transition = "opacity .3s"
  }
  prevScrollpos = currentScrollPos;

  if(prevScrollpos == 0){
    navi.style.position = 'static';
    navi.style.transform = 'translateX(0)';
  } else{
    navi.style.position = 'fixed';
    navi.style.transform = 'translateX(-50%)';
  }
}

// intro typing event
$(function(){
  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  
  // 타이핑될 텍스트를 가져옴
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작
  }
  
  function typing() {
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
  
        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료
  
        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing, 100);
        }, 800);
      } else if (liIndex == liLength - 1) {
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt);
      }
    }
  }  
});

// Project > cont 클릭 시 flip 효과
var conts = document.querySelectorAll(".cont");
let stickers = document.querySelectorAll(".sticker");

[...conts].forEach((cont) => {
  cont.addEventListener("click", function () {
    cont.classList.toggle("is-flipped");
    [...stickers].forEach((sticker) => {
      sticker.classList.toggle("is-flipped");
    });
  });
});

// Skills rotate 효과
let toggle = document.querySelector(".toggle");
let skills = document.querySelector(".skills");
toggle.onclick = function (e) {
  e.preventDefault();
  skills.classList.toggle("active");
};

// MENU > HOME 버튼 클릭 시 페이지 최상단으로 이동
$(".home").click(function () {
  $("html,body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// top 메뉴
let gotop = document.getElementById("go-top");
let scrollAmt;

window.addEventListener("scroll", ()=>{
  scrollAmt = window.pageYOffset;

  if(scrollAmt > 1000){
    // top.classList.add("active");
    gotop.className = "on";
    // 기존에 className이 있어도 모두 초기화하고 해당 값만 지정
  } else{
    gotop.classList.remove("on");
  }
});

gotop.addEventListener("click", (e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});