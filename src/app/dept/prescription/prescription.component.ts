import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  data = [
    {
      preid: '15/6/2021',
      id: 1,
      refcombined: 3,
      preno: 3,
      alert: 'X',
    },
    {
      preid: '15/6/2021',
      id: 2,
      refcombined: 4,
      preno: 3,
      alert: 'B'
    },
    {
      preid: '15/6/2021',
      id: 3,
      refcombined: 5,
      preno: 3,
      alert: 'C'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
