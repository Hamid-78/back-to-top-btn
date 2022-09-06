$(function(){
   let navbar = $('.navbar')
   let backToTopBtn = $('.backToTopBtn')

  $(window).scroll(function(){
   let scrTop = $(window).scrollTop()
    
   if(scrTop > 500){
    navbar.addClass('navBarFixed')
   }else{
    navbar.removeClass('navBarFixed')
   }

  if (scrTop > 1000) {
    backToTopBtn.fadeIn()
  } else {
    backToTopBtn.fadeOut()
  }
})
  

  backToTopBtn.click (function(){

  $('html,body').animate({
    scrollTop: 0,
  },
  2400
  )


  })

})