import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-income-statistics',
  templateUrl: 'IncomeStatistics.component.html',
  styleUrls: ['IncomeStatistics.component.css']
})

export class IncomeStatisticsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  public option = {
    backgroundColor: '',
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [
          {value: 235, name: '城市一通'},
          {value: 274, name: '微信'},
          {value: 310, name: '支付宝'},
          {value: 335, name: '现金'},
          {value: 400, name: '信用'}
        ],
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(0, 0, 0, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)'
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  public option2 = {
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['光华路soho', '国贸', '世贸天阶', '国贸A区', 'SOHO二期'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'直接访问',
        type:'bar',
        barWidth: '60%',
        data:[40, 60, 120, 160, 200]
      }
    ]
  };

  public option3 = {
    background: "#fff",
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: '',
      subtext: '(万元)'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['最高收入']
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis:  {
      type: 'category',
      boundaryGap: false,
      data: ['1月','2月','3月','4月','5月','6月','7月',"8月","9月",'10月',"11月","12月"]
    },
    yAxis: {
      type: 'value',
      axisLabel: {

      }
    },
    series: [
      {
        name:'',
        type:'line',
        data:[1, 1.2, 1.5, 3, 2.2, 1.6, 1.4, 1.2, 1, 0.8, 0.7, 1.5],
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        }
      }
    ]
  };
}


