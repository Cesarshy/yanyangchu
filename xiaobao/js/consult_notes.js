var myChart = echarts.init(document.getElementById('chart'));



var option = {
    /*title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        right: '20',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        top: '40',
        data: ['全部咨询','待跟进','跟进中','已邀约','已试听', '已到访', '已成交']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 100,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 35, name: '已成交'},
                {value: 10, name: '已到访'},
                {value: 30, name: '已试听'},
                {value: 40, name: '已邀约'},
                {value: 20, name: '跟进中'},
                {value: 80, name: '待跟进'},
                {value: 100, name: '全部咨询'}
            ]
        }
    ]
};

myChart.setOption(option);

$(function () {

    var currentFirstDate,
        lis = $('.data-show >ul >li'),
        length = lis.length;
    /*li标签渲染*/
    var formatDate = function(date){
        var day = date.getDate();
        var week = ['周日','周一','周二','周三','周四','周五','周六'][date.getDay()];
        var tem = '<span>'+ week +'</span><div>'+ day +'</div>';
        return tem;
    };
    /*head渲染*/
    var formatDay = function(date){
        var year = date.getFullYear()+'年';
        var month = (date.getMonth()+1)+'月';
        var day = date.getDate();
        var tem = year+month+day+'日';
        return tem;
    };
    var addDate= function(date,n){
        date.setDate(date.getDate()+n);
        return date;
    };
    var setDate = function(date){
        var week = date.getDay()-1,
        D = date.getDay();
        date = addDate(date,week*-1);
        currentFirstDate = new Date(date);
        for(var i = 0;i<length;i++){
            if( i === D - 1){
                $(lis[i]).addClass('current');
                lis[i].innerHTML = formatDate(i==0 ? date : addDate(date,1));
                $('.c-m-b-l-header >span').html(formatDay(i==0 ? date : addDate(date,0)))
            }else{
                $(lis[i]).removeClass('current');
                lis[i].innerHTML = formatDate(i==0 ? date : addDate(date,1));
            }
        }
    };

    document.getElementById('last-week').onclick = function(){
        lis.removeClass('current');
        setDate(addDate(currentFirstDate,-7));
        /*$('.c-m-b-l-header span').html(get7DaysBefore(new Date(), -times));*/
    };
    document.getElementById('next-week').onclick = function(){
        lis.removeClass('current');
        setDate(addDate(currentFirstDate,7));
    };
    setDate(new Date());

    /*li标签点击事件*/
    $('.data-show >ul').on('click', 'li', function () {
        lis.removeClass('current');
        $(this).addClass('current')
    })

    /*点击自定义时间*/
    $('#bootstrap-date').on('change', function () {
        var a = $('#dtp_input5').val();
        console.log(new Date(a));
        a = a.replace(/-/g,'/');
        setDate(new Date(a));
    })

});