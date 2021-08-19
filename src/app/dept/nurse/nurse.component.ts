import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Nurse } from './nurse.model';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {
  listData: Nurse[] = []

  constructor(public util: UtilService) { 
    var nurse1 = new Nurse(1)
    nurse1.ID = "PT0005"
    nurse1.DATE = new Date()
    nurse1.COLOR = "discharge"
    nurse1.RECORD = "no fever and symptom"
    nurse1.REMARK = "have Favi for 4 days"
    nurse1.PSY = "Yes"

    this.listData.push(nurse1)
  }

  ngOnInit(): void {
  }

}
