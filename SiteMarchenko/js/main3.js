var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
,fadeUntil=$( window ).height()/2 // 200px scroll or more will equiv to 0 opacity
,fading = $('.header');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
});

$("#import").load("gallery/index.html");