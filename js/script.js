$(function(){
    $('.link_menu').click(function(){
        $(this).next().toggleClass("active");
    });

    $('.link_menu').mouseenter(function () { 
        $('.active').toggleClass("active");
        $(this).next().toggleClass("active");
    });
});