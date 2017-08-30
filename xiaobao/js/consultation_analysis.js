$(function () {
    /*echarts*/
    var myChart = echarts.init(document.getElementById('echarts_1'));
    /*咨询人数统计漏斗图表*/
    var data_1 = [
            {value: 60, name: '全部咨询'},
            {value: 40, name: '待跟进'},
            {value: 20, name: '跟进中'},
            {value: 80, name: '已邀约'},
            {value: 100, name: '已试听'},
            {value: 100, name: '已到访'},
            {value: 100, name: '已成交'}
        ];
    function echarts_1(data) {
        var option ;
        option = {
            tooltip: {
                trigger: 'item'
            },
            calculable: true,
            series: [
                {
                    name:'咨询人数',
                    type:'funnel',
                    left: '20%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '60%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true
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
                    data: data
                }
            ]
        };
        myChart.setOption(option);
    }
    echarts_1(data_1)
    /*咨询人数统计折线图*/
    var xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        data_2 = [120, 132, 101, 134, 90, 230, 210];
    function echarts_2(xAxisData, data) {
        var myChart = echarts.init(document.getElementById('echarts_2'));
        var option;
        option = {
            color:['#01b591'],
            tooltip: {    //提示框组件
                trigger: 'axis'
            },
            grid: {       //直角坐标系内绘图网格
                left: '3%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {       //直角坐标系 grid 中的 x 轴
                type: 'category',
                boundaryGap: false,
                data: xAxisData
            },

            yAxis: {       //直角坐标系 grid 中的 y 轴

                type: 'value'

            },

            series:       //系列列表
                {
                    name: '咨询人数',
                    type: 'line',
                    data: data
                }
        };
        myChart.setOption(option);   //参数设置方法
    }
    echarts_2(xAxisData, data_2)

    /*校区咨询量对比柱状图*/
    var campus = ["一中","二中","三中"],
        data_3 = [5, 20, 36];
    function echarts_3(id,type,nameData, numData) {
        var myChart = echarts.init(document.getElementById(id));
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
    echarts_3('echarts_3','咨询人数', campus, data_3);
    /*售前人员咨询量对比柱状图*/
    var staffData = ['张三', '李四', '王五'],
        data_4 = [30, 100 ,10];
    echarts_3('echarts_4','咨询人数', staffData, data_4);
    
    /*饼状图*/
    function pie(id, data) {
        var myChart = echarts.init(document.getElementById(id)),
            option;
        app.title = '环形图';

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'咨询人数',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data
                }
            ]
        };
        myChart.setOption(option);
    }
    var data_5 = [
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'},
        {value:1548, name:'a'}
    ]
    pie('echarts_5', data_5)
})