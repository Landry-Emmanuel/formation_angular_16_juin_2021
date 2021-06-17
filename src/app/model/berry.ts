export class Berry {
    public id:number = 0;
    public name:string = ""; 
    public type:string = ""; 
    public price:number = 0; 
}

export const BERRIES_LIST:Berry[] = [
    {
        "id": 1,
        "name": "Baie mago", 
        "type": "restaure 1/8ème des PV max", 
        "price": 500
    },
    {
        "id": 2,
        "name": "Baie DEF +", 
        "type": "augmente la DEF d'un pokemon pendant le combat", 
        "price": 600
    },
    {
        "id": 3,
        "name": "Baie ATKQ +", 
        "type": "augmente l'ATKQ d'un pokemon pendant le combat", 
        "price": 700
    }
];