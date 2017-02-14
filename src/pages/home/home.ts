import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MovieService} from '../../providers/movie-service';
import {MovieDetailPage} from '../movie-detail/movie-detail';
import { SettingService } from '../../providers/setting-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private upcomingMovie: Array<any>;
  private playingMovie: Array<any>;
  private toprateMovie: Array<any>;
  private popularMovie: Array<any>;
  private slidesMovie: Array<any>;
  private rows: any;
  private classify: string = "upcomming";
  private theme_color: any;

  constructor(private setting: SettingService, private nav: NavController, private _ms: MovieService) {
    this.slidesMovie = [];
    this.upcomingMovie = [];
    this.playingMovie = [];
    this.toprateMovie = [];
    this.popularMovie = [];
  }
  ngOnInit(){
    this.slidesMovie = this.getMovies('slide');
    this.upcomingMovie = this.getMovies('upcoming');
    this.playingMovie = this.getMovies('now_playing');
    this.popularMovie = this.getMovies('popular');
    this.toprateMovie = this.getMovies('top_rated');
    this.setting.getTheme().subscribe(val => {
      if(val == 'dark-theme'){
        console.log('dark-theme');
        this.theme_color = 'dark';
      }else if(val == 'light-theme'){
        this.theme_color = 'light';
      }
    });
  }

  getMovies(type: string){
    let return_movies: Array<any> = [];
    this._ms.home_movies(type).subscribe(
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
        //console.log(type + ' Search Complete');
      }
    );
    return return_movies;
  }
  selectMovie(movie: any,type: string){
    type = type || 'imdb';
    console.log(type);
    this.nav.push(MovieDetailPage, {
      movieimdb: movie,
      moviedouban: movie,
      type: type
    }); 
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
