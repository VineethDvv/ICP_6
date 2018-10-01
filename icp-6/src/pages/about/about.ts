import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public alertCrtl: AlertController) {

  }
  password: String
  cpassword: String

  Signup(){
  
  if(this.password == this.cpassword){
       
      var alert = this.alertCrtl.create({
        title: "Registration Successfull!",
        buttons:['ok']
      });
      alert.present();
      }
      else{
      var alert = this.alertCrtl.create({
        title: "Password mismatched, please enter again",
        buttons:['ok']
      });
      alert.present();
      }
      
      }
  
  
  }
