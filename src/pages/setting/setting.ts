import { Component} from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { SettingService } from '../../providers/setting-service';
import { Storage } from '@ionic/storage';

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
  private currentTheme: any;

  constructor(private storage: Storage, private setting: SettingService, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.setting.getTheme().subscribe(val => {
      this.selected = val;
      storage.set('current-theme',val);
    });
    this.availableThemes = this.setting.availableThemes;
    this.setting.getTheme().subscribe(val => {
      if(val === 'dark-theme'){
        console.log('dark-theme');
        this.theme_color = 'dark';
      }else if(val === 'light-theme'){
        this.theme_color = 'light';
      }
    });  
  }

  ionViewDidLoad() {

  }
  setTheme(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Change Theme');
    if(this.selected === 'dark-theme'){
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
    }else{
      alert.addInput({
        type: 'radio',
        label: 'Dark',
        value: 'dark-theme'
      });
      alert.addInput({
        type: 'radio',
        label: 'Light',
        value: 'light-theme',
        checked: true
      });
    }
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
