export class Pokemon {
    public id:number = 0;
    public name:string  = ""; 
    public type:string = "";
    public desc:string = "";
    public imgUrl:string = "";
}

export const POKEMON_LIST:Pokemon[] = [
    
    {
        id: 0,
        desc: "pokemon de type souris électrique", 
        imgUrl: "", 
        name: "Pikachu", 
        type: "electrique"
    },
    {
        id: 1,
        desc: "Pokemon de type feu", 
        imgUrl: "", 
        name: "Salamèche", 
        type: "feu"
    },
    {
        id: 2,
        desc: "Pokemon de type tortue d'eau", 
        imgUrl: "", 
        name: "Carapuce", 
        type: "eau"
    },
    {
        id: 3,
        desc: "Pokemon de jardin", 
        imgUrl: "", 
        name: "Bulbizarre", 
        type: "plante"
    }
];
