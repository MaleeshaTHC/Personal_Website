// Menu on scroll

let header = document.querySelector('.header');
window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
    btnMenu.classList.remove('fa-times');
    NavLinks.classList.remove('active')
}


let btnMenu = document.getElementById('btnMenu');
let NavLinks = document.querySelector('.nav-links');

btnMenu.onclick = function (){
    btnMenu.classList.toggle('fa-times');
    NavLinks.classList.toggle('active')
}

// Swiper

var swiper = new Swiper(".swip-test-imo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // add class active to link in menu by scroll

  let link = document.querySelectorAll('.nav-links a');
  let sec = document.querySelectorAll('section');

  function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 100 < sec [len].offsetTop){}
    link.forEach(ltx => ltx.classList.remove("active"));
    link[len].classList.add("active")
  }
  window.addEventListener("scroll",activeMenu)