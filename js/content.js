// $(".column img,.column span, .column p").hover(function() {
//     $(".column p").css("display","block");
//     $(".column span").css("display", "block")
//     }, function() {
//         $(".column p").css("display","none");
//         $(".column span").css("display","none");
    
// });
var a = document.getElementsByClassName("hide");

function mostrarHide () {
    if(a.className === "hide"){
        a.className += " ativo";
        $('.hide').slideToggle(1000);
        $('#button').attr('value','Ver mais');
    } else {
        a.className = "hide";
        $('.hide').slideToggle(1000);
        $('#button').attr('value','Ver menos');
    }
}

var b = document.getElementsByClassName("att");

function mostrarAtt () {
    if(b.className === "att"){
        b.className += " ativo";
        $('.att').slideToggle(1000);
        $('.icon').attr('src', 'images/icons/expand-more.png');
    }
    else {
        b.className = "att";
        $('.att').slideToggle(1000);
        $('.icon').attr('src', 'images/icons/expand-less.png');
    }
}


$( function(e){
    $('#button').click(mostrarHide);
    $('.icon').click(mostrarAtt);
});