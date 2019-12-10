import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Customers} from '../../models/customers';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  customers: Customers[] = [];

  constructor(private client: AdminService) {
  }

  ngOnInit() {
    this.client.getAllCustomers().subscribe((result) => {
      this.customers = result;
    });
  }

}
