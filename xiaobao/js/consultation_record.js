$(function () {
    /*跟进状态选择*/
    $('.table-box ').on('click', '.state >a', function () {
        $('.choose-box').hide()
        console.log(1);
        $(this).parent().find('.choose-box').show()
    })
    $('.table-box').on('click', '.choose-box a',function () {
        $(this).parent().html();
        $(this).parent().parent().parent().children('a').remove();
        $(this).parent().parent().before($(this).parent().html())
        $(this).parent().parent().hide()
    })
   /* 操作选择*/
    $('#consult-table tr').on('click',  ' td:nth-child(15) >a',function () {
       /* $('#consult-table tr td:nth-child(15) >.operation-box').hide();*/
        $(this).parent().find('.operation-box').show();
    }).on('mouseleave',  ' td:nth-child(15)', function () {
        $(this).find('.operation-box').hide()
    })

    $('#consult-table').on('click', ' tr td:nth-child(8) >a',function () {
        $('.consultation_record-box-shadow').show()
    })
    $('.consultation_record-box-shadow .cancel').on('click', function () {
        $('.consultation_record-box-shadow').hide()
    })
    /*日历插件*/
    $('.form_date').datetimepicker({
        language:'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    /*bootstrap-table*/
    var $table = $('#table');
    $table.bootstrapTable({
        url: "duoBaoActivityList",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        search: false, //不显示搜索框
        searchAlign: 'left',
        sidePagination: "client", //服务端处理分页
        columns: [
            {
                title: '班级名称/人数',
                field: 'className',
                align: 'center'
            },
            {
                title: '所属课程',
                field: 'course',
                align: 'center'
            },
            {
                title: '学费标准',
                field: 'costs',
                align: 'center'
            },
            {
                title: '教师',
                field: 'teacher',
                align: 'center'
            },
            {
                title: '开班',
                field: 'openTime',
                align: 'center'
            },
            {
                title: '教室',
                field: 'classroom',
                align: 'center'
            },
            {
                title: '上课时间',
                field: 'classTime',
                align: 'center'
            }
        ]
    });
    /*办理试听*/
    $('#consult-table').on('click', 'tr td:nth-child(15) .operation-box li:nth-child(2) >a', function () {
        $(this).parent().parent().hide()
        $('.consultation_record-box-shadow-2').show()
    })
    $('#close').on('click', function () {
        $('.consultation_record-box-shadow-2').hide()
    })
})