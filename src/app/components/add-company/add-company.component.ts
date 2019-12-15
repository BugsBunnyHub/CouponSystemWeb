import {Component, OnInit} from '@angular/core';
import {Companies} from '../../models/companies';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public company: Companies = new Companies();

  constructor(private client: AdminService) {
  }

  ngOnInit() {
  }
  public addCompany() {
    this.client.addCompany(this.company).subscribe(result => {
      alert('company info:  ' + 'company ID: ' + result.id + ' name: ' + result.name + ' email: ' + result.email);
    });
  }
}
