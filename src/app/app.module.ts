import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingServiceProvider } from '../providers/setting-service/setting-service';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { HttpModule } from "@angular/http";
import { SearchPage } from '../pages/search/search';
import { AboutPage } from '../pages/about/about';
import { GeneralPage } from '../pages/general/general';
import { SettingPage } from '../pages/setting/setting';
  import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MovieDetailPage,
    SearchPage,
    AboutPage,
    GeneralPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MovieDetailPage,
    SearchPage,
    AboutPage,
    GeneralPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingServiceProvider,
    MovieServiceProvider
  ]
})
export class AppModule {}
