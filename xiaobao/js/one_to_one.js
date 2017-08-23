$(function () {
    $('.one_to_one .c-m-c-main .main >.table-box >table td:nth-child(10) >a').on('click', function () {
        $('.c-m-c-main .main >.table-box >table td:nth-child(10) .operation-box').hide()
        $(this).parent().find('.operation-box').show()
    })
})