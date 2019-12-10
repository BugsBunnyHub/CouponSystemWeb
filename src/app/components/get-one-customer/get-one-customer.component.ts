import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Customers} from '../../models/customers';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css']
})
export class GetOneCustomerComponent implements OnInit {

  public customer: Customers = new Customers();

  constructor(private client: AdminService) {
  }

  public getOneCustomerById() {
    this.client.getOneCustomerById(this.customer.id).subscribe((result) => {
      if (result == null || undefined) {
        alert('customer not found!');
      } else {
        this.customer = result;
      }
    });
  }

  public getOneCustomerByEmail() {
    this.client.getOneCustomerByEmail(this.customer.email).subscribe((result) => {
      if (result == null || undefined) {
        alert('customer not found!');
      } else {
        this.customer = result;
      }
    });
  }

  ngOnInit() {
  }

}
