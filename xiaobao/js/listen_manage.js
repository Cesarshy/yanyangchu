$(function () {
    /*打开修改试听状态盒子*/
    $('#consult-table').on('click', 'tr td:nth-child(12) a', function () {
        console.log(1);
        $('.listen_manage-box-shadow').show()
    })
    /*点击取消关闭修改盒子*/
    $('#close').on('click', function () {
        $('.listen_manage-box-shadow').hide()
    })
})