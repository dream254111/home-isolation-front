import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Office } from './office.model';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  listData: Office[] = []
  
  constructor(public util: UtilService) { 
    var office1: Office = new Office(1);
    office1.TITLE = "Mr."
    office1.REFID = undefined
    office1.NAME = "Chayapon Puakalong"
    office1.MOBILE = "0814221628"
    office1.LINE = "dream254111"
    office1.STATUS = "verified"
    office1.DATEIN = new Date()
    office1.REGISTER = "Somchai Jaidee"
    office1.KACHART = "LBH"
    office1.DATESYMPTOM = new Date()
    office1.DATEPOSITIVE = new Date()
    office1.TESTING = "PCR"
    office1.TESTINGLOCATION = "home"
    office1.TESTINGREMARK = "everyone in the home are positive"
    office1.THAIID = "1-2345-67890-12-3"
    office1.GENDER = "male"
    office1.AGE = "23 years 1 month 7 days"
    office1.BIRTHDATE = new Date(1998, 6, 11)
    office1.WEIGHT = 82.5
    office1.MARRIAGE = "single"
    office1.DISEASE = undefined
    office1.HEALTH = "gold card"
    office1.HEALTHHOSPITAL = "Siriraj"
    office1.HEALTHPROJECT = undefined
    office1.RELATIVE = "Thanapon Puakalong"
    office1.RELATIVEMOBILE = "0811111111"
    office1.RELATIVEMOBILE2 = "0922222222"
    office1.HOMENO = "12/34"
    office1.HOMESOI = "Na Phra"
    office1.HOMEROAD = "Phuttamontol Sai 4"
    office1.HOMESUBDISTRICT = "Talad Phlu"
    office1.HOMEDISTRICT = "Thonburi"
    office1.HOMEPROVINCE = "Bangkok"
    office1.HOMEPOSTAL = "10120"
    office1.MOBILETYPE = "Android"
    office1.OFFICETHAIIDCOPY = "done"
    office1.OFFICECOVIDTEST = "done"
    office1.OFFICESTATUS = "unable to contact"
    office1.HI = "Somying Jaidee"
    office1.HIDATE = new Date()
    office1.HISTATUS = "CI"
    office1.CI = "Somjing Chingsha"
    office1.CIDATE = new Date()
    office1.CIO2 = "done"
    office1.CISTATUS = "pending"
    office1.PSY = "Yes"

    this.listData.push(office1)
  }
  ngOnInit(): void {
  }

}
