import { Component, computed, effect, model, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common'; // import ngIf et ngFor
import { MonsterService } from './services/monster/monster-service';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [CommonModule, PlayingCardComponent, SearchbarComponent],
  templateUrl: './app.component.html', // lien vers feuille html
  styleUrl: './app.component.css' // lien vers feuille de style
})
export class AppComponent {

  // count : number = 0;
  // search : string = '';

  //public monsters! : Monster[];

 
  constructor(){}



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
