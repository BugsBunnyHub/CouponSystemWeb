import {Injectable} from '@angular/core';
import {Companies} from '../models/companies';
import {Coupons} from '../models/coupons';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client: HttpClient) {
  }

  public addCoupon(coupon: Coupons) {
    return this.client.post<Coupons>('http://localhost:8080/company/addNewCoupon/' + sessionStorage.token, coupon);
  }

  public updateCoupon(coupon: Coupons) {
    return this.client.put<Coupons>('http://localhost:8080/company/updateCoupon/' + sessionStorage.token, coupon);
  }

  public deleteCoupon(id: number) {
    return this.client.delete<Coupons>('http://localhost:8080/company/deleteCoupon/' + id + '/' + sessionStorage.token);
  }

  public getCompanyDetails() {
    return this.client.get<Companies>('http://localhost:8080/company/getCompanyDetails/' + sessionStorage.token);
  }
}
