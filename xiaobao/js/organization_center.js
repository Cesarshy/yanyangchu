$(function () {
    $('#changeLogo').on('click', function () {
        $('.box-shadow').show()
    })
    $('#changeLogoOff').on('click', function () {
        $('.box-shadow').hide()
    })
    $('#inputFile').on('change', function (e) {
        var fileName = docObj.value;
        if (!fileName.match(/.jpg|.gif|.png|.bmp/i)) {
            alert('您上传的图片格式不正确，请重新选择！');
            return false;
        }
        var url=window.URL.createObjectURL(this.files.item(0));
        $('.showBox>img').attr('src', url)
        /*var agent = navigator.userAgent;
        if (agent.indexOf("MSIE")>=1) {
            console.log(1);
            url = this.value;
        } else if(agent.indexOf("Firefox")>0) {
            console.log(2);
            url = window.URL.createObjectURL(this.files.item(0));
        } else if(agent.indexOf("Chrome")>0) {
            console.log(3);
            url = window.URL.createObjectURL(this.files.item(0));
        }*/
    })
})