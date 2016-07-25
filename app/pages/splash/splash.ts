import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/splash/splash.html',
})
export class SplashPage {
  constructor(private nav: NavController) {
  }
  goToHome(){
    this.nav.setRoot(TabsPage);
  }

}
