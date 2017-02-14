import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { SettingService } from '../../providers/setting-service'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab3Root: any = AboutPage;
  tab2Root: any = SearchPage;
  private theme_color: any;
  
  constructor(private setting: SettingService,) {
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
