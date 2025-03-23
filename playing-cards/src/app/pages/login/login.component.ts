import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Credentials, LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{
  private _formBuilder = inject(FormBuilder);
  private _loginService = inject(LoginService);
  private _router = inject(Router);

  private _loginSubscription : Subscription | null = null;

  loginFormGroup = this._formBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['',[Validators.required]]
  });

  invalidCredentials = false;

  public login(){
    this._loginSubscription = this._loginService.login(this.loginFormGroup.value as Credentials).subscribe({
      //if succes proceed:
      next: (result : User | null | undefined) =>{
        this.navigateHome();
      },
      // else :
      error : error =>{
        this.invalidCredentials = true;
      }
    })
  }

  public navigateHome(): void {
    this._router.navigate(["Home"]);
  }

  ngOnDestroy(): void {
     this._loginSubscription?.unsubscribe();
   }
}
