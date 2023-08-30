$(function(){
    $(".open-basic-modal").click(function(){        
        $("#popup-basic").css('display','flex').hide().fadeIn();
        //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close-basic").click(function(){
        modalClose(); //모달 닫기 함수 호출
    });
    function modalClose(){
        $("#popup-basic").fadeOut(); //페이드아웃 효과
    }
});

$(function(){
    $(".open-advanced-modal").click(function(){        
        $("#popup-advanced").css('display','flex').hide().fadeIn();
        //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close-advanced").click(function(){
        modalClose(); //모달 닫기 함수 호출
    });
    function modalClose(){
        $("#popup-advanced").fadeOut(); //페이드아웃 효과
    }
});

$(function(){
    $(".open-JS-modal").click(function(){        
        $("#popup-JS").css('display','flex').hide().fadeIn();
        //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close-JS").click(function(){
        modalClose(); //모달 닫기 함수 호출
    });
    function modalClose(){
        $("#popup-JS").fadeOut(); //페이드아웃 효과
    }
});