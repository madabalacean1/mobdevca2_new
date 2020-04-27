// Initial code from class recording 14/4
// 25/4 - Added getters for characters, quotes and deaths
// API doc @ https://breakingbadapi.com/Documentation

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // GETTERS
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
  }

//  getEpisodes() {
 //     return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/episodes.json`)
 //   }

  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
  }
// getEpisode() {
  //  return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/episode.json`)
  //   }


  getCharacters() {
      return this.http.get(`https://www.breakingbadapi.com/api/characters/`)
  }

 //  getCharacters() {
 //  return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/characters.json`)
 //  }

  getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }
/// getCharacter() {
  ///    return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/character.json`)
//    }

  getQuotes() {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
  }

// getQuotes() {
 //    return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/quotes.json`)
  //  }

  getQuote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
  }

  // getQuote() {
  //    return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/quote.json`)
 //   }

  getDeaths() {
      return this.http.get(`https://www.breakingbadapi.com/api/deaths`)

//  getDeaths() {
 //     return this.http.get(`https://8100-f692b599-1a29-4a6b-b306-e8829afac297.ws-eu01.gitpod.io/assets/deaths.json`)
 // }

  }
  getDeath(name) {
      return this.http.get(`https://breakingbadapi.com/api//death-count?name=Gustavo+Fring`)
  }

}