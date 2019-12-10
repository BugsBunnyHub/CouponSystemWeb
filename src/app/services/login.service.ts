import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) {
  }

  // could be an example for other methods, here we use post method like in swagger
  public login(email: string, password: string, type: string) {
    return this.client.post('http://localhost:8080/login/' + email + '/' + password + '/' + type,
      null, {responseType: 'text'});
  }
}
