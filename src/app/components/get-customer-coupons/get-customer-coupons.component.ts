import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Coupons} from '../../models/coupons';


@Component({
  selector: 'app-get-customer-coupons',
  templateUrl: './get-customer-coupons.component.html',
  styleUrls: ['./get-customer-coupons.component.css']
})
export class GetCustomerCouponsComponent implements OnInit {

  coupons: Coupons[] = [];

  constructor(private client: CustomerService) {
  }

  ngOnInit() {
    this.client.getCustomerCoupons().subscribe((result) => {
      this.coupons = result;
    });
  }

}
