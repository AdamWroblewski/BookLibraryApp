import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegister} from './user-register.model';
import {Observable} from 'rxjs';
import {UserLogin} from './user-login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private appUrl = 'https://localhost:44369/api/user';
  userRegister: UserRegister = new UserRegister();
  userLogin: UserLogin = new UserLogin();

  constructor(private http: HttpClient) {
  }

  public registerUser(): Observable<any> {
    return this.http.post(`${this.appUrl}/register`, this.userRegister);
  }

  public loginUser(): Observable<any> {
    return this.http.post(`${this.appUrl}/authenticate`, this.userLogin);
  }

  public isUserNameValid(): Observable<any> {
    return this.http.get(`${this.appUrl}/validatename/${this.userRegister.userName}`);
  }
}
