import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://8100-mrlington-mobdevca3-b3w36j7txjr.ws-eu45.gitpod.io/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get('https://8100-mrlington-mobdevca3-b3w36j7txjr.ws-eu45.gitpod.io/assets/characters.json')
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://8100-mrlington-mobdevca3-b3w36j7txjr.ws-eu45.gitpod.io/assets/quotes.json`);
    }

    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }

    getDeath(id) {
        return this.http.get(`https://8100-mrlington-mobdevca3-b3w36j7txjr.ws-eu45.gitpod.io/assets/deaths.json`)
    }

}