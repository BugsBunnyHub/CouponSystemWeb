import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Companies} from '../models/companies';
import {Observable} from 'rxjs';
import {Customers} from '../models/customers';

@Injectable({
  providedIn: 'root'
})

// to open a new service ng g s services/

export class AdminService {

  constructor(private client: HttpClient) {
  }

  public addCompany(company: Companies) {
    return this.client.post<Companies>('http://localhost:8080/admin/addNewCompany/' + sessionStorage.token, company);
  }

  updateCompany(company: Companies) {
    return this.client.put<Companies>('http://localhost:8080/admin/updateCompany/' + sessionStorage.token, company);
  }

  deleteCompany(id: number) {
    return this.client.delete<Companies>('http://localhost:8080/admin/deleteCompany/' + id + '/' + sessionStorage.token);

  }

  public getCompanyId(id: number) {
    return this.client.get<Companies>('http://localhost:8080/admin/findCompanyById/' + id + '/' + sessionStorage.token);

  }

  public getAllCompanies(): Observable<Companies[]> {
    return this.client.get<Companies[]>('http://localhost:8080/admin/findAllCompanies/' + sessionStorage.token);

  }

  getOneCompanyById(id: number) {
    return this.client.get<Companies>('http://localhost:8080/admin/findCompanyById/' + id + '/' + sessionStorage.token);

  }

  getOneCompanyByName(name: string) {
    return this.client.get<Companies>('http://localhost:8080/admin/findCompanyByName/' + name + '/' + sessionStorage.token);

  }

  getOneCompanyByEmail(email: string) {
    return this.client.get<Companies>('http://localhost:8080/admin/findCompanyByEmail/' + email + '/' + sessionStorage.token);

  }


  public addCustomer(customer: Customers) {
    return this.client.post<Customers>('http://localhost:8080/admin/addNewCustomer/' + sessionStorage.token, customer);
  }

  updateCustomer(customer: Customers) {
    return this.client.put<Customers>('http://localhost:8080/admin/updateCustomer/' + sessionStorage.token, customer);
  }

  deleteCustomer(id: number) {
    return this.client.delete<Customers>('http://localhost:8080/admin/deleteCustomer/' + id + '/' + sessionStorage.token);

  }

  getOneCustomerById(id: number) {
    return this.client.get<Customers>('http://localhost:8080/admin/findCustomerById/' + id + '/' + sessionStorage.token);

  }

  getOneCustomerByEmail(email: string) {
    return this.client.get<Customers>('http://localhost:8080/admin/findCustomerByEmail/' + email + '/' + sessionStorage.token);

  }

  public getAllCustomers(): Observable<Customers[]> {
    return this.client.get<Customers[]>('http://localhost:8080/admin/findAllCustomers/' + sessionStorage.token);

  }


}
