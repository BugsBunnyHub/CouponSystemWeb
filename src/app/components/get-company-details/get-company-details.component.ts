import {Component, OnInit} from '@angular/core';
import {Companies} from '../../models/companies';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-get-company-details',
  templateUrl: './get-company-details.component.html',
  styleUrls: ['./get-company-details.component.css']
})
export class GetCompanyDetailsComponent implements OnInit {

  public company: Companies = new Companies();

  constructor(private client: CompanyService) {
  }

  ngOnInit() {
    this.client.getCompanyDetails().subscribe((result) => {
      this.company = result;
    });
  }

}
