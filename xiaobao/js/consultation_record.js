$(function () {
    /*跟进状态选择*/
    $('.table-box ').on('click', '.state >a', function () {
        $('.choose-box').hide()
        console.log(1);
        $(this).parent().find('.choose-box').show()
    })
    $('.table-box').on('click', '.choose-box a',function () {
        $(this).parent().html();
        $(this).parent().parent().parent().children('a').remove();
        $(this).parent().parent().before($(this).parent().html())
        $(this).parent().parent().hide()
    })
   /* 操作选择*/
    $('#consult-table tr').on('click',  ' td:nth-child(15) >a',function () {
        $('#consult-table tr td:nth-child(15) >.operation-box').hide();
        $(this).parent().find('.operation-box').show();
    })

    $('#consult-table').on('click', ' tr td:nth-child(8) >a',function () {
        $('.consultation_record-box-shadow').show()
    })
    $('.consultation_record-box-shadow .cancel').on('click', function () {
        $('.consultation_record-box-shadow').hide()
    })
    /*日历插件*/
    $('.form_date').datetimepicker({
        language:'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
})