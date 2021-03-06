import { Injectable } from '@angular/core';
import {Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apikey: string;

  constructor(private _jsonp:Jsonp) {
    this.apikey = '56e73d08d7ac775ed65f1f7d6674d6f1';
    console.log('Filmai veikia...');
  }

  getPopular(nr: number){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey+'&page='+nr)
      .map(res => res.json());
  }

  searchMovie(query: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&api_key='+this.apikey+'&language=en-US&query='+ query)
      .map(res => res.json());
  }

  getMovie(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

  getMovieVideos(id:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/videos?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

  getMovieKeywords(id:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/keywords?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

}
