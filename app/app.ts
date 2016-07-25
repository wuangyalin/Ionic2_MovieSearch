import {Component} from '@angular/core';
import {Platform, ionicBootstrap,Storage, LocalStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SplashPage} from './pages/splash/splash';
import {TabsPage} from './pages/tabs/tabs';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;
  constructor(platform: Platform) {
    
    let local = new Storage(LocalStorage);

    local.get('introShown').then((result) => {
      if(result){
        this.rootPage = TabsPage;
      }else {
        local.set('introShown', true);
        this.rootPage = SplashPage;
      }
    });   
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
