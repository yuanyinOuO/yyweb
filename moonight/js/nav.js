$(function () {
    $("#date-btn").click(function () {
        $(".rightaside-date").toggleClass("active");
        $("#date-btn .bx-chevron-left").toggleClass("rotate");
    });
});


$(function () {
    $("#menu-btn").click(function () {
        $(".rightaside-menu").toggleClass("active");
        $(".rightaside-menu .bx-chevron-left").toggleClass("rotate");
    });
});

$(function () {
    $("#aboutlink-btn").click(function () {
        $(".rightaside-aboutlink").toggleClass("active");
        $(".rightaside-aboutlink .bx-chevron-left").toggleClass("rotate");
    });
});
