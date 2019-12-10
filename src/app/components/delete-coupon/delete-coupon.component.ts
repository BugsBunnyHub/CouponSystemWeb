import {Component, OnInit} from '@angular/core';
import {Coupons} from '../../models/coupons';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  public coupon: Coupons = new Coupons();

  constructor(private client: CompanyService) {
  }

  public deleteCoupon() {
    this.client.deleteCoupon(this.coupon.id).subscribe(() => {
      alert('coupon deleted');
    });
  }

  ngOnInit() {
  }

}
