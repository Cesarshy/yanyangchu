$(function () {
    /*滚动条样式*/
    $(".sidebar-menu").niceScroll({styler:"fb",cursorcolor:"#4A8BC2", cursorwidth: '5', cursorborderradius: '0px', background: '#404040', cursorborder: ''});
    /*滚动条样式*/
    /*侧边栏特效*/

    $('.sidebar-menu >li >a').on('click', function () {
        var ul = $(this).siblings('ul');
        $('.sidebar-menu li a .arrow').removeClass('open');
        $('.sidebar-menu li a').removeClass('current');
        $(this).find('.arrow').addClass('open');
        $(this).addClass('current');
        $('.sidebar-menu li >ul').slideUp()
        if(ul.css('display') === 'none'){
            ul.slideDown()
        }
    });
    $('.sidebar-menu >li >ul a').on('click', function () {
        $('.sidebar-menu >li >ul a').removeClass('current')
        $(this).addClass('current')
    })
    /*侧边栏特效*/


});