import { Component, computed, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common'; // import ngIf et ngFor

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

  public monsters! : Monster[];
  public monster1! : Monster;
  public monster2! : Monster;
  public monster3! : Monster;
  public monster4! : Monster;

  search = model('');
  filteredMonsters = computed(()=>{
    return this.monsters.filter(m =>m.name.includes(this.search()))
  })

    constructor(){
      // utilisation signal effect()

      // effect(()=>{
      //   console.log(this.selectedMonster());
      // })


      // Init tableau monsters
      this.monsters = [];
      // Init Pikachu
    this.monster1 = new Monster();
      this.monster1.name = "pikachu";
      this.monster1.hp = 40;
      this.monster1.figureCaption ='N°002 Pikachu';
      this.monster1.type = MonsterType.ELECTRIC;
      this.monster1.image = '/img/cards/pikachu.png';
    this.monsters.push(this.monster1);
    // Init Carapuce
    this.monster2 = new Monster();
      this.monster2.name = "carapuce";
      this.monster2.hp = 60;
      this.monster2.type = MonsterType.WATER;
      this.monster2.image = 'img/cards/carapuce.png';
      this.monster2.figureCaption ='N°003 Carapuce'
      this.monsters.push(this.monster2)
    this.monster3 = new Monster();
      this.monster3.name = "osselets";
      this.monster3.hp = 70;
      this.monster3.type = MonsterType.PLANT;
      this.monster3.image = 'img/cards/osselet.png';
      this.monster3.figureCaption ='N°004 Osselet'
      this.monsters.push(this.monster3)
    this.monster4 = new Monster();
      this.monster4.name = "evoli";
      this.monster4.hp = 50;
      this.monster4.type = MonsterType.FIRE;
      this.monster4.image = 'img/cards/evoli.png';
      this.monster4.figureCaption ='N°005 Evoli'
      this.monsters.push(this.monster4)
  }

  // public increaseCount(){
  //   this.count++;
  // }

  // toggle Monster

  //public selectedMonsterIndex = 0; // Sans signal
  // Avec signal: 
  public selectedMonsterIndex = signal(0);
  public selectedMonster = computed(()=> {
    return this.monsters[this.selectedMonsterIndex()]
  })
  
  

  //public toggleMonster(){
  //   //this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length; // sans signal
  //   this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  // }
}
