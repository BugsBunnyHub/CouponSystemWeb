import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Customers} from '../../models/customers';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  public customer: Customers = new Customers();

  constructor(private client: AdminService) {
  }

  // TODO alert the exception
  public deleteCustomer() {
    this.client.deleteCustomer(this.customer.id).subscribe(() => {
      alert('customer deleted');
    });
  }

  ngOnInit() {
  }

}
