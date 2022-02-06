import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

const App = () => {
  const options={
    chart: {
        type: 'waterfall'
    },
    title: {
        text: 'Highcharts stacked waterfall'
    },
    title: {
      text: 'Highcharts Waterfall'
  },

  xAxis: {
      type: 'category'
  },

  yAxis: {
      title: {
          text: 'USD'
      }
  },

  legend: {
      enabled: false
  },

  tooltip: {
      pointFormat: '<b>{point.title:,} <br/>${point.y:,.2f}</b> USD'
  },
  dataLabel:{
    enabled:true
  },

  series: [{
      upColor: Highcharts.getOptions().colors[2],
      color: Highcharts.getOptions().colors[3],
      data: [{
          title: 'Uncommited',
          name: 'Trx. Exposure',
          y: 120000,
      }, {
          title: 'Commited',
          name: 'Trx. Exposure',
          y: 569000,
          color: Highcharts.getOptions().colors[3],

      }, {
          name: 'Service Revenue',
          y: 231000
      }, {

          name: 'Positive Balance',
          isIntermediateSum: true,
          color: Highcharts.getOptions().colors[1]
      }],
      dataLabels: {
          enabled: true,
          formatter: function () {
              console.log(this);
              return this.point.title+'<br/>'+Highcharts.numberFormat(this.y, 0, ',') + 'k';
          },
          style: {
              color: '#FFFFFF',
              fontWeight: 'bold',
              textShadow: '0px 0px 3px black'
          }
      },
      pointPadding: 0
  }]
};
  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}

export default App;