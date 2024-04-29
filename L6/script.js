const swiper = new Swiper(".swiper",{
   
    allowTouchMove:true,
    width:300,
    spaceBetween:20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoHeight:true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      enabled:true,
     
      lazyPreloadPrevNext:2
     
    
})
