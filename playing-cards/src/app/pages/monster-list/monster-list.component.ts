import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster-service';
import { Monster } from '../../models/monster.model';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-monster-list',
  imports: [PlayingCardComponent, SearchbarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  //Injection du service Monster
  monsterService = inject(MonsterService); 

  public monsters = signal<Monster[]>([]);// Le transformer en signal pour que Angular détecte qu'il peut y avoir des changements
  
  search = model('');
  filteredMonsters = computed(()=>{
      return this.monsters().filter(m =>m.name.includes(this.search()))
  })

      // Avec signal: 
  public selectedMonsterIndex = signal(0);
  public selectedMonster = computed(()=> {
    return this.monsters()[this.selectedMonsterIndex()]
  })

    constructor(){
      this.monsters.set(this.monsterService.getAll());
    }

    public addMonster(){
      const genericMonster = new Monster();
      this.monsterService.add(genericMonster);
      this.monsters.set(this.monsterService.getAll());
    }

  


}
