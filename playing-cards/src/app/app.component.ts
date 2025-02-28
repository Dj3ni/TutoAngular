import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchbarComponent } from "./components/searchbar/searchbar.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [PlayingCardComponent, SearchbarComponent],
  templateUrl: './app.component.html', // lien vers feuille html
  styleUrl: './app.component.css' // lien vers feuille de style
})
export class AppComponent {

  monster1! : Monster;

  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = "Pikachu";
    this.monster1.hp = 40;
    this.monster1.figureCaption ='N°002 Pikachu'
  }
}
