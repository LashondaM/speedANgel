$(window).scroll(function(){

    var wScroll = $(window).scrollTop();
    console.log(wScroll)

    $('.parallax--bg').css('background-position', 
    'center '+(wScroll*0.75)+'px')

})