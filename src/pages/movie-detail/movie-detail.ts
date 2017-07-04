import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingServiceProvider } from '../../providers/setting-service/setting-service';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

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
  private theme_color: any;
    constructor(private setting: SettingServiceProvider,private nav: NavController, private np: NavParams,private _ms: MovieServiceProvider) {
      this.type = np.get('type');
      if(this.type == 'imdb')
        this.movieInfo = np.get('movieimdb');
      else
        this.movieInfo = np.get('moviedouban');
      this.setting.getTheme().subscribe(val => {
        if(val == 'dark-theme'){
          this.theme_color = 'dark';
        }else if(val == 'light-theme'){
          this.theme_color = 'light';
        }
      });
    }
}