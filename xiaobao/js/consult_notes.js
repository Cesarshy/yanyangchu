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

myChart.setOption(option)