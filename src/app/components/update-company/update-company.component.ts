import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Companies} from '../../models/companies';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})

// add new component ng g c components/

export class UpdateCompanyComponent implements OnInit {

  public company: Companies = new Companies();

  constructor(private client: AdminService) {
  }


  public updateCompany() {
    this.client.updateCompany(this.company).subscribe(result => {
      alert('company info:  ' + 'company ID: ' + result.id + ' name: ' + result.name + ' email: ' + result.email);
    });
  }

  // get company name by it's ID to auto fill the "name" field in the update page
  public getCompanyId() {
    this.client.getCompanyId(this.company.id).subscribe(result => {
      if (result == null || undefined) {
        this.company.name = 'company not found!';
      } else {
        this.company.name = result.name;
      }
    });
  }

  ngOnInit() {

  }

}
