import {Component, OnInit} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  type: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  public login(): void {
    this.loginService.login(this.email, this.password, this.type).subscribe(response => {
      // console.log(response);
      if (response.startsWith('4')) {
        alert('Login failed');
      } else if (this.type === ('Admin')) {
        sessionStorage.token = response;
        this.router.navigate(['/admin']);
      } else if (this.type === ('Company')) {
        sessionStorage.token = response;
        this.router.navigate(['/company']);
      } else if (this.type === ('Customer')) {
        sessionStorage.token = response;
        this.router.navigate(['/customer']);
      }
    });
  }

}
