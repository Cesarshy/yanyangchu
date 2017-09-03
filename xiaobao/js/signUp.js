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
        onClickRow: function (row, $element, field) {
            $element.css({
                'background': '#01b591',
                'color': '#fff'
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
                title: '课程名称',
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
                className: '新媒体设计',
                costs: "16000.00元/年",
                classType: '三四作文',
                type: '班课',
                num: '10'
            },
            {
                className: '新媒体设计',
                costs: "16000.00元/年",
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
    var $table_2 = $('#table_2');
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
                costs: '100.00 元/课时',
                classType: '拉丁舞1',
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
    $('.teacher_list').bootstrapTable({
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
            $('.teacher_blank').html(stu.name)
            $('.teacher_list_1').hide()
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
})