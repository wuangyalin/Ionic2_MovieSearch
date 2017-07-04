import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

/*
  Generated class for the SettingService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingServiceProvider {
  private theme: BehaviorSubject<String>;
  availableThemes: {className: string, prettyName: string}[];

  constructor() {
    this.theme = new BehaviorSubject('dark-theme');  
    this.availableThemes = [
            {className: 'dark-theme', prettyName: 'Dark'},
            {className: 'light-theme', prettyName: 'Light'}
        ];
  }


  setTheme(val) {
        this.theme.next(val);
    }

  getTheme() {
        return this.theme.asObservable();
    }

}
