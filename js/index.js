//$(document).ready(function(){}) > some animations not working with it 


window.onload=function(){}
  window.addEventListener('load', function() {
    var navI = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navI.length; i++) {
      navI[i].classList.add('animate');
    }
  });
  window.addEventListener('mouseover',function(){
    var nav = document.querySelectorAll('.nav-link');
    for (var i = 0; i < nav.length; i++) {
        nav[i].classList.add('hov');
      }
  })
  window.addEventListener('load', function() {
    var navIp = document.querySelectorAll('.rounded-5');
    for (var i = 0; i < navIp.length; i++) {
      navIp[i].classList.add('app-animate');
    }
    
  });
  window.addEventListener('load', function() {
    var navIp = document.querySelectorAll('.rounded-5');
    for (var i = 0; i < navIp.length; i++) {
      navIp[i].classList.add('app-animate');
    }
    
  });
  let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();
   
    if (wScroll > aboutOffset)
    {
 
   $("article").addClass("animS");
   

    }
  

})
//another one 
let aboutOffset2 = $("#thirdd").offset().top;

$(window).scroll(function () {

    let wScrolll = $(window).scrollTop();
   
    if (wScrolll > aboutOffset2)
    {
 
   $(".ds").addClass("wzani");
 
   

    }
  
    
})

let aboutOffset4 = $("#fourth").offset().top;

$(window).scroll(function () {

    let wScrolllll = $(window).scrollTop();
   
    if (wScrolllll > aboutOffset4)
    {
 
   $(".ds1").addClass("wzani1");
 
   

    }
  
   
})
let aboutOffset5 = $("#five").offset().top;

$(window).scroll(function () {

    let wScrollllll = $(window).scrollTop();
   
    if (wScrollllll > aboutOffset5)
    {
 
   $(".ds2").addClass("wzani2");
 
   

    }
  
   
})

let aboutOffset6 = $("#six").offset().top;

$(window).scroll(function () {

    let wScrolllllll = $(window).scrollTop();
   
    if (wScrolllllll > aboutOffset6)
    {
 
   $(".ds3").addClass("wzani3");
 
   

    }
  
   
})








  
  

  