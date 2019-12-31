import { Controller, Dependencies,  Get } from '@nestjs/common';
import { Bind, Req, Query, Param } from '@nestjs/common';

import { PeopleService } from './people.service';

@Controller('people')
@Dependencies(PeopleService)
export class PeopleController {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }

    @Get('/all')
    getAllPeople() {
        return this.peopleService.getAll();
    }

    @Get('/byname/:name/')
    @Bind(Param('name'))
    async getPeopleByName(name) {
        var results = await this.peopleService.getByName(name)
        // console.log("Result!",results)
        return results
    }

    @Get('/byid/:id')
    @Bind(Param('id'))
    getPeopleById(id) {
        return this.peopleService.getById(id)
    }
}