import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Medicine } from './medicine.model';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  listData: Medicine[] = []

  constructor(public util: UtilService) { 
    var medicine1 = new Medicine(1)
    medicine1.PRE_ID = 1
    medicine1.PAT_ID = "PT0005"
    medicine1.PRE_DATE = new Date()
    medicine1.PHA_ID = "PH0004"
    medicine1.PHA_DATE = new Date()
    medicine1.PHA_CONFIRM = "Confirmed with edited"
    medicine1.PHA_EDIT = "Off favi"

    this.listData.push(medicine1)
  }

  ngOnInit(): void {
  }

}
