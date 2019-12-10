import {Component, OnInit} from '@angular/core';
import {Companies} from '../../models/companies';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  companies: Companies[] = [];

  constructor(private client: AdminService) {
  }

  ngOnInit() {
    this.client.getAllCompanies().subscribe((result) => {
      this.companies = result;
    });
  }

}
