import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  builtForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  arrayForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.arrayForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }


  defaultForm() {
    this.profileForm.patchValue({
      firstName: 'default',
      lastName: 'value'
    });
  }

  onBuiltSubmit() {
    console.log(this.builtForm.value);
  }


  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onArraySubmit() {
    console.log(this.arrayForm.value);
  }
}
