import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userName: string;
  password: string;

  constructor(private router: Router) {}

  btnClicked(){
    if(this.userName==null || this.password==null){
      alert('values cannot be null');
    }
    else if(this.password.length <6){
      alert('password should have more than 6 characters');
    }
    else{
      this.router.navigate(['/welcome-page']);

    }

  }

}
