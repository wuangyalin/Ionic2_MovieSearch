import { Component} from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { SettingService } from '../../providers/setting-service';

/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  availableThemes: {className: string, prettyName: string}[];
  selected: String;
  private theme_color: any;

  constructor(private setting: SettingService, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.setting.getTheme().subscribe(val => this.selected = val);
    this.availableThemes = this.setting.availableThemes;
        this.setting.getTheme().subscribe(val => {
      if(val == 'dark-theme'){
        console.log('dark-theme');
        this.theme_color = 'dark';
      }else if(val == 'light-theme'){
        this.theme_color = 'light';
      }
    });
  }

  ionViewDidLoad() {

  }
  setTheme(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Change Theme');
    alert.addInput({
      type: 'radio',
      label: 'Dark',
      value: 'dark-theme',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Light',
      value: 'light-theme'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data =>{
        this.setting.setTheme(data);
      }
    })
    alert.present();
  }


}
