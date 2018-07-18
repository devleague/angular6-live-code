import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: ''
  };

  nameValid = false;
  emailValid = false;

  constructor(private backend: BackendService) { }

  validateName(data) {
    // validate exists
    if (!this.formData.name) { this.nameValid = false; }
    // validate length of at least 3
    else if (this.formData.name.length < 3) { this.nameValid = false; }
    // otherwise it's all good
    else { this.nameValid = true; }
  }

  validateEmail() {
    // validate exists
    if (!this.formData.email) { this.emailValid = false; }
    // validate length of at least 3
    else if (this.formData.email.length < 3) { this.emailValid = false; }
    // validate email includes at least one '@'
    else if (!this.formData.email.includes('@')) { this.emailValid = false; }
    // otherwise it's all good
    else { this.emailValid = true; }
  }

  submitDisabled() {
    return !(this.nameValid && this.emailValid);
  }

  submitForm() {
    console.log('clicked');
    this.backend.contact(this.formData)
    .then((response) => {
      console.log('Response: ', response);
    });
  }
}
