import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";

export type ChartBarOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartBarOptions: Partial<ChartBarOptions> | any;

  constructor() { }

  ngOnInit(): void {

    this.barChart()

  }

  barChart(): void{
    this.chartBarOptions = {
      series: [{
        name: 'Goals',
        data: [12, 45, 61, 18, 10, 54, 23]
      }],
        chart: {
        type: 'bar',
        height: 175,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: ''
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: ['white'],
          }
        },
      },
      xaxis: {
        categories: ['s', 'm', 't', 'w', 't', 'f', 's'],
        labels: {
          show: true,
          style: {
            colors: ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
          }
        },
      },
      fill: {
        opacity: 1,
        colors: [ // this array contains different color code for each data
        "#C2FF4E"
        ],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };
  }

}
