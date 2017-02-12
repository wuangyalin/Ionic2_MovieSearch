import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service'

/*
  Generated class for the MovieDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html'
})
export class MovieDetailPage {
  private movieInfo: {};
  private movieDouban: {}
  private type: string;
  private rows: any;

    constructor(private nav: NavController, private np: NavParams,private _ms: MovieService) {
      this.type = np.get('type');
      if(this.type == 'imdb')
        this.movieInfo = np.get('movieimdb');
      else
        this.movieInfo = np.get('moviedouban');
    }
}