import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Coupons} from '../../models/coupons';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  coupons: Coupons[] = [];

  constructor(private client: CustomerService) {
  }

  ngOnInit() {
    this.client.getAllCoupons().subscribe((result) => {
      this.coupons = result;
    });
  }

  public purchaseCoupon(c: Coupons) {
    this.client.purchaseCoupon(c).subscribe(result => {
      if (result != null) {
        alert('coupon purchased:  ' + ' ID: ' + result.id + ' name: ' + result.title);
      }
    });
  }

}
