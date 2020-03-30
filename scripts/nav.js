
const sidebarWidth = 300;

var menuActive = false;


function openSidebarMenu() {
    $("#menu-toggle").addClass("close");
    $("#menu-sidebar").addClass("open");
    $("#menu-overlay").fadeIn();
    // $("#menu-sidebar").animate({"left":"0px"}, "slow");
    menuActive = true;
    $('#scroll-to-top').fadeOut();
    $('body').addClass("disable-scrolling");
    return true;
}

function closeSidebarMenu() {
    $("#menu-toggle").removeClass("close");
    $("#menu-overlay").fadeOut();
    $("#menu-sidebar").removeClass("open");
    menuActive = false;
    if($(window).scrollTop() > $(window).height()) {
        $('#scroll-to-top').fadeIn();
    }
    $('body').removeClass("disable-scrolling");
    return true;
}

$(document).ready(function() {

    $(window).scroll(function(){
        if($(this).scrollTop() > $(window).height() && !menuActive) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    })  

    $('#scroll-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 700);
        return false;
    })



    $("#menu-toggle").click(function () {
        if (menuActive) {
            closeSidebarMenu();
        } else {
            openSidebarMenu();
        }
    })

    $("#menu-overlay").click( function() {
        closeSidebarMenu();
    })

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    })

});


$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    if(menuActive) {
        closeSidebarMenu();
    }
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 800, 'linear');
});