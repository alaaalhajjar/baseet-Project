const menu_toggle = document.querySelector('.navbar-toggler');
const menu_close = document.querySelector('.close-sidebar');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
menu_toggle.classList.toggle('is-active');
sidebar.classList.toggle('is-active');
    sidebar.style.display="block";
    // sidebar.style.display= 'absolute';
   
    // sidebar.style.top="0px";
});
menu_close.addEventListener('click', () => {
sidebar.style.display="none";
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $("#btn").addClass('show');
  } else {
    $("#btn").removeClass('show');
  }
});

$("#moveBtn").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function() {
    window.onscroll = function () {
        let height = $(window).scrollTop()
        let bacTopBtn = $("#moveBtn")
        let movebtnBG =$("#moveBtnbg")
        if(height > 4200){
            $(movebtnBG).css({background: "#fff"})
            $(bacTopBtn).css({fill: "#9A314F"})
            $(bacTopBtn).css({stroke: "#none"})

        }else{
            $(bacTopBtn).css({stroke: "#fff"})
            $(movebtnBG).css({background: "#9A314F"})
        }
    }
});

  
let ele =document.querySelectorall(".price-model-section .price-cards .single-card");
ele.addEventListener((e) =>{
 
})