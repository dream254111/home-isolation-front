import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Logistic } from './logistic.model';

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {
  listData: Logistic[] = []

  constructor(public util: UtilService) { 
    var logistic1 = new Logistic(1)
    logistic1.PRE_ID = 1
    logistic1.PAT_ID = "PT0005"
    logistic1.PRE_DATE = new Date()
    logistic1.PHA_ID = "PH0004"
    logistic1.PHA_DATE = new Date()
    logistic1.PHA_CONFIRM = "Confirmed with edited"
    logistic1.PHA_EDIT = "Off favi C"
    logistic1.LOG_ID = "PH0004"
    logistic1.LOG_STATUS = "Confirmed"
    logistic1.LOG_DATE = new Date()
    logistic1.LOG_REMARK = "delivered"

    this.listData.push(logistic1)
  }

  ngOnInit(): void {
  }

}
