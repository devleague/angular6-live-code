import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormData = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login(this.loginFormData)
    .then(() => {
      console.log('User logged in');
    })
    .catch((err) => {
      console.log('error:', err);
    });
  }
}
