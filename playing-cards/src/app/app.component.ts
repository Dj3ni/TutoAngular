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

  //Injection du service Monster
  monsterService = inject(MonsterService); 
  
  // count : number = 0;
  // search : string = '';

  //public monsters! : Monster[];

  public monsters = signal<Monster[]>([]);// Le transformer en signal pour que Angular détecte qu'il peut y avoir des changements
  

  search = model('');
  filteredMonsters = computed(()=>{
    return this.monsters().filter(m =>m.name.includes(this.search()))
  })

  constructor(){

    //appel au service Monster

    this.monsters.set(this.monsterService.getAll());
      
      // utilisation signal effect()

      // effect(()=>{
      //   console.log(this.selectedMonster());
      // })
  }

  public addMonster(){
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }

  // public increaseCount(){
  //   this.count++;
  // }

  // toggle Monster

  //public selectedMonsterIndex = 0; // Sans signal
  // Avec signal: 
  public selectedMonsterIndex = signal(0);
  public selectedMonster = computed(()=> {
    return this.monsters()[this.selectedMonsterIndex()]
  })
  
  

  //public toggleMonster(){
  //   //this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length; // sans signal
  //   this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  // }
}
