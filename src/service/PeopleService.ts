import { Injectable } from "@nestjs/common";
import { People } from "src/model/People";

@Injectable()
export class PeopleService{
    private peoples:People[];
    constructor(){
        this.peoples = [];
        this.populate();
    }

    public getPeoples():People[]{
        return this.peoples;
    }

    public addPeople(people:People){
        if(people.age<0) throw new Error("Unvalid");
        this.peoples.push(people);
    }

    private populate(){
        const p1 = new People("Juan",12);
        const p2 = new People("Jorge",14);
        this.peoples.push(p1);
        this.peoples.push(p2);
    }
}