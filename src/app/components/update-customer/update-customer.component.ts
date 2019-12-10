import {Component, OnInit} from '@angular/core';
import {Customers} from '../../models/customers';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer: Customers = new Customers();

  constructor(private client: AdminService) {
  }

  public updateCustomer() {
    this.client.updateCustomer(this.customer).subscribe(result => {
      // tslint:disable-next-line:max-line-length
      alert('info: ' + ' ID: ' + result.id + ' first name: ' + result.firstName + ' last name ' + result.lastName + ' email: ' + result.email);
    });
  }

  public getCustomerId() {
    this.client.getOneCustomerById(this.customer.id).subscribe(result => {
      if (result == null || undefined) {
        this.customer.firstName = 'customer not found!';
        this.customer.lastName = '';
        this.customer.email = '';
        this.customer.password = '';
      } else {
        this.customer.firstName = result.firstName;
        this.customer.lastName = result.lastName;
        this.customer.email = result.email;
      }
    });
  }

  ngOnInit() {
  }

}
