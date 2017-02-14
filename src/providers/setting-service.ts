import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

/*
  Generated class for the SettingService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingService {
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
        // When you've wired in your persistence layer,
        // you would send it an updated theme value here.
        // for now we're just doing things in-memory
        this.theme.next(val);
    }

  getTheme() {
        return this.theme.asObservable();
    }

}
