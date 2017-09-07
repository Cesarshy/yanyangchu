$(function () {

    var tagList = [],
        a = 0,
        /*存储选定学员信息*/
        stu;
    /*当前便签设置里开启的标签就行选择显示*/
    function tagListTem() {
        $('#currentTagList').html('');
        $(tagList).each(function (i, v) {
            var a = '<label class="checkbox-inline">\n' +
                '                            <input type="checkbox" name="tag" id="tag'+i+'" value="option'+i+'"> '+v+'\n' +
                '                        </label>'
            $('#currentTagList').html($('#currentTagList').html() + a)
        });
    }

    /*订单标签选择*/
    function chooseTag() {

        $('#addTag').on('click', function () {
            $('.signUp-shadow').show();
        })
        $('#cancel').on('click', function () {
            console.log(1);
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

        /*删除当前所显示的标签*/
        $('.table.pay').on('click', '.label-box i', function () {
            $(this).parent().remove();
            /*没有标签则显示文字*/
            if($('#tag').find('.label-box')){
                $('#tag').html('<span style="color: #959697">还未添加任何标签</span>')
            }
        })
    }


    /*订单标签设置*/
    var list = [
        {
            name: '教材',
            state: true
        },
        {
            name: '优惠',
            state: true
        },
        {
            name: '赠送',
            state: false
        }
    ];
    function setTag() {
        /*打开盒子*/
        $('#openSet').on('click', function () {
            $('.tagSettings-box-shadow').show()
        });
        /*初始化开关组件*/
        $(list).each(function (i, v) {
            var table = $('.tagSettings-box-shadow table')
            if(i%3 === 0){
                if(v.state){
                    b = '                        <td>\n' +
                        '                            <input class="my-checkbox_2" type="checkbox" id="switch'+i+1+'" name="my-checkbox4" value="tag_'+i+1+'" checked>\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+v.name+'>\n' +
                        '                        </td>\n';
                }else{
                    b = '                        <td>\n' +
                        '                            <input class="my-checkbox_2" type="checkbox" id="switch'+i+1+'" name="my-checkbox4" value="tag_'+i+1+'">\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+v.name+'>\n' +
                        '                        </td>\n';
                }

                var tr = document.createElement('tr');
                $(tr).html(b);
                table.find('tbody').append(tr);
                table.find('#switch'+i+1).bootstrapSwitch({
                    size: 'mini',
                    onSwitchChange:function(event,state){
                        if(state==true){
                            $(this).prop('checked',true);
                        }else{
                            $(this).prop('checked',false);
                        }
                    }
                });
            }else{
                if(v.state){
                    b = '                            <input class="my-checkbox_2"  type="checkbox" id="switch\'+i+1+\'" name="my-checkbox4"  value="tag_'+i+1+'"  checked>\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+v.name+'>\n';
                }else{
                    b = '                            <input class="my-checkbox_2"  type="checkbox" id="switch\'+i+1+\'" name="my-checkbox4"  value="tag_'+i+1+'">\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+v.name+'>\n';
                }

                var td =document.createElement('td');
                $(td).html(b);
                table.find('tr:last-child').append(td);
                table.find('#switch'+i+1).bootstrapSwitch({
                    size: 'mini',
                    onSwitchChange:function(event,state){
                        if(state==true){
                            $(this).prop('checked',true);
                        }else{
                            /* $(this).val("2");*/
                            $(this).prop('checked',false);
                        }
                    }
                });
            }
        })
        $(".my-checkbox_2").bootstrapSwitch({
            size: 'mini',
            onSwitchChange:function(event,state){
                if(state==true){
                    $(this).prop('checked',true);
                }else{
                   /* $(this).val("2");*/
                    $(this).prop('checked',false);
                }
            }
        });

        $('.tagSettings-box-shadow form table td input[type=checkbox]').each(function (i, v) {
            if($(this).prop('checked') === true){
                tagList.push($(this).parent().parent().siblings('input').val());
            }
        });

        /*数量信息显示*/
        $('#sum').html(list.length);
        $('#openSum').html(tagList.length);

        $('#close_4').on('click', function () {
            $('.tagSettings-box-shadow').hide()
        });

        /*新增标签类型*/
        $('#newTag').on('click', function () {
            var length = $(this).parent().siblings('table').find('td').length,
                a = length % 3,
                b ,
                c = $('#tagName').val(),
                d = /^[\s]*$/,
                table = $(this).parent().siblings('table'),
                nowId = parseInt(table.find('tr:last-child td:last-child .my-checkbox_2').attr('value').replace(/tag_/,'')),
                times = 0;
            if( d.test(c) ){
                return false;
            }else{
                times++;
                nowId += times;
                if(a === 0){
                    b = '                        <td>\n' +
                        '                            <input class="my-checkbox_2" id="switch'+nowId+'" type="checkbox" name="my-checkbox4" value="tag_'+nowId+'">\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+c+'>\n' +
                        '                        </td>\n';
                    var tr = document.createElement('tr');
                    $(tr).html(b);
                    table.find('tbody').append(tr);
                    table.find('#switch'+nowId).bootstrapSwitch({
                        size: 'mini',
                        onSwitchChange:function(event,state){
                            if(state==true){
                                $(this).prop('checked',true);
                            }else{
                                $(this).prop('checked',false);
                            }
                        }
                    });
                }else{
                    b = '                            <input class="my-checkbox_2" id="switch'+nowId+'"  type="checkbox" name="my-checkbox4"  value="tag_'+nowId+'">\n' +
                        '                            <input type="text" class="form-control" maxlength="8" value='+c+'>\n';
                    var td =document.createElement('td');
                    $(td).html(b);
                    table.find('tr:last-child').append(td);
                    table.find('#switch'+nowId).bootstrapSwitch({
                        size: 'mini',
                        onSwitchChange:function(event,state){
                            if(state==true){
                                $(this).prop('checked',true);
                            }else{
                                /* $(this).val("2");*/
                                $(this).prop('checked',false);
                            }
                        }
                    });
                }
            }

            /*更新总标签数量*/
            list= [];
            table.find('input[type=text]').each(
                function (i, v) {
                    list.push($(this).val())
                }
            )
            $('#sum').html(list.length);
        })

        /*保存标签设置*/
        $('#ensure_4').on('click', function () {
            tagList = [];
           $(this).parent().siblings('form').find('table input[type=checkbox]').each(function (i, v) {
               if($(this).prop('checked') === true){
                   tagList.push($(this).parent().parent().siblings('input').val());
               }
           });

           /*更新选中标签数量*/
            tagListTem();
            $('#openSum').html(tagList.length);
            $('.tagSettings-box-shadow').hide()
        });

        tagListTem()
    }
    setTag();
    chooseTag();

    /*选择已有学员*/
    function chooseStu() {
        $('#choose').on('click', function () {
            $('#chooseStu').show();
        })
        $('#close').on('click', function () {
            $('#chooseStu').hide();
        })
        $('#ensure_5').on('click', function () {
            if(stu){
                $('#name').val(stu.name).attr('disabled', true);
                $('#contact').val(stu.contact).attr('disabled', true);
                if(stu.sex === '男'){
                    $('input[name="inlineRadioOptions"][value = "option1"]').prop('checked',true);
                }else{
                    $('input[name="inlineRadioOptions"][value = "option2"]').prop('checked',true);
                }
                $('input[name="inlineRadioOptions"]').attr('disabled', true).parent().addClass('disabled')
                $('#chooseStu').hide();
            }
        })
    }
    chooseStu()
    $("#table_3").bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: false, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            $element.css({
                'background': '#01b591',
                'color': '#fff'
            }).siblings('tr').css({
                'background': '#fff' ,
                'color': '#000'
            });
            stu = row;
            var test = new RegExp('<i class="iconfont icon-nan1"></i>');
            console.log(test.test(stu.name));
            if(test.test(stu.name)){
                stu.sex = '男'
            }else{
                stu.sex = '女'
            }
            stu.name = stu.name.replace(/<i class="iconfont icon-n\w+1"><\/i>/, '');
            console.log(stu);
        },
        columns: [
            {
                title: '姓名',
                field: 'name',
                align: 'center'
            },
            {
                title: '联系方式',
                field: 'contact',
                align: 'center'
            },
            {
                title: '在读课程',
                field: 'classType',
                align: 'center'
            }
        ],
        data: [
            {
            name: ' <i class="iconfont icon-nan1"></i>张三',
            contact: '13100000000',
            classType: '围棋'
             },
            {
                name: ' <i class="iconfont icon-nv1"></i>李红',
                contact: '13100000000',
                classType: '钢琴'
            }
        ]
    });

    /*选择一对一弹窗*/
    function show2hide(a, b, c) {
        $(a).on('click', function () {
            $(c).show()
        });
        $(b).on('click', function () {
            $(c).hide()
        })
    }
    show2hide('#openO2O' ,'#close_2', '.consultation_record-box-shadow-4')
    $('#ensure_2').on('click', function () {
        console.log(chooseCourse);
        if(chooseCourse.type === '班课'){
            var div = document.createElement('div'),
                a = '<table class="table hasChoose">\n' +
                    '                    <tr>\n' +
                    '                        <th colspan="3">\n' +chooseCourse.courseName +
                    '                        </th>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <td>\n' +
                    '                            选择班级：\n' +
                    '                        </td>\n' +
                    '                        <td colspan="2">\n' +
                    '                            <select name="class" class="form-control">\n' +
                    '                                <option value="0">待分班</option>\n' +
                    '                            </select>\n' +
                    '                            <a href="javascript:;" class="btn btn-default">\n' +
                    '                                <i class="glyphicon glyphicon-plus" aria-hidden="true"></i>\n' +
                    '                                新建班级\n' +
                    '                            </a>\n' +
                    '                            <div class="cost fr">\n' +
                    '                                <i class="iconfont icon-jine"></i>\n' +
                    '                                应收：<span>3600</span>元\n' +
                    '                                <a href="javascript:;" class="btn btn-default">\n' +
                    '                                    <i class="iconfont icon-guanbi"></i>\n' +
                    '                                </a>\n' +
                    '                            </div>\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <td>学费：</td>\n' +
                    '                        <td colspan="2">\n' +
                    '                            <span class="price">3800</span>\n' +
                    '                            元\n' +
                    '                            &nbsp;&nbsp;\n' +
                    '                            <span class="price">3800</span>\n' +
                    '                            元/期（86课时）\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <td rowspan="3">优惠：</td>\n' +
                    '                        <td rowspan="3">\n' +
                    '                            <span class="price">0.00</span>\n' +
                    '                            元\n' +
                    '                        </td>\n' +
                    '                        <td style="padding-left: 0">\n' +
                    '                            插班减少：\n' +
                    '                            <input type="text" name="reduce_1" class="form-control">\n' +
                    '                            课时\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <td>\n' +
                    '                            优惠：\n' +
                    '                            <input type="text" name="reduce_2" class="form-control">\n' +
                    '                            元\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <td>\n' +
                    '                            折扣：\n' +
                    '                            <select name="discount_1" class="form-control">\n' +
                    '                                <option value="0">无</option>\n' +
                    '                                <option value="1">95</option>\n' +
                    '                                <option value="2">9</option>\n' +
                    '                                <option value="3">85</option>\n' +
                    '                                <option value="4">8</option>\n' +
                    '                                <option value="5">75</option>\n' +
                    '                                <option value="6">7</option>\n' +
                    '                                <option value="7">65</option>\n' +
                    '                                <option value="8">6</option>\n' +
                    '                                <option value="9">55</option>\n' +
                    '                                <option value="11">5</option>\n' +
                    '                                <option value="12">45</option>\n' +
                    '                                <option value="13">4</option>\n' +
                    '                                <option value="14">35</option>\n' +
                    '                                <option value="15">3</option>\n' +
                    '                                <option value="16">25</option>\n' +
                    '                                <option value="17">2</option>\n' +
                    '                                <option value="18">15</option>\n' +
                    '                                <option value="19">1</option>\n' +
                    '                            </select>\n' +
                    '                            折\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <!--<tr>\n' +
                    '                        <td colspan="2">\n' +
                    '                            <a href="javascript:;" class="btn btn-default">\n' +
                    '                                <i class="glyphicon glyphicon-plus" aria-hidden="true"></i>\n' +
                    '                                新增教材杂费\n' +
                    '                            </a>\n' +
                    '                        </td>\n' +
                    '                    </tr>-->\n' +
                    '                    <tr>\n' +
                    '                        <td>对内备注：</td>\n' +
                    '                        <td colspan="2">\n' +
                    '                            <input style="width: 100%;" type="text" class="form-control" placeholder="该备注只对内部操作人员可见">\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <td>对外备注：</td>\n' +
                    '                        <td colspan="2">\n' +
                    '                            <input style="width: 100%;" type="text" class="form-control" placeholder="该备注将会被打印">\n' +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                </table>';
            $(div).addClass('table-box').html()
        }
    })
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
    /*选择一对一表格*/
    var $table = $('#table');
    var chooseCourse ; /*点击选择课程存储键*/
    $table.bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: false, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            $element.css({
                'background': '#01b591',
                'color': '#fff'
            });
            chooseCourse = row;
        },
        columns: [
            {
                title: '课程名称',
                field: 'courseName',
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
                title: '类型',
                field: 'type',
                align: 'center'
            },
            {
                title: '开班数',
                field: 'num',
                align: 'center'
            }
        ],
        data: [
            {
                courseName: '新媒体设计',
                costs: "16000.00元/期",
                classType: '三四作文',
                type: '班课',
                num: '10'
            },
            {
                courseName: '新媒体设计',
                costs: "16000.00元/期",
                classType: '三四作文',
                type: '一对一',
                num: '10'
            }
        ]
    });

    /*选择班级弹窗*/
    show2hide('#classSignUp' ,'#close_3', '.consultation_record-box-shadow-3')
    /*收缩 拉伸*/
    closure('#closure_2', '#opening_2', '#tableList_2');

    /*选择班级表格*/
    var $table_2 = $('#table_2');
    var chooseClass;
    $table_2.bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: false, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            $element.css({
                'background': '#01b591',
                'color': '#fff'
            });
            chooseClass = row;
        },
        columns: [
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
                title: '课程名称',
                field: 'courseName',
                align: 'center'
            },
            {
                title: '人数',
                field: 'peoNum',
                align: 'center'
            },
            {
                title: '教师',
                field: 'teacher',
                align: 'center'
            },
            {
                title: '开班',
                field: 'staTime',
                align: 'center'
            },
            {
                title: '上课时间',
                field: 'classTime'
            }
        ],
        data: [
            {
                className: 'BK街舞美术教育基础课1班',
                costs: '10000.00 元/期',
                courseName: '拉丁舞1',
                peoNum: '2/4',
                teacher: 'Asa张',
                staTime: '09-01',
                classTime: '每天 08:00-22:00'
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

    /*教师列表*/
    $('.teacher_list_1').bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: true, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            /*$element.css({
                'background': '#01b591',
                'color': '#fff'
            }).siblings('tr').css({
                'background': '#fff' ,
                'color': '#000'
            });*/
            stu = row;
            var test = new RegExp('<i class="iconfont icon-nan1"></i>');
            console.log(test.test(stu.name));
            if(test.test(stu.name)){
                stu.sex = '男'
            }else{
                stu.sex = '女'
            }
            stu.name = stu.name.replace(/<i class="iconfont icon-n\w+1"><\/i>/, '');
            $('#teacher_blank_1').html(stu.name)
            $('.teacher_list_box_1').hide()
        },
        columns: [
            {
                title: '姓名',
                field: 'name',
                align: 'center'
            },
            {
                title: '手机号',
                field: 'phone',
                align: 'center'
            },
            {
                title: '冲突状态',
                field: 'conflict',
                align: 'center'
            },
            {
                title: '时段',
                field: 'type',
                align: 'center',
                formatter: function (value, row, index) {
                    return "<a href='javascript:;' class='btn btn-primary'>查看</a>"
                }
            }
        ],
        data: [
            {
                name: '<i class="iconfont icon-nan1"></i>张三',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-kongxian"></i>空闲'
            },
            {
                name: '<i class="iconfont icon-nv1"></i>李红',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-chongtu-fuben"></i>冲突'
            }
        ]
    });
    $('.teacher_list_2').bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: true, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            /*$element.css({
                'background': '#01b591',
                'color': '#fff'
            }).siblings('tr').css({
                'background': '#fff' ,
                'color': '#000'
            });*/
            stu = row;
            var test = new RegExp('<i class="iconfont icon-nan1"></i>');
            console.log(test.test(stu.name));
            if(test.test(stu.name)){
                stu.sex = '男'
            }else{
                stu.sex = '女'
            }
            stu.name = stu.name.replace(/<i class="iconfont icon-n\w+1"><\/i>/, '');
            $('#teacher_blank_2').html(stu.name)
            $('.teacher_list_box_2').hide()
        },
        columns: [
            {
                title: '姓名',
                field: 'name',
                align: 'center'
            },
            {
                title: '手机号',
                field: 'phone',
                align: 'center'
            },
            {
                title: '冲突状态',
                field: 'conflict',
                align: 'center'
            },
            {
                title: '时段',
                field: 'type',
                align: 'center',
                formatter: function (value, row, index) {
                    return "<a href='javascript:;' class='btn btn-primary'>查看</a>"
                }
            }
        ],
        data: [
            {
                name: '<i class="iconfont icon-nan1"></i>张三',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-kongxian"></i>空闲'
            },
            {
                name: '<i class="iconfont icon-nv1"></i>李红',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-chongtu-fuben"></i>冲突'
            }
        ]
    });
    $('.teacher_list_3').bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: true, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            /*$element.css({
                'background': '#01b591',
                'color': '#fff'
            }).siblings('tr').css({
                'background': '#fff' ,
                'color': '#000'
            });*/
            stu = row;
            var test = new RegExp('<i class="iconfont icon-nan1"></i>');
            console.log(test.test(stu.name));
            if(test.test(stu.name)){
                stu.sex = '男'
            }else{
                stu.sex = '女'
            }
            stu.name = stu.name.replace(/<i class="iconfont icon-n\w+1"><\/i>/, '');
            $('#teacher_blank_3').html(stu.name)
            $('.teacher_list_box_3').hide()
        },
        columns: [
            {
                title: '姓名',
                field: 'name',
                align: 'center'
            },
            {
                title: '手机号',
                field: 'phone',
                align: 'center'
            },
            {
                title: '冲突状态',
                field: 'conflict',
                align: 'center'
            },
            {
                title: '时段',
                field: 'type',
                align: 'center',
                formatter: function (value, row, index) {
                    return "<a href='javascript:;' class='btn btn-primary'>查看</a>"
                }
            }
        ],
        data: [
            {
                name: '<i class="iconfont icon-nan1"></i>张三',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-kongxian"></i>空闲'
            },
            {
                name: '<i class="iconfont icon-nv1"></i>李红',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-chongtu-fuben"></i>冲突'
            }
        ]
    });
    $('.teacher_list_4').bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: true, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "server", //服务端处理分页
        onClickRow: function (row, $element, field) {
            /*$element.css({
                'background': '#01b591',
                'color': '#fff'
            }).siblings('tr').css({
                'background': '#fff' ,
                'color': '#000'
            });*/
            stu = row;
            var test = new RegExp('<i class="iconfont icon-nan1"></i>');
            console.log(test.test(stu.name));
            if(test.test(stu.name)){
                stu.sex = '男'
            }else{
                stu.sex = '女'
            }
            stu.name = stu.name.replace(/<i class="iconfont icon-n\w+1"><\/i>/, '');
            $('#teacher_blank_4').html(stu.name)
            $('.teacher_list_box_4').hide()
        },
        columns: [
            {
                title: '姓名',
                field: 'name',
                align: 'center'
            },
            {
                title: '手机号',
                field: 'phone',
                align: 'center'
            },
            {
                title: '冲突状态',
                field: 'conflict',
                align: 'center'
            },
            {
                title: '时段',
                field: 'type',
                align: 'center',
                formatter: function (value, row, index) {
                    return "<a href='javascript:;' class='btn btn-primary'>查看</a>"
                }
            }
        ],
        data: [
            {
                name: '<i class="iconfont icon-nan1"></i>张三',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-kongxian"></i>空闲'
            },
            {
                name: '<i class="iconfont icon-nv1"></i>李红',
                phone: '13100000000',
                conflict: '<i class="iconfont icon-chongtu-fuben"></i>冲突'
            }
        ]
    });

    /*教材杂费选择学生*/
    var chooseStuTimes = 0;
    $('#ensure_6').on('click', function () {
        if(stu){
            chooseStuTimes++;
            var a = '                    <div class="table-box">\n' +
                '                            <i class="iconfont icon-guanbi"></i>\n' +
                '                            <table class="table">\n' +
                '                                <tr>\n' +
                '                                    <td style="width: 110px;">\n' +
                '                                        姓名：\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input id="name_'+chooseStuTimes+'" class="form-control" type="text" disabled>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td>\n' +
                '                                        性别：\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <label class="radio-inline disabled">\n' +
                '                                            <input type="radio" class="'+chooseStuTimes+'" name="sex_'+chooseStuTimes+'" value="option1" disabled> 男\n' +
                '                                        </label>\n' +
                '                                        <label class="radio-inline disabled">\n' +
                '                                            <input type="radio" class="'+chooseStuTimes+'" name="sex_'+chooseStuTimes+'" value="option2" disabled> 女\n' +
                '                                        </label>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td>\n' +
                '                                        联系方式：\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input id="contact_'+chooseStuTimes+'" class="form-control" type="text" disabled>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                            </table>\n' +
                '                        </div>\n';
            var li = document.createElement('li');
            console.log(li);
            $('.chooseStu >ul').append($(li).html(a).addClass(chooseStuTimes));
            $('#name_'+chooseStuTimes).val(stu.name).attr('disabled', true);
            $('#contact_'+chooseStuTimes).val(stu.contact).attr('disabled', true);
            if(stu.sex === '男'){
                $('input[name="sex_'+chooseStuTimes+'"][value = "option1"]').prop('checked',true);
            }else{
                $('input[name="sex_'+chooseStuTimes+'"][value = "option2"]').prop('checked',true);
            }
            $('input[name="sex_'+chooseStuTimes+'"]').attr('disabled', true).parent().addClass('disabled')
            $('#chooseStu').hide();
        }
    })
    $('.chooseStu').on('click', '.icon-guanbi', function () {
        $(this).parent().parent().remove()
    })


})