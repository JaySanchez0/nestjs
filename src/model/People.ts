import { Hobby } from './Hobies';

export class People{
    name:String;
    age:number;
    hobies:Hobby[];

    constructor(name:String = null, age:number=0){
        this.name = name;
        this.age = age;
        this.hobies = [];
    }

    public addHoby(hoby:Hobby){
        this.hobies.push(hoby);
    }

}