import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster-service';
import { Monster } from '../../models/monster.model';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { Router } from '@angular/router';
import { toSignal} from '@angular/core/rxjs-interop';
import { MonsterApiService } from '../../services/monsterApi/monster-api.service';

@Component({
  selector: 'app-monster-list',
  imports: [PlayingCardComponent, SearchbarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  //Injection du service Monster
  private monsterService = inject(MonsterService);
  private router = inject(Router);

  private _monsterApiService = inject(MonsterApiService)
  // transforme l'observable en signal
  monstersApi = toSignal(this._monsterApiService.getAll()) 

  public monsters = signal<Monster[]>([]);// Le transformer en signal pour que Angular détecte qu'il peut y avoir des changements
  
  search = model('');
  filteredMonsters = computed(()=>{
      return this.monsters().filter(m =>m.name.includes(this.search()))
      //Si utilisation Api (potentiellment undefined):
      return this.monsters()?.filter(m =>m.name.includes(this.search())) ?? []
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
      //Upgrade to redirect to the add monster form
      this.router.navigate(['monster'])

      /*Add generic monster
      const genericMonster = new Monster();
      this.monsterService.add(genericMonster);
      this.monsters.set(this.monsterService.getAll());*/
    }

    public openMonster(monster : Monster){
      this.router.navigate(['monster', monster.id]);
    }

  


}
