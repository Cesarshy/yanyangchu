/*选择已有学员*/
function chooseStu() {
    $('#choose').on('click', function () {
        $('#chooseStu').show();
    })
    $('#close').on('click', function () {
        $('#chooseStu').hide();
    })
}
chooseStu()