import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {User} from '../../models/user.model';
import { map, Observable, tap } from 'rxjs';

export interface Credentials {
  username : string,
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _http = inject(HttpClient);
  private Base_URL = 'http://localhost:8000';

  public user = signal< User | null | undefined >(undefined)

  constructor() { }

  public login(credentials : Credentials): Observable<User | null | undefined> {
    return this._http.post(this.Base_URL + 'sessions/login/', credentials)
              .pipe(
                tap((result : any)=>{
                  localStorage.setItem('token', result["token"]);
                  const user = Object.assign(new User(), result['user']);
                  this.user.set(user);
                }),
                map((result : any) =>{
                  return this.user()
                })
              );
  }

  public getUser():Observable<User | null | undefined> {
    return this._http.get(this.Base_URL + 'sessions/me/')
                      .pipe(
                        tap((result : any) => {
                          const user = Object.assign(new User(), result);
                          this.user.set(user);
                        }),
                        map((result : any) =>{
                          return this.user();
                        })
                      );
  }

  public logout(): Observable<null> {
    return this._http.get(this.Base_URL + 'sessions/logout/')
                      .pipe(
                        tap((result : any)=>{
                          localStorage.removeItem('token');
                          this.user.set(null);
                        })
                      );
  }

}
