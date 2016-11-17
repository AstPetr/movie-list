import { Injectable } from '@angular/core';
import {Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class TvService {
  apikey: string;

  constructor(private _jsonp:Jsonp) {
    this.apikey = '56e73d08d7ac775ed65f1f7d6674d6f1';
  }

  getPopular(nr:number){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/tv?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey+'&page='+nr)
      .map(res => res.json());
  }

  searchTvShow(query: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/tv?callback=JSONP_CALLBACK&api_key='+this.apikey+'&language=en-US&query='+ query)
      .map(res => res.json());
  }

  getTvShow(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

  getTvShowVideos(id:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+id+'/videos?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

  getTvShowKeywords(id:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+id+'/keywords?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

}
