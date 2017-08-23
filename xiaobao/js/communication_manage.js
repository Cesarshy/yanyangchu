$(function () {
    $('.communication_manage-main table').on('click', 'tr td:nth-child(11) >a',function () {
        $('.communication_manage-main table tr td:nth-child(11) .operation-box').hide()
        $(this).parent().find('.operation-box').show();
    })
})