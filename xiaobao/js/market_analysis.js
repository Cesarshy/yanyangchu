$(function () {

    /*echarts*/
    var myChart = echarts.init(document.getElementById('echarts'));

    /*售前管理分析图表*/
    var nameData = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        numData = [5, 20, 36, 10, 10, 20];
    function echart_preSale(type,nameData, numData) {
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color: ['#01b591'],
            xAxis: {
                data: nameData
            },
            yAxis: {},
            series: [{
                name: type,
                type: 'bar',
                barWidth: '50%',
                data: numData
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    /*按钮点击改变样式*/
    function changStyle() {
        $('.e-content >ul a').removeClass('btn-primary');
        $(this).addClass('btn-primary')
    }
    echart_preSale('沟通记录量',nameData, numData);
    $('#echartsA').on('click', function () {
        changStyle.call($(this));
        var type = $(this).text();
        echart_preSale(type,nameData, numData);
    })
    $('#echartsB').on('click', function () {
        changStyle.call($(this));
        var type = $(this).text();
        echart_preSale(type,nameData, numData);
    })
    $('#echartsC').on('click', function () {
        changStyle.call($(this));
        var type = $(this).text();
        echart_preSale(type,nameData, numData);
    })
    $('#echartsD').on('click', function () {
        changStyle.call($(this));
        var type = $(this).text();
        echart_preSale(type,nameData, numData);
    })
    $('#echartsE').on('click', function () {
        changStyle.call($(this));
        var type = $(this).text();
        echart_preSale(type,nameData, numData);
    })
    $('#echartsG').on('click', function () {
        changStyle.call($(this));
        var type = $(this).text();
        echart_preSale(type,nameData, numData);
    })

})