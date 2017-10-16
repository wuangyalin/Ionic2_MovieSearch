import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { SettingServiceProvider } from '../../providers/setting-service/setting-service';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  private resultsDouban: Array<any>;
  private resultsIMDB: Array<any>;
  private rows: any;
  private theme_color: any;
  private theme_color_reverse: any;
  constructor(private setting: SettingServiceProvider,private _nav: NavController, private _ms: MovieServiceProvider) {
        this.setting.getTheme().subscribe(val => {
      if(val == 'dark-theme'){
        this.theme_color = 'dark';
        this.theme_color_reverse = 'light';
      }else if(val == 'light-theme'){
        this.theme_color = 'light';
        this.theme_color_reverse = 'dark';

      }
    });
  }

  searchMovie(query: string){
  if(query.length > 1)  {
    this.resultsIMDB = this.getTmdbMovies(query);
    this.resultsDouban = this.getDoubanMovies(query);
   }
  }

  getTmdbMovies(query: string){
    let return_movies: Array<any> = [];
    this._ms.searchIMDB(query).subscribe(
      data => {
        let movies = data.results; 
        for (let movie of movies) {
          let rates: Array<string> = this.setRate(movie.vote_average);
          //console.log(movie.title);
          return_movies.push({
            title: movie.title,
            original_title: movie.original_title,
            image: 'http://image.tmdb.org/t/p/w500/'+movie.poster_path,
            release_date: movie.release_date,
            vote: movie.vote_average,
            vote_count: movie.vote_count,
            description: movie.overview,
            star1: rates[0],
            star2: rates[1],
            star3: rates[2],
            star4: rates[3],
            star5: rates[4],
          });
        }
      },
      err => {
        console.log(err);
      },
      () => {
          this.rows = Array.from(Array(Math.ceil(return_movies.length / 3)).keys());
      }
    );
    return return_movies;
  }


  getDoubanMovies(query: string){
    let return_movies: Array<any> = [];
    this._ms.searchDouban(query).subscribe(
      data => {
        let movies = data.subjects; 
        for (let movie of movies) {
          let rates: Array<string> = this.setRate(movie.rating.average);
          //console.log(movie.title);
          return_movies.push({
            title: movie.title,
            original_title: movie.original_title,
            image: movie.images.medium,
            id: movie.id,
            release_date: movie.year,
            vote: movie.rating.average,
            star1: rates[0],
            star2: rates[1],
            star3: rates[2],
            star4: rates[3],
            star5: rates[4],
          });
        }
      },
      err => {
        console.log(err);
      },
      () => {
          this.rows = Array.from(Array(Math.ceil(return_movies.length / 3)).keys());
        //console.log(type + ' Search Complete');
      }
    );
    return return_movies;
  }
  getDoubanMovieDetail(id: string,type: string){
      let return_movies = {};
      this._ms.searchDoubanDetail(id).subscribe(
        data => {
          let movie = data; 
          let rates: Array<string> = this.setRate(movie.rating.average);
          //console.log(movie.title);
          return_movies = {
            title: movie.title,
            original_title: movie.original_title,
            image: movie.images.large,
            release_date: movie.year,
            description: movie.summary,
            vote: movie.rating.average,
            vote_count: movie.ratings_count,
            star1: rates[0],
            star2: rates[1],
            star3: rates[2],
            star4: rates[3],
            star5: rates[4],
          };
        },
        err => {
          console.log(err);
        },
        () => {
          console.log('douban detail Search Complete');
            this._nav.push(MovieDetailPage, {
              moviedouban: return_movies,
              type: type
            });  
        }
      );
      console.log('return_movies'+return_movies);
    }
  selectMovie(movie: any,type: string){
    type = type || 'imdb';
    if(type == 'imdb'){
      this._nav.push(MovieDetailPage, {
        movieimdb: movie,
        type: type
      }); 
    }else{ 
      this.getDoubanMovieDetail(movie.id,type);
    }
  }
  setRate(rate: string){
    let rates: Array<string> = [];
    let number = Math.round(Number(rate));
    for(let i=0;i<Math.floor(number/2);i++){
      rates.push('full');
    }
    if(number%2 == 1){
      rates.push('half');
    }
    return rates;   
  }
}
