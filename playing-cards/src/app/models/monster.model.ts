import { MonsterType } from "../utils/monster.utils";

export class Monster {
    id : number = -1;
    name : string = 'Monster';
    image : string = '/img/cards/pikachu.png';
    type : MonsterType = MonsterType.ELECTRIC;
    hp : number = 40;
    figureCaption : string = "N°001 Monster";
    attackName : string = "GeoImpact";
    attackStrength : number = 60;
    attackDescription : string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat libero eveniet eos sit alias."

    public copy(): Monster{
        return Object.assign(new Monster(),this)
    }
}
