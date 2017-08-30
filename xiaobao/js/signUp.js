$(function () {
    /*订单标签选择*/
    function chooseTag() {
        $('#addTag').on('click', function () {
            $('.signUp-shadow').show();
        })
        $('#cancel').on('click', function () {
            $('.signUp-shadow').hide();
        })
        $('#ensure').on('click', function () {
            var arr = [],
                tem ='';
            $(this).parent().parent().siblings('tr').find('input[type=checkbox]').each(
                function (i, v) {
                    if($(this).prop('checked')){
                        arr.push($(this).parent().text());
                    }
                }
            );
            $(arr).each(function (i, v) {
                tem += '<span class="label-box btn btn-default">'+v+ '<i class="iconfont icon-guanbi"></i></span>'
            });
            $('#tag').html(tem);
            $('.signUp-shadow').hide();
        })

        $('.table.pay').on('click', '.label-box i', function () {
            $(this).parent().remove();
            /*没有标签则显示文字*/
            if($('#tag').find('.label-box')){
                console.log(1);
                $('#tag').html('<span style="color: #959697">还未添加任何标签</span>')
            }
        })
    }
   chooseTag();

    /*订单标签设置*/
    function setTag() {
        /*打开盒子*/
        $('#openSet').on('click', function () {
            $('tagSettings-box-shadow').show()
        });
        /*初始化开关组件*/
        $(".my-checkbox_2").bootstrapSwitch({size: 'mini'});
        $('#close_4').on('click', function () {
            $('.tagSettings-box-shadow').hide()
        });
        $('#newTag').on('click', function () {
            var length = $(this).parent().siblings('table').find('td').length,
                a = length % 3,
                b ,
                c = $('#tagName').val(),
                d = /^[\s]*$/,
                table = $(this).parent().siblings('table'),
                nowId = table.find('tr:last-child td:last-child .my-checkbox_2').attr('value').replace(/tag_/,''),
                times = 0;
            console.log(nowId);
            if( d.test(c) ){
                return false;
            }else{
                times++;
                nowId += times;
                if(a === 0){
                    b = '<tr>\n' +
                        '                        <td>\n' +
                        '                            <input class="my-checkbox_2" type="checkbox" name="my-checkbox4" value="tag_'+nowId+'">\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+c+'>\n' +
                        '                        </td>\n' +
                        '                    </tr>';
                    table.html(table.find('tbody').html()+b);
                    table.find('tr:last-child td:last-child .my-checkbox_2').bootstrapSwitch({size: 'mini'});
                }else{
                    b = '<td>\n' +
                        '                            <input class="my-checkbox_2" type="checkbox" name="my-checkbox4"  value="tag_'+nowId+'">\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+c+'>\n' +
                        '                        </td>';
                    table.find('tr:last-child').html(table.find('tr:last-child').html() + b);
                    table.find('tr:last-child td:last-child .my-checkbox_2').bootstrapSwitch({size: 'mini'});
                }
            }
        })
        $('.my-checkbox_2').on('change', function () {
            console.log($(this).prop('checked'));
        })
        $('#ensure_4').on('click', function () {

        })
    }
    setTag()

    /*选择已有学员*/
    function chooseStu() {
        $('#choose').on('click', function () {
            $('#chooseStu').show();
        })
        $('#close').on('click', function () {
            $('#chooseStu').hide();
        })
    }


    /*选择一对一弹窗*/
    function show2hide(a, b, c) {
        $(a).on('click', function () {
            $(c).show()
        });
        $(b).on('click', function () {
            $(c).hide()
        })
    }
    show2hide('#openO2O' ,'#close_2', '.consultation_record-box-shadow-2')
    /*按钮点击事件*/
    $('.box-shadow .change-box form #tableList_1, #tableList_2').on('click', 'a', function () {
        $(this).addClass('orange').siblings('a').removeClass('orange');
    })
    /*收缩 拉伸*/
    function closure(a, b, c) {
        $(a).on('click', function () {
            $(c).hide()
            $(this).hide();
            $(b).show()
        })
        $(b).on('click', function () {
            $(c).show()
            $(this).hide();
            $(a).show()
        })
    }
    closure('#closure', '#opening', '#tableList_1');
    /*bootstrap-table*/
    var $table = $('#table');
    $table.bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: false, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        columns: [
            {
                field : 'checked',
                checkbox : true,
                formatter : function(value, row, index) {
                    if (row.state == true)
                        return {
                            disabled : true,//设置是否可用
                            checked : true//设置选中
                        };
                    return value;
                }
            },
            {
                title: '一对一名称',
                field: 'className',
                align: 'center'
            },
            {
                title: '学费标准',
                field: 'costs',
                align: 'center'
            },
            {
                title: '课程类别',
                field: 'classType',
                align: 'center'
            },
            {
                title: '开班数',
                field: 'num',
                align: 'center'
            }
        ]
    });

    /*选择班级弹窗*/
    show2hide('#classSignUp' ,'#close_3', '.consultation_record-box-shadow-3')
    /*收缩 拉伸*/
    closure('#closure_2', '#opening_2', '#tableList_2');
    var $table_2 = $('#table_2');
    $table_2.bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: false, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        columns: [
            {
                field : 'checked',
                checkbox : true,
                formatter : function(value, row, index) {
                    if (row.state == true)
                        return {
                            disabled : true,//设置是否可用
                            checked : true//设置选中
                        };
                    return value;
                }
            },
            {
                title: '班级名称',
                field: 'className',
                align: 'center'
            },
            {
                title: '学费标准',
                field: 'costs',
                align: 'center'
            },
            {
                title: '课程类别',
                field: 'classType',
                align: 'center'
            },
            {
                title: '人数',
                field: 'peoNum',
                align: 'center'
            },
            {
                title: '开班数',
                field: 'num',
                align: 'center'
            }
        ]
    });

    /*添加收款账户*/
    var times = 0;
    $('#addAco').on('click', function () {
        times++;
        var a;
        a = '<select class="form-control" name="paymentMethod_'+(1+times)+'">\n' +
            '                                 <option value="1">现金</option>\n' +
            '                                 <option value="2">支付宝</option>\n' +
            '                                 <option value="3">微信</option>\n' +
            '                            </select>\n' +
            '                            <input class="form-control price" name="price_'+(1+times)+'" type="text">元\n' +
            '                        &nbsp;  &nbsp;对方账号：<input class="form-control" name="otherAccount_'+(1+times)+'" type="text">\n' +
            '                        &nbsp;&nbsp;流水单号：<input class="form-control" name="waterNum_'+(1+times)+'" type="text">\n' +
            '                        &nbsp;&nbsp;';
        var box = document.createElement('div');
        $(box).css('padding-top', '5px').html(a).appendTo($(this).parent());
    })
})