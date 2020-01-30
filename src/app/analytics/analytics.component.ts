import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public barChartLabels: Label[] = ['China', 'India', 'U.S.', 'Indonesia', 'Brazil', 'Iran', 'Germany'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public pieChartLabels: Label[] = ['China', 'India', 'U.S.', 'Indonesia', 'Brazil', 'Iran', 'Germany'];
  public pieChartData: number[] = [1388232693, 1342512706, 326474013, 263510146, 211243220, 80945718, 80636124];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public data = [{
    Rank: '1',
    country: 'China',
    population: '1388232693',
    World: '0.185'
  }, {
    Rank: '2',
    country: 'India',
    population: '1342512706',
    World: '0.179'
  }, {
    Rank: '3',
    country: 'U.S.',
    population: '326474013',
    World: '0.043'
  }, {
    Rank: '4',
    country: 'Indonesia',
    population: '263510146',
    World: '0.035'
  }, {
    Rank: '5',
    country: 'Brazil',
    population: '211243220',
    World: '0.028'
  },
  {
    Rank: '17',
    country: 'Iran',
    population: '80945718',
    World: '0.011'
}, {
    Rank: '18',
    country: 'Germany',
    population: '80636124',
    World: '0.011'
}, {
    Rank: '19',
    country: 'Turkey',
    population: '80417526',
    World: '0.011'
}, {
    Rank: '20',
    country: 'Thailand',
    population: '68297547',
    World: '0.009'
}]
  public barChartData: ChartDataSets[] = [
    { data: [1388232693, 1342512706, 326474013, 263510146, 211243220, 80945718, 80636124], label: 'population' },
    { data: [1, 2, 3, 4, 5, 17, 18], label: 'Rank' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
