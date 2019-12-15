import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './components/admin/admin.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/home.component';
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
import {CustomerComponent} from './customer/customer.component';
import {AddCouponComponent} from './components/add-coupon/add-coupon.component';
import {GetCompanyDetailsComponent} from './components/get-company-details/get-company-details.component';
import {UpdateCouponComponent} from './components/update-coupon/update-coupon.component';
import {DeleteCouponComponent} from './components/delete-coupon/delete-coupon.component';
import {PurchaseCouponComponent} from './components/purchase-coupon/purchase-coupon.component';
import {GetAllCouponsComponent} from './components/get-all-coupons/get-all-coupons.component';
import {GetCustomerCouponsComponent} from './components/get-customer-coupons/get-customer-coupons.component';
import {GetComanyCouponsComponent} from './components/get-comany-coupons/get-comany-coupons.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    LayoutComponent,
    NavigationComponent,
    HomeComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    GetAllCompaniesComponent,
    GetOneCompanyComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetOneCustomerComponent,
    GetAllCustomersComponent,
    CompanyComponent,
    CustomerComponent,
    AddCouponComponent,
    GetCompanyDetailsComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
    PurchaseCouponComponent,
    GetAllCouponsComponent,
    GetCustomerCouponsComponent,
    GetComanyCouponsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
