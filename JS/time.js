$(window).scroll(function(){

    var wScroll = $(window).scrollTop();
    console.log(wScroll)

    $('.parallax--bg').css('background-position', 
    'center '+(wScroll*0.75)+'px')


    $('.han').css('top', 25 + (wScroll*.005)*10+'em');


    // $(window).scrollTop();
    $('.han').css({
        'background-position-x' : - (wScroll*4.5) + 'px'
    })

})