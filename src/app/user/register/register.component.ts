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

  isFormInvalid = false;
  userNameTaken = false;
  emailTaken = false;

  passwordErrors = {
    numberOfLetters: 'Password must contain at least 8 characters',
    smallLetters: 'Password must contain at least 1 lowercase letter',
    capitalLetters: 'Password must contain at least 1 uppercase letter',
    specialSymbol: 'Password must contain at least 1 non alphanumeric character',
    digit: 'Password must contain at least 1 digit'
  };

  register(form: NgForm): void {
    this.userService.registerUser()
      .subscribe(() => {
          form.form.reset();
        },
        error => console.log(error.message));
  }

  isUserNameValid(userName: NgModel): void {
    if (userName.value !== '') {
      this.userService.isUserNameValid()
        .subscribe(result => {
            this.userNameTaken = result as boolean;
          },
          error => console.log(error));
    }
  }

  isEmailTaken(email: NgModel): void {
    if (email.value !== '') {
      this.userService.isEmailTaken()
        .subscribe(result => {
            console.log(result as boolean);
            this.emailTaken = result as boolean;
          },
          error => console.log(error));
    }
  }

  isRepeatPasswordValid(password: NgModel, confirmPassword: NgModel): boolean {
    return password.model === confirmPassword.model;
  }

  validatePasswordSmallLetters(model: NgModel): boolean {
    const regex = new RegExp('[a-z]');
    return regex.test(model.model);
  }

  validatePasswordCapitalLetters(model: NgModel): boolean {
    const regex = new RegExp('[A-Z]');
    return regex.test(model.model);
  }

  validatePasswordNonAlphaNumeric(model: NgModel): boolean {
    const regex = new RegExp('[^a-zA-Z\\d\\s:]');
    return regex.test(model.model);
  }

  validatePasswordDigit(model: NgModel): boolean {
    const regex = new RegExp('[0-9]');
    return regex.test(model.model);
  }

  ngOnInit(): void {
  }

}
