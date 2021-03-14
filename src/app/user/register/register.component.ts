import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';

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

  ngOnInit(): void {
  }

}
