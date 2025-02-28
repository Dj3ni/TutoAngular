import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [PlayingCardComponent, SearchbarComponent],
  templateUrl: './app.component.html', // lien vers feuille html
  styleUrl: './app.component.css' // lien vers feuille de style
})
export class AppComponent {

  monster1! : Monster;
  monster2! : Monster;
  count : number = 0;
  search : string = '';

    constructor(){
      this.monsters = [];
    this.monster1 = new Monster();
      this.monster1.name = "Pikachu";
      this.monster1.hp = 40;
      this.monster1.figureCaption ='N°002 Pikachu';
    this.monsters.push(this.monster1);
    this.monster2 = new Monster();
      this.monster2.name = "Carapuce";
      this.monster2.hp = 60;
      this.monster2.type = MonsterType.WATER;
      this.monster2.image = 'img/cards/carapuce.png';
      this.monster2.figureCaption ='N°003 Carapuce'
      this.monsters.push(this.monster2)
  }

  public increaseCount(){
    this.count++;
  }

  // toggle Monster

  public selectedMonsterIndex = 0;
  public monsters! : Monster[];

  public toggleMonster(){
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length;
  }
}
