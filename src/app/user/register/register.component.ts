import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  register(form: NgForm): void {
    this.userService.registerUser()
      .subscribe(res => {
        console.log(res);
      });
  }

  isLoginValid(model: NgModel): boolean {
    if (model.touched && (model.model === undefined || model.model.length < 6)) {
      return false;
    }
    return true;
  }

  isEmailValid(model: NgModel): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (model.touched && !regex.test(model.model)) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}
