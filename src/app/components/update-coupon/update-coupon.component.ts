import {Component, OnInit} from '@angular/core';
import {Coupons} from '../../models/coupons';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon: Coupons = new Coupons();

  constructor(private client: CompanyService) {
  }

  public updateCoupon() {
    this.client.updateCoupon(this.coupon).subscribe(result => {
      alert('coupon info:  ' + ' ID: ' + result.id + ' name: ' + result.title);
    });
  }

  ngOnInit() {
  }

}
