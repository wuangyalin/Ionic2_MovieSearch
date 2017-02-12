import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { MovieService } from '../providers/movie-service'

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { SearchPage } from '../pages/search/search';
import { SettingPage } from '../pages/setting/setting';
import { GeneralPage } from '../pages/general/general';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SplashPage,
    MovieDetailPage,
    SearchPage,
    SettingPage,
    GeneralPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SplashPage,
    MovieDetailPage,
    SearchPage,
    SettingPage,
    GeneralPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,MovieService]
})
export class AppModule {}
