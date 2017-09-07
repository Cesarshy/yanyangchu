$(function () {
    /*选择增加积分类型*/
    function chooseType() {
        $('.radio ').on('change', function () {
            console.log(1);
            if($('#type2').prop('checked')){
                console.log(1);
                $('#exchangeBox').show()
            }else{
                $('#exchangeBox').hide()
            }
        })
    }
    chooseType()
})