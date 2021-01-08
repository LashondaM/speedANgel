$(window).scroll(function(){

    var wScroll = $(window).scrollTop();

    console.log(wScroll)
    $('.tres').css('top', -8 + (wScroll*.005)+'em')
    $('.dice').css('top', -8 + (wScroll*.005)+'em')

    $('.apple').css('bottom', -3 + (wScroll*.005)+'em')
    $('.pear').css('top', -1 + (wScroll*.005)+'em')
    // $('.dice').css('left', -3 + (wScroll*.005)+'em')

    var scroll_position = $(window).scrollTop()*0.75;
    $('.cheese').css({
        'background-position-x' : - scroll_position + 'px'
    })

    // var scroll_position = $(window).scrollTop()*0.75;
    // $('.trees').css({
    //     'background-position-x' : - scroll_position + 'px'
    // })
})


