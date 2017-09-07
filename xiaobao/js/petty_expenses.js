$(function () {
    /*箭头变换*/
    function arrowTog(element) {
        element.each(function () {
            if($(this).css('display') === 'none'){
                $(this).css('display', 'inline-block');
            }else {
                $(this).css('display', 'none')
            }
        });
        return element;
    }
    /*点击li内容进入右边盒子*/

    function enterRight(element) {
        var flag = true;
        $('.t-c-f-m-right ul li').each(function () {
            if($(this).html() === element.html()){
                flag =! flag;
            }
        });
        if(flag){
            $('.t-c-f-m-right ul').append(element.clone());
            return element;
        }else {
          return flag;
        }
    }
    
    /*更新已选数量*/
    function refreshNum() {
        $('.t-c-f-m-right .search span').html($('.t-c-f-m-right li').length)
    }
    /*点击类型名称*/
    $('.ul-title').on('click', function () {
        arrowTog($(this).find('i')).parent().siblings('ul').toggle()
    })

    /*点击li事件*/
    $('.t-c-f-m-left ul').on('click', 'li', function () {
        enterRight($(this));
        refreshNum()
    })
    $('.t-c-f-m-right ul').on('click', 'li', function () {
        $(this).remove();
        refreshNum()
    })

    /*取消*/
    $('#close_textbook').on('click', function () {
        $('.textbook-choose').hide()
    })

    /*选择教材*/
    $('#chooseTextbook').on('click', function () {
        $('.textbook-choose').show()
    })

    /*确定*/
    $('#ensure_textbook').on('click', function () {

    })
})