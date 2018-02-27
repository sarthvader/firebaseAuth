import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userFirstName: String;
  userLastName: String;
  userEmail: String;
  userAge: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AngularFireAuth) {

    this.userEmail = this.auth.auth.currentUser.email;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    this.auth.auth.signOut;
    console.log(this.auth.auth.onAuthStateChanged);
    this.navCtrl.push('LoginPage');

  }
}
