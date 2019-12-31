import { Controller } from '@nestjs/common';

@Controller('starship')
export class StarshipController {

    @Get('all')
    getAll() {
        return []
    }
}   
