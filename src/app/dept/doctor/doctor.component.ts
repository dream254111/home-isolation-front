import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  data = [
    {
      datein: '15/6/2021',
      id: 1,
      refid: 0,
      refidbydr: 3,
      refcombined: 'X',
    },
    {
      datein: '15/6/2021',
      id: 2,
      refid: 1,
      refidbydr: 4,
      refcombined: 'B'
    },
    {
      datein: '15/6/2021',
      id: 3,
      refid: 1,
      refidbydr: 5,
      refcombined: 'C'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
