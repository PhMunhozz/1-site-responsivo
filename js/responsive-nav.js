var lastScroll = 0;

window.onscroll = function () {

  var y = document.getElementById("myCabeca");
  var z = document.getElementById("myTopnav");

  if(document.documentElement.scrollTop > lastScroll){
    if(y.className === "cabeca") {
      y.className += " acima";
      z.className += " acima";
      lastScroll = document.documentElement.scrollTop;
    } else {
      lastScroll = document.documentElement.scrollTop
    }
  } else {
    y.className = "cabeca";
    z.className = "topnav";
    lastScroll = document.documentElement.scrollTop;
  }
  
    // if(document.documentElement.scrollTop > lastScroll){
    //   document.getElementsByClassName('cabeca')[0].style.display='none';
    //   document.getElementById('myTopnav').style.top='0';
    //   lastScroll = document.documentElement.scrollTop;
    // }
    
    // else {
    //   document.getElementsByClassName('cabeca')[0].style.display='block';
    //   document.getElementById('myTopnav').style.top='30px';
    //   lastScroll = document.documentElement.scrollTop;
    // }
  }


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function abrirNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }