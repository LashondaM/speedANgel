$(window).scroll(function(){

    var wScroll = $(window).scrollTop();
    console.log(wScroll)

    $('.parallax--bg').css('background-position', 
    'center '+(wScroll*0.15)+'px')


    $('.han').css('top', + (wScroll*.005)*5.2+'em');

    $('.han').css('right', + (wScroll*.005)*380+'em');



    // $('.run').css({
    //     'background-position-x' : - (wScroll*4.5) + 'px'
    // })

})

// document.addEventListener('DOMcontentLoaded', init);

//     function init(){
//         let query = window.matchMedia("(max-width: 770px)");
//         if(query.matches){
//             document.querySelector('.han').style.right = "0";
//         }else{

//         }
//     }

// const media = matchMedia('(max-width: 481px)');
// media.addEventListener('change', ({media, matches}) => $('han').css('right', + 0));