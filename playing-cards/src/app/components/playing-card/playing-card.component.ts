import { Component, input, Input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';


@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {
    
    // imageUrl : any ="/img/energyIcons/electric.png";

    //En faisant cela on les transforme en attributs    
    // public monster : InputSignal<Monster> = input(new Monster());
    @Input() monster : Monster = new Monster();

    public monsterTypeIcon : string = 'img/energyIcons/electric.png';
    public backgroundColor : string = 'rgb(255,255,104)';

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['monster']){
        // A la première exécution, il n'y a pas de previous value dc ne pas oublier de metter "?"
          if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type){
            this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
            this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
          }
        }
    }


}
