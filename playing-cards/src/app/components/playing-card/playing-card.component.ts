import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';


@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
    imageUrl : any ="/img/energyIcons/electric.png";

    //En faisant cela on les transforme en attributs    
    public monster : InputSignal<Monster> = input(new Monster());


    public MonsterTypeIcon : string = 'img/cards/pikachu.png';
    public backgroundColor : string = 'rgb(255,255,104)';
}
