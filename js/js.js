// TOP BUTTON FADE IN
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});



// MOBILE NAV OPEN CLOSE
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}