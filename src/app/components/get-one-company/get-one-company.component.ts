import {Component, OnInit} from '@angular/core';
import {Companies} from '../../models/companies';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css']
})

export class GetOneCompanyComponent implements OnInit {

  public company: Companies = new Companies();

  constructor(private client: AdminService) {
  }

  public getOneCompanyById() {
    this.client.getOneCompanyById(this.company.id).subscribe((result) => {
      if (result == null || undefined) {
        alert('Company not found!');
      } else {
        this.company = result;
      }
    });
  }

  public getOneCompanyByName() {
    this.client.getOneCompanyByName(this.company.name).subscribe((result) => {
      if (result == null || undefined) {
        alert('Company not found!');
      } else {
        this.company = result;
      }
    });
  }

  public getOneCompanyByEmail() {
    this.client.getOneCompanyByEmail(this.company.email).subscribe((result) => {
      if (result == null || undefined) {
        alert('Company not found!');
      } else {
        this.company = result;
      }
    });
  }

  ngOnInit() {
  }

}
