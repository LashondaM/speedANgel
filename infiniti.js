$(window).scroll(function(){

    var wScroll = $(window).scrollTop();

    console.log(wScroll)
    $('.tres').css('top', -8 + (wScroll*.005)+'em')
    $('.dice').css('top', -3 + (wScroll*.005)+'em')
    // $('.dice').css('left', -3 + (wScroll*.005)+'em')
    
})
