$(function () {
    $('.communication_manage-main table').on('click', 'tr td:nth-child(11) >a',function () {
        $('.communication_manage-main table tr td:nth-child(11) .operation-box').hide()
        $(this).parent().find('.operation-box').show();
    }).on('click', 'tr td:nth-child(11) .operation-box li:nth-child(1) a', function () {
        $('.communication_manage-box-shadow').show()
    }).on('mouseleave',  'tr td:nth-child(11)', function () {
        console.log(1);
        $(this).find('.operation-box').hide()
    })
    $('#close').on('click', function () {
        $('.communication_manage-box-shadow').hide()
    })
})