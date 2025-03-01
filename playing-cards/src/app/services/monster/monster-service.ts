import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root' // indique la portée du service
})
export class MonsterService{

  public monsters: Monster[] = [];
  public currentIndex : number = 0;

  constructor() { 
    this.load(); // charge les infos et si aucune, les initie
          
  }

  // Pour le local storage

  private save(){
    localStorage.setItem('monsters',JSON.stringify(this.monsters));
  }

  private load(){
    const monsterData = localStorage.getItem('monsters');
    if(monsterData){ // conversion en objet js
      this.monsters = JSON.parse(monsterData).map((monsterJson: any) => Object.assign(new Monster(),monsterJson));
      this.currentIndex = Math.max(...this.monsters.map(m =>m.id))
    }
    else{ // Si rien n'était chargé, on fait un init
      this.init();
      this.save();
    }
  }

  private init(){
    // Init Pikachu
    const monster1 = new Monster();
    monster1.id = this.currentIndex++; // on incrémente après avoir assigné
    monster1.name = "pikachu";
    monster1.hp = 40;
    monster1.figureCaption ='N°002 Pikachu';
    monster1.type = MonsterType.ELECTRIC;
    monster1.image = '/img/cards/pikachu.png';
  this.monsters.push(monster1);
  // Init Carapuce
  const monster2 = new Monster();
    monster2.id = this.currentIndex++;
    monster2.name = "carapuce";
    monster2.hp = 60;
    monster2.type = MonsterType.WATER;
    monster2.image = 'img/cards/carapuce.png';
    monster2.figureCaption ='N°003 Carapuce';
    this.monsters.push(monster2)
  //Init Osselet
  const monster3 = new Monster();
    monster3.id = this.currentIndex++;
    monster3.name = "osselet";
    monster3.hp = 70;
    monster3.type = MonsterType.PLANT;
    monster3.image = 'img/cards/osselet.png';
    monster3.figureCaption ='N°004 Osselet'
    this.monsters.push(monster3)
  // Init Evoli
  const monster4 = new Monster();
    monster4.id = this.currentIndex++;
    monster4.name = "evoli";
    monster4.hp = 50;
    monster4.type = MonsterType.FIRE;
    monster4.image = 'img/cards/evoli.png';
    monster4.figureCaption ='N°005 Evoli'
    this.monsters.push(monster4)
  }

  // CRUD

  public getAll(): Monster[] {
    return this.monsters.map(m => m.copy()); 
  }

  public getById(id: number) : Monster | undefined{
    const monster = this.monsters.find(m => m.id == id);
    return monster ? monster.copy() : undefined;
  }

  add(monster : Monster): Monster {
    const monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.save();
    return monsterCopy;
  }

  update(monster : Monster) : Monster {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id=== monsterCopy.id)
    if(monsterIndex != -1){
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
    }
    return monsterCopy
  }

  delete (id: number) :void {
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === id)
    if(monsterIndex != -1) {
      this.monsters.splice(monsterIndex,1);
      this.save();
    }
  }

}
