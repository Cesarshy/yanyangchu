$(function () {
    $('.office_center-main .c-m-c-main table tr td:nth-child(12) >a').on('click', function () {
        $('.operation-box').hide();
        $(this).parent().find('.operation-box').show()
    })
})