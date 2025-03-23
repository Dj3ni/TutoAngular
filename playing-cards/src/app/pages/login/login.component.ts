import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);

  loginFormGroup = this._formBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['',[Validators.required]]
  });

  invalidCredentials = false;

  login(){

  }

}
