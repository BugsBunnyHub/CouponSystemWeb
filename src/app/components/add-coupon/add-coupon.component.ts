import {Component, OnInit} from '@angular/core';
import {Coupons} from '../../models/coupons';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public coupon: Coupons = new Coupons();

  constructor(private client: CompanyService) {
  }

  ngOnInit() {
  }

  public addCoupon() {
    this.client.addCoupon(this.coupon).subscribe(result => {
      alert('coupon info:  ' + ' ID: ' + result.id + ' name: ' + result.title);
    });
  }
}
