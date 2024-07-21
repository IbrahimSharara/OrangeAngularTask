import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { CustomerService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: CustomerService) {}

  title = 'Pi Chart';
  Piechart: any = [];
  Linechart: any = [];
  result: any = [];
  servicesName: any = [];
  year = 2024;
  ngOnInit() {
    this.service.GetCustomersPerService().subscribe({
      next: (val) => {
        this.result = val;
        this.servicesName = this.result.map((name: any) => name.serviceName);
        this.Piechart = new Chart('piecanvas', {
          type: 'pie',
          data: {
            labels: this.servicesName,
            datasets: [
              {
                label: '# of Services',
                data: [
                  this.result[2].count,
                  this.result[1].count,
                  this.result[0].count,
                ],
                borderWidth: 3,
                rotation: 3,
                backgroundColor: ['#FFEB3B', '#FF5722', '#FF9800'],
              },
            ],
          },
          options: {},
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        {
          console.log('completed');
        }
      },
    });

    this.service.GetCustomersPerYear(this.year).subscribe({
      next: (val) => {
        this.result = val;
        this.Linechart = new Chart('linecanvas', {
          type: 'line',
          data: {
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            datasets: [
              {
                label: ' customers count per months',
                data: [
                  this.result[4].count,
                  this.result[3].count,
                  this.result[7].count,
                  this.result[0].count,
                  this.result[8].count,
                  this.result[6].count,
                  this.result[5].count,
                  this.result[1].count,
                  this.result[11].count,
                  this.result[10].count,
                  this.result[9].count,
                  this.result[2].count,
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        {
          console.log('completed');
        }
      },
    });
  }
}
