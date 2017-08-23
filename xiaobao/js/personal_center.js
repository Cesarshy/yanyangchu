$(function () {
    var that = $('.box-shadow');
    $('#cancel').on('click', function () {
        that.hide()
    })
    $('#changePwd').on('click', function () {
        that.show()
    })
})