import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  NgApexchartsModule
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-user-strengths-chart',
  templateUrl: './user-strengths-chart.component.html',
  styleUrls: ['./user-strengths-chart.component.scss'],
  standalone: true, // Marks it as a standalone component
  imports: [NgApexchartsModule] // Importing NgApexchartsModule here
})
export class UserStrengthsChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Student Strengths',
          data: [85, 70, 90, 60, 75, 80] // Example data
        }
      ],
      chart: {
        height: 300,
        type: 'radar',
        offsetY: -40,
        offsetX: 0,
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
        toolbar: {
          show: false
        }
      },
      title: {
        text: ''
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.3
      },
      markers: {
        size: 4
      },
      xaxis: {
        categories: [
          'Technology',
          'Creativity',
          'Communication',
          'Mathematics',
          'Problem Solving',
          'Teamwork'
        ]
      }
    };
  }
}
