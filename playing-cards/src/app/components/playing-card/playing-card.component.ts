import { Component, Input } from '@angular/core';
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
    @Input({
      transform:(value:Monster) => {
        value.hp = value.hp/2
        return value;
      }
    })
    public monster : Monster = new Monster();

}
