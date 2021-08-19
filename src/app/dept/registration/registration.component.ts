import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data = [
    {
      id: 1,
      refId: 0,
      prefix: 'Mr.',
      fullname: 'Chayapon Puakalong',
      telno: '',
      line: '',
      registration: '',
      accessdt: '',

    },
    {
      id: 2,
      refid: 1,
      prefix: 'Mr.',
      fullname: 'Thanapon Puakalong'
    },
    {
      id: 3,
      refid: 1,
      prefix: 'Mr.',
      fullname: 'Palapon Puakalong'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
