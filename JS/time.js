$(window).scroll(function(){

    var wScroll = $(window).scrollTop();
    console.log(wScroll)

    $('.parallax--bg').css('background-position', 
    'center '+(wScroll*0.4)+'px')


    $('.han').css('top', 24 + (wScroll*.005)*5.5+'em');


    // $(window).scrollTop();
    $('.han').css({
        'background-position-x' : - (wScroll*4.5) + 'px'
    })

})