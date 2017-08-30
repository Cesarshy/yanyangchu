$(function () {
    var flag = true;
    /*滚动条样式*/
    $(".sidebar-menu").niceScroll({styler:"fb",cursorcolor:"#4A8BC2", cursorwidth: '5', cursorborderradius: '0px', background: '#404040', cursorborder: ''});
    /*滚动条样式*/
    /*侧边栏特效*/

    $('.sidebar-menu li a').on('click', function () {
        $('.sidebar-menu li a').removeClass('current');
        $(this).addClass('current');
    });
    /*侧边栏特效*/
    /*左侧栏开关*/
    function open() {
        $('.sidebar').animate({
            width: '230px'
        }, 1000);
        $('body >.main-box').animate({
            paddingLeft: '230px'
        }, 1000);
        $('body >header').animate({
            paddingLeft: "230px"
        }, 1000)
    }
    function close() {
        $('.sidebar').animate({
            width: '0'
        }, 1000);
        $('body >.main-box').animate({
            paddingLeft: '0'
        }, 1000);
        $('body >header').animate({
            padding:0
        }, 1000)
    }
    $('#switch').on('click', function () {
        console.log(flag);
        if(flag){
            console.log(1);
            close()
        }else{
            console.log(2);
            open()
        }
        flag = !flag;
    })
    /*按钮组点击事件*/
    $('body').on('click','.list-box .list >ul .btn-default', function () {
        if($(this).attr('open-mul') === 'true'){
            $(this).toggleClass('orange');
        }else{
           /* $('.list-box .list >ul .btn-default').removeClass('orange');*/
            $(this).parent().siblings('li').find('a').removeClass('orange');
            $(this).addClass('orange')
        }
    })
});