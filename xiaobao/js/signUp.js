$(function () {
    $('#addTag').on('click', function () {
        $('.signUp-shadow').show();
    })
    $('#cancel').on('click', function () {
        $('.signUp-shadow').hide();
    })
    $('#choose').on('click', function () {
        $('.box-shadow').show();
    })
    $('#close').on('click', function () {
        $('.box-shadow').hide();
    })
})