/*list-box添加多选按钮*/


function addMul() {
    var a = '<a href="javascript:;" class="btn btn-default open_mul">多选</a>\n' +
        '                    <div class="button-box" style="display: none">\n' +
        '                        <a href="javascript:;" class="btn btn-default mul_confirm">确认</a>\n' +
        '                        <a href="javascript:" class="btn btn-default mul_cancel">取消</a>\n' +
        '                    </div>';
    $('div.list-box >.list').each(function ( i, v) {
        if(!$(this).hasClass('no-mul')){
            $(this).html($(this).html()+a)
            var that = $(this);
            $(this).on('click', '.open_mul', function () {
                var arr = [];
                $(this).hide().siblings('ul').find('li').each(
                    function ( i, v) {

                    }
                )
                that.find('.button-box').show()
            })
            that.on('click', '.mul_confirm', function () {
                $(this).parent().hide().siblings('.open_mul').show()
            })
            that.on('click', '.mul_cancel', function () {
                $(this).parent().hide().siblings('.open_mul').show()
            })
        }
    })
}
addMul()