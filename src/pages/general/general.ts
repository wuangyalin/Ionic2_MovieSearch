import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingServiceProvider } from '../../providers/setting-service/setting-service';

/*
  Generated class for the General page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-general',
  templateUrl: 'general.html'
})
export class GeneralPage {
  private theme_color: any;

  constructor(private setting: SettingServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
      this.setting.getTheme().subscribe(val => {
      if(val == 'dark-theme'){
        console.log('dark-theme');
        this.theme_color = 'dark';
      }else if(val == 'light-theme'){
        this.theme_color = 'light';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }

}
