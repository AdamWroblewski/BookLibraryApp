import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private appUrl = 'https://localhost:44369/api/user';
  user: User = new User();

  constructor(private http: HttpClient) {
  }

  public registerUser(): Observable<any> {
    return this.http.post(this.appUrl, this.user);
  }
}
