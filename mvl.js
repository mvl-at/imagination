var maxOffset = 300;
$(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
        $('.navbar').addClass('navbar-portable');
    }
    else {
        $('.navbar').removeClass('navbar-portable');
    }
});
