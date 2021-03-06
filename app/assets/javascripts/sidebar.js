$(document).ready(function () {
    footerScroll();
    bodySidebarHeight();
    $( window ).scroll(function() {
        footerScroll();
    });
});

function bodySidebarHeight(){
    h1 = $('.main-content').innerHeight();
    h3 = $(body).height();
    h4 = $('.main-content div').innerHeight();
    console.log('h1: '+h1);
    console.log('h3: '+h3);
    console.log('h4: '+h4);
    if(h1>h4){
        $('.main-content').css({position: 'relative', height: '100%'});
    }
    else{
        $('.main-content').css({position: 'relative', height: 'auto'});
    }
}

function footerScroll(){
    h1 = $('#footer').offset().top - $(body).height();
    if($(window).scrollTop() > h1 )
    {
        // Footer visible
        $('nav.sidebar').css({
            position: 'absolute',
            top: h1
        });
        $('#sidebar-profile').css({
            position: 'absolute',
            top: h1,
            width:256
        });
    }
    else  if($(window).scrollTop() <= 50)
    {
        //navbar visible
        $('nav.sidebar').css({
            position: 'absolute',
            top: 50
        });
        $('#sidebar-profile').css({
            float: 'left',
            position: 'relative',
            top: 0,
            width: 256
        });
    }
else
    {
        // footer et navbar invisibles
        $('nav.sidebar').css({
            position: 'fixed',
            top: 0
        });
        $('#sidebar-profile').css({
            position: 'fixed',
            top: 0,
            width: 256
        });
    }
}