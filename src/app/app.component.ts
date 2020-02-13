import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { FormGeneric } from './form-generic';
import { USER } from './form.model';
import { User } from './model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    form: FormGeneric = new FormGeneric();
    user = {} as User;
    users = [] as User[];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.group = this.fb.group(USER);
    this.form.populateForm(this.user);
  }

  onSubmit() {
    const user = {} as User;
    this.form.assign(user);
    this.users.push(user);
    console.log(this.users);
  }
}
