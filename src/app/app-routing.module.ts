import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddCompanyComponent} from './components/add-company/add-company.component';
import {UpdateCompanyComponent} from './components/update-company/update-company.component';
import {DeleteCompanyComponent} from './components/delete-company/delete-company.component';
import {GetAllCompaniesComponent} from './components/get-all-companies/get-all-companies.component';
import {GetOneCompanyComponent} from './components/get-one-company/get-one-company.component';
import {AddCustomerComponent} from './components/add-customer/add-customer.component';
import {UpdateCustomerComponent} from './components/update-customer/update-customer.component';
import {DeleteCustomerComponent} from './components/delete-customer/delete-customer.component';
import {GetOneCustomerComponent} from './components/get-one-customer/get-one-customer.component';
import {GetAllCustomersComponent} from './components/get-all-customers/get-all-customers.component';
import {CompanyComponent} from './company/company.component';
import {AddCouponComponent} from './components/add-coupon/add-coupon.component';
import {GetCompanyDetailsComponent} from './components/get-company-details/get-company-details.component';
import {UpdateCouponComponent} from './components/update-coupon/update-coupon.component';
import {DeleteCouponComponent} from './components/delete-coupon/delete-coupon.component';
import {CustomerComponent} from './customer/customer.component';
import {PurchaseCouponComponent} from './components/purchase-coupon/purchase-coupon.component';
import {GetAllCouponsComponent} from './components/get-all-coupons/get-all-coupons.component';
import {GetCustomerCouponsComponent} from './components/get-customer-coupons/get-customer-coupons.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'update-company', component: UpdateCompanyComponent},
  {path: 'delete-company', component: DeleteCompanyComponent},
  {path: 'get-all-companies', component: GetAllCompaniesComponent},
  {path: 'get-one-company', component: GetOneCompanyComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'update-customer', component: UpdateCustomerComponent},
  {path: 'delete-customer', component: DeleteCustomerComponent},
  {path: 'get-one-customer', component: GetOneCustomerComponent},
  {path: 'get-all-customers', component: GetAllCustomersComponent},
  {path: 'add-coupon', component: AddCouponComponent},
  {path: 'update-coupon', component: UpdateCouponComponent},
  {path: 'delete-coupon', component: DeleteCouponComponent},
  {path: 'get-company-details', component: GetCompanyDetailsComponent},
  {path: 'purchase-coupon', component: PurchaseCouponComponent},
  {path: 'get-all-coupons', component: GetAllCouponsComponent},
  {path: 'get-customer-coupons', component: GetCustomerCouponsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
