import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Coupons} from '../../models/coupons';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  coupons: Coupons[] = [];


  constructor(private client: AdminService) {
  }

  ngOnInit() {
    this.client.getAllCoupons().subscribe((result) => {
      this.coupons = result;
    });
  }

}
