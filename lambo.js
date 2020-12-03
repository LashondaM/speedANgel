$(window).scroll(function(){
    parallax();
})

function parallax(){

    var wScroll = $(window).scrollTop();
    // console.log(wScroll)
    $('.parallax--bg').css('background-position', 
    'center '+(wScroll*0.75)+'px') 
}


$(window).scroll(function(){
    var scroll_position = $(window).scrollTop()/1;
    $('.container-fluid').css({
        'background-position-x' : - scroll_position + 'px'
    })
})