export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = 'water',
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

//Le dictionnaire va mapper le type du monstre et ses propriété
export const MonsterTypeProperties : {[key:string] : IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl:'/img/energyIcons/grass.png',
        color: 'rgba(135,255,124)'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl:'/img/energyIcons/electric.png',
        color: 'rgba(255,255,104)'
    },
    [MonsterType.FIRE]: {
        imageUrl:'/img/energyIcons/fire.png',
        color: 'rgba(255,104,124)'
    },
    [MonsterType.WATER]: {
        imageUrl:'/img/energyIcons/water.png',
        color: 'rgba(118,235,124)'
    },
    
}