import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserLogin} from '../../shared/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public userService: UserService, private router: Router) {
  }

  invalidLogin: boolean | undefined;

  ngOnInit(): void {
  }

  public loginUser(form: NgForm): void {
    this.userService.loginUser()
      .subscribe(res => {
          const token = res.token;
          localStorage.setItem('jwt', token);
          this.userService.userLogin = new UserLogin();
          this.invalidLogin = false;
          this.router.navigate(['/book']);
        },
        error => {
          this.invalidLogin = true;
        });
  }
}
