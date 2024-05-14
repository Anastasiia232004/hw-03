$(function () {
    function closeNavBurger() {
        $("#nav_toggle").removeClass("active");
        $("#nav_burger").removeClass("active");
    }

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav_burger").toggleClass("active");
    });

    $(".nav-main_link").on("click", function () {
        closeNavBurger();
    });

    $(window).on("resize", function () {
        if ($("#nav_burger").hasClass("active")) {
            closeNavBurger();
        }
    });
});