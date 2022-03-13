import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  Id : any;
  name : any;
  firstName : any;
  lastName : any;
  dob : any;
  gender: any;
  age: any;
  telephone : any;
  address : any;

  constructor() { }

  ngOnInit() {
  }

  btnClicked(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response){
      return response.json()
    })
    .then((response) => {
      console.log(response)
      this.Id = response.id;
      this.name = response.name;
      this.firstName = response.name;
      this.lastName = response.name;
      this.dob = " 12/13/2022";
      this.gender = "Female";
      this.age = "66";
      this.telephone = response.phone;
      this.address = response.address.street +"  " + response.address.city;

    })

  }

}
