import { Component, computed, effect, model, signal,inject, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common'; // import ngIf et ngFor
import { MonsterService } from './services/monster/monster-service';
import { LoginService } from './services/login/login.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MatIconModule, 
    MatButtonModule, 
    MatToolbarModule
  ],
  //imports: [CommonModule, PlayingCardComponent, SearchbarComponent],
  templateUrl: './app.component.html', // lien vers feuille html
  styleUrl: './app.component.css' // lien vers feuille de style
})
export class AppComponent implements OnDestroy{

  // count : number = 0;
  // search : string = '';

  //public monsters! : Monster[];

  private _router = inject(Router);
  loginService = inject(LoginService);
  private logoutSubscription : Subscription | null = null;

  constructor(){}

  ngOnDestroy(): void {
    this.logoutSubscription?.unsubscribe();
  }

  logout(){
    this.logoutSubscription = this.loginService.logout().subscribe({
      next : _ =>{
        this.navigateToLogin();
      },
      error : _ =>{
        this.navigateToLogin();
      }
    });
  }

  navigateToLogin(){
    this._router.navigate(["login"]);
  }

  navigateHome(){
    this._router.navigate(["home"]);
  }


  // public increaseCount(){
  //   this.count++;
  // }

  // toggle Monster

  //public selectedMonsterIndex = 0; // Sans signal
  
  
  

  //public toggleMonster(){
  //   //this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length; // sans signal
  //   this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  // }
}
