$(function () {
    $("#miku").hover(function () {
        $("#text").text("kawaii no miku");
    },function () {
        $("#text").text("hi");
    });
});

$(function () {
    $("#menu-btn").hover(function () {
        $("#text").text("這是選單");
    },function () {
        $("#text").text("hi");
    });
});

$(function () {
    $("#date-btn").hover(function () {
        $("#text").text("這是行事曆");
    },function () {
        $("#text").text("hi");
    });
});

$(function () {
    $("#aboutlink-btn").hover(function () {
        $("#text").text("這是關於我的連結");
    },function () {
        $("#text").text("hi");
    });
});