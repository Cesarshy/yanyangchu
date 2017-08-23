$(function () {
    $('#cancel').on('click', function () {
        $('.box-shadow').hide()
    })
    $('.c-m-con .main >table').on('click', '.del', function () {
        $('.box-shadow').show()
    })
})