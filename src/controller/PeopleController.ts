import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, Inject, Post, SerializeOptions, UseInterceptors } from "@nestjs/common";
import { People } from "src/model/People";
import { PeopleService } from "src/service/PeopleService";

@Controller()
export class PeopleController{

    @Inject()
    private peopleService:PeopleService;

    constructor(){
        console.log("Create controller")
    }

    @Get("/peoples")
    @SerializeOptions({
        
    })
    public getPeoples(){
        return this.peopleService.getPeoples();
    }

    @Post("/peoples")
    public addPeople(@Body() people:People){
        try{
            this.peopleService.addPeople(people);
        }catch(e){
            throw new BadRequestException(e.message)
        }
    }
}