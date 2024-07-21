import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  constructor(private service: CustomerService) {}

  customers: any = [];
  pageSize: number = 20;
  pageNumber = 1;
  PAGES = 1;
  TotalItems = 20;
  ngOnInit() {
    this.service.GetCustomers(this.pageNumber, this.pageSize).subscribe({
      next: (val) => {
        this.customers = val;
        this.PAGES = this.customers.pages;
        this.TotalItems = this.customers.count;
      },
      error: (err) => console.log(err),
    });
  }

  changePagesize() {
    this.service.GetCustomers(1, this.pageSize).subscribe({
      next: (val) => {
        this.customers = val;
        this.PAGES = this.customers.pages;
        this.TotalItems = this.customers.count;
      },
      error: (err) => console.log(err),
    });
  }

  getData(page: any) {
    this.service.GetCustomers(page, this.pageSize).subscribe({
      next: (val) => {
        this.customers = val;
        this.PAGES = this.customers.pages;
        this.pageNumber = page;
        this.TotalItems = this.customers.count;
      },
      error: (err) => console.log(err),
    });
  }
}
