import { Module, HttpModule } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service'


@Module({
    imports: [HttpModule],
    controllers: [PeopleController],
    providers: [PeopleService]
})
export class PeopleModule {}
