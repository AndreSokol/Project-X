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

$( "#port" ).click(function() {
  $( "#port_gal" ).animate({
    height:"toggle"
  }, 500, function() {});
});
$( "#na" ).click(function() {
  $( "#na_gal" ).animate({
    height:"toggle"
  }, 500, function() {});
});
$( "#pe" ).click(function() {
  $( "#pe_gal" ).animate({
    height:"toggle"
  }, 500, function() {});
});
$( "#st" ).click(function() {
  $( "#st_gal" ).animate({
    height:"toggle"
  }, 500, function() {});
});



  $( "#port_gal" ).animate({
    height:"toggle"
  }, 5, function() {});
  $( "#na_gal" ).animate({
    height:"toggle"
  }, 5, function() {});
  $( "#pe_gal" ).animate({
    height:"toggle"
  }, 5, function() {});
  $( "#st_gal" ).animate({
    height:"toggle"
  }, 5, function() {});


$('img').click(function () {

        var o=$(this).parent();

        var url=o.find('img').attr('src');

        var html='<a href="#" class="clone"><img src="'+url+'" /></a>'

        o.append(html);

        o=o.find('.clone');

        o.animate({width:'200%',height:'200%'});

        o.click(function () {

            $(this).remove();

        });

    });

