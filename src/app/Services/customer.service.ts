import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseURL = 'https://localhost:7175/api/Customer/';

  constructor(private client: HttpClient) {}

  GetCustomersPerService() {
    return this.client.get(`${this.baseURL}CustomersPerService`);
  }

  GetCustomersPerYear(year: number) {
    return this.client.get(`${this.baseURL}CustomersPerYear?year=${year}`);
  }

  GetCustomers(pageNumber: number, pageSize: number) {
    return this.client.get(
      `${this.baseURL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }
}
