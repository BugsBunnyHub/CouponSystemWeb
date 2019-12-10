import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coupons} from '../models/coupons';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient) {
  }

  public purchaseCoupon(coupon: Coupons) {
    return this.client.post<Coupons>('http://localhost:8080/customer/purchaseCoupon/' + sessionStorage.token, coupon);
  }

  public getAllCoupons(): Observable<Coupons[]> {
    return this.client.get<Coupons[]>('http://localhost:8080/customer/getAllCoupons/' + sessionStorage.token);

  }

}
