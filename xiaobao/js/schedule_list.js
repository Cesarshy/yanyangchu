$(function () {
    $('.one_to_one .c-m-c-main .main >.table-box td:nth-child(8) >a').on('click', function () {
        console.log(1);
        $('.c-m-c-main .main >table  td:nth-child(8) .operation-box').hide()
        $(this).parent().find('.operation-box').show()
    })
})