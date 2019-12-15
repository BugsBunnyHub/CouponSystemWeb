import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../services/company.service';
import {Customers} from '../../models/customers';

@Component({
  selector: 'app-get-customer-coupons',
  templateUrl: './get-customer-coupons.component.html',
  styleUrls: ['./get-customer-coupons.component.css']
})
export class GetCustomerCouponsComponent implements OnInit {

  public customer: Customers = new Customers();

  constructor(private client: CompanyService) {
  }

  ngOnInit() {
    this.client.getCompanyDetails().subscribe((result) => {
      this.customer = result;
    });
  }

}
