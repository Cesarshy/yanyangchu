var lineChart = echarts.init(document.getElementById('lineChart')),
    pieChart = echarts.init(document.getElementById('pieChart'))



var option_1 = {
    title: {
        text: '新增机构数量折线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['单月新增机构数量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'单月新增机构数量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
        }
    ]
},
    option_2 = {
        title : {
            text: '机构类型分布图',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['艺术类','中小学课外辅导类','管理类','法律类','建筑类','会计类','IT类','语言类','公务员考试辅导类','学历考试辅导类','其他']
        },
        series : [
            {
                name: '机构类型分布',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'艺术类'},
                    {value:310, name:'中小学课外辅导类'},
                    {value:234, name:'管理类'},
                    {value:135, name:'法律类'},
                    {value:1548, name:'建筑类'},
                    {value:335, name:'会计类'},
                    {value:310, name:'IT类'},
                    {value:234, name:'语言类'},
                    {value:135, name:'公务员考试辅导类'},
                    {value:1548, name:'学历考试辅导类'},
                    {value:335, name:'其他'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
lineChart.setOption(option_1)
pieChart.setOption(option_2)