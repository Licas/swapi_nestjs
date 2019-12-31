import { Injectable, Dependencies, HttpService } from '@nestjs/common';
import { map,first } from 'rxjs/operators'

@Injectable()
@Dependencies(HttpService)
export class PeopleService {
    constructor(httpService) {
        this.httpService = httpService
        this.swapiBaseUrl = 'https://swapi.co/api/'
        this.pepoleRelativeUrl = 'people'
    }

    async getAll() {
        let url = this.swapiBaseUrl + this.pepoleRelativeUrl + '/'
    
        let response = await this.httpService.get(url).pipe( 
            map(response => response.data),
            first()).toPromise()
        
        return {
            total: response.count,
            nextPage: response.next,
            previousPage: response.previous,
            people:response.results
        };    
    }

    async getByName(name) {
        let url = `${this.swapiBaseUrl}${this.pepoleRelativeUrl}?search=${name}`

        let response = await this.httpService.get(url).pipe( 
                map(response => response.data),
                first()).toPromise()
        
        return {
            total: response.count,
            nextPage: response.next,
            previousPage: response.previous,
            people:response.results
        };    
    }
    
    getById(id) {
        return { "id": id }
    }
}
