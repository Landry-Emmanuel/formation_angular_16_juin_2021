export class Pokemon {
    public name:string  = ""; 
    public type:string = "";
    public desc:string = "";
    public imgUrl:string = "";
}

export const POKEMON_LIST:Pokemon[] = [
    
    {
        desc: "pokemon de type souris électrique", 
        imgUrl: "", 
        name: "Pikachu", 
        type: "electrique"
    },
    {
        desc: "Pokemon de type feu", 
        imgUrl: "", 
        name: "Salamèche", 
        type: "feu"
    },
    {
        desc: "Pokemon de type tortue d'eau", 
        imgUrl: "", 
        name: "Carapuce", 
        type: "eau"
    },
    {
        desc: "Pokemon de jardin", 
        imgUrl: "", 
        name: "Bulbizarre", 
        type: "plante"
    }
];
