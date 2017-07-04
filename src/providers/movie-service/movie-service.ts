import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Platform} from 'ionic-angular';

import 'rxjs/add/operator/map';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  data: Array<any>;
  private api_key: string = 'bd7f4410a88b17e5e0ed2c4139630137';
  private baseUrl: string;
  private baseUrl_TMDB: string = 'http://api.themoviedb.org/3/movie/';

  constructor(private _platform: Platform, private http: Http) {
    this.data = null;
    if (this._platform.is('core')) {
      // This will only print when on web
      this.baseUrl = "/movie";
    }else{
      this.baseUrl = "https://api.douban.com/v2/movie";
    }
  }

  searchIMDB(query: string) {
    let url = 'https://api.themoviedb.org/3/search/movie?query=&query='+query+'&api_key='+this.api_key;
    let response = this.http.get(url).map(res => res.json());
    return response;
  }
  searchDouban(query: string){
    let url = this.baseUrl+'/search?q=' + query;
    //console.log(url);
    let response = this.http.get(url).map(res => res.json());
    return response;
  }
  searchDoubanDetail(id: string){
    let url = this.baseUrl+'/subject/'+id;
    console.log("url: "+url);
    let response = this.http.get(url).map(res => res.json());
    return response;
  }
  home_movies(type: string){
    let url: string = '';
    if(type=='slide') 
      url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2017&api_key=bd7f4410a88b17e5e0ed2c4139630137';
    else url = this.baseUrl_TMDB+type+'?api_key='+this.api_key;
    //console.log(url);
    let response = this.http.get(url).map(res => res.json());
    return response;
  }

}
