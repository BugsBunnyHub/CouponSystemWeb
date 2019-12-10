import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Customers} from '../../models/customers';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public customer: Customers = new Customers();

  constructor(private client: AdminService) {
  }

  ngOnInit() {
  }

  public addCustomer() {
    this.client.addCustomer(this.customer).subscribe(result => {
      alert('Customer info:  ' + 'customer ID: ' + result.id + ' name: ' + result.firstName + ' last name: ' + ' email: ' + result.email);
    });
  }


}
