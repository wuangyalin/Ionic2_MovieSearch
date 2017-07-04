import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingServiceProvider } from '../../providers/setting-service/setting-service';
import { SearchPage } from '../search/search';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = AboutPage
  private theme_color: any;
  
  constructor(private setting: SettingServiceProvider) {
      this.setting.getTheme().subscribe(val => {
      if(val == 'dark-theme'){
        console.log('dark-theme');
        this.theme_color = 'dark';
      }else if(val == 'light-theme'){
        this.theme_color = 'light';
      }
    });
  }
}
