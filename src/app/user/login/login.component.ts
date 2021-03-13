import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

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
          this.invalidLogin = false;
          this.router.navigate(['/']);
        },
        error => {
          this.invalidLogin = true;
        });
  }
}
