import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';

import { SettingServiceProvider } from "../providers/setting-service/setting-service";
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  chosenTheme: any;
  constructor(platform: Platform,storage: Storage, statusBar: StatusBar, splashScreen: SplashScreen,private setting: SettingServiceProvider) {
    storage.get('current-theme').then((result)=>{
      this.setting.setTheme(result);
    });
    this.setting.getTheme().subscribe(val => this.chosenTheme = val);
    //storage.remove('introShown');
    storage.get('introShown').then((result)=>{
      if(result){
        this.rootPage = TabsPage;
      }else{
        storage.set('introShown',true);
        this.rootPage = SplashPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

