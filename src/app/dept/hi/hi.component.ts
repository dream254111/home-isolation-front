import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { HI } from './hi.model';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  listData: HI[] = []
  
  constructor(public util: UtilService) { 
    var hi1: HI = new HI(1);
    hi1.TITLE = "Mr."
    hi1.REFID = undefined
    hi1.NAME = "Chayapon Puakalong"
    hi1.MOBILE = "0814221628"
    hi1.LINE = "dream254111"
    hi1.STATUS = "verified"
    hi1.DATEIN = new Date()
    hi1.REGISTER = "Somchai Jaidee"
    hi1.KACHART = "LBH"
    hi1.DATESYMPTOM = new Date()
    hi1.DATEPOSITIVE = new Date()
    hi1.TESTING = "PCR"
    hi1.TESTINGLOCATION = "home"
    hi1.TESTINGREMARK = "everyone in the home are positive"
    hi1.THAIID = "1-2345-67890-12-3"
    hi1.GENDER = "male"
    hi1.AGE = "23 years 1 month 7 days"
    hi1.BIRTHDATE = new Date(1998, 6, 11)
    hi1.WEIGHT = 82.5
    hi1.MARRIAGE = "single"
    hi1.DISEASE = undefined
    hi1.HEALTH = "gold card"
    hi1.HEALTHHOSPITAL = "Siriraj"
    hi1.HEALTHPROJECT = undefined
    hi1.RELATIVE = "Thanapon Puakalong"
    hi1.RELATIVEMOBILE = "0811111111"
    hi1.RELATIVEMOBILE2 = "0922222222"
    hi1.HOMENO = "12/34"
    hi1.HOMESOI = "Na Phra"
    hi1.HOMEROAD = "Phuttamontol Sai 4"
    hi1.HOMESUBDISTRICT = "Talad Phlu"
    hi1.HOMEDISTRICT = "Thonburi"
    hi1.HOMEPROVINCE = "Bangkok"
    hi1.HOMEPOSTAL = "10120"
    hi1.MOBILETYPE = "Android"
    hi1.OFFICETHAIIDCOPY = "done"
    hi1.OFFICECOVIDTEST = "done"
    hi1.OFFICESTATUS = "unable to contact"
    hi1.HI = "Somying Jaidee"
    hi1.HIDATE = new Date()
    hi1.HISTATUS = "CI"
    hi1.CI = "Somjing Chingsha"
    hi1.CIDATE = new Date()
    hi1.CIO2 = "done"
    hi1.CISTATUS = "pending"
    hi1.PSY = "Yes"

    this.listData.push(hi1)
  }

  ngOnInit(): void {
  }

}
