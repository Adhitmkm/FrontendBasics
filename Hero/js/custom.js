const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // mobile menu
let mobileMeuIcon = document.querySelector('header .fa-bars')
// console.log(mobileMeuIcon)
let  menu = document.querySelector('header .menu')

// mobileMeuIcon.addEventListener('click', function(){
// //   menu.classList.add("open");


// })

// add remove randum togglil kittum appo rand function venda mukalili ulla function togle aaki eyutham thayey

mobileMeuIcon.addEventListener("click",function(){
  menu.classList.toggle("open")
})
