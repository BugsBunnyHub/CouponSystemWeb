import {Component, OnInit} from '@angular/core';
import {Companies} from '../../models/companies';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  public company: Companies = new Companies();

  constructor(private client: AdminService) {
  }

  public deleteCompany() {
    this.client.deleteCompany(this.company.id).subscribe(() => {
      alert('company deleted');
    });
  }

  ngOnInit() {
  }

}
