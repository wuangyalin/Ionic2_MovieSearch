import { Component } from '@angular/core';

import { NavController, AlertController} from 'ionic-angular';
import { SettingServiceProvider } from '../../providers/setting-service/setting-service';
import { GeneralPage } from '../general/general';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  menus: any;
  private theme_color: any;

  constructor(private setting: SettingServiceProvider,public navCtrl: NavController, public alertCtrl: AlertController) {
    this.menus = ['General','version','setting','contact'];
    this.setting.getTheme().subscribe(val => {
      if(val == 'dark-theme'){
        console.log('dark-theme');
        this.theme_color = 'dark';
      }else if(val == 'light-theme'){
        this.theme_color = 'light';
      }
    });
  }
  menuSelected(name){
    if(name === 'General'){
      // go to general page
      this.navCtrl.push(GeneralPage);
    }else if(name==='version'){
      this.alertCtrl.create({
        title: 'Current Version: 1.0.1',
        subTitle: 'You are at the latest version',
        buttons: ['OK']
      }).present();
    }else if(name==='setting'){
      this.navCtrl.push(SettingPage);
    }else if(name==='contact'){
      this.alertCtrl.create({
        title: 'Any problem let me know',
        subTitle: '<p>Name: Luke Gong</p><p>Mobile: 0425920818</p><p>Email: master@lukegong.com</p>',
        buttons: ['OK']
      }).present();
    }
  }
}
