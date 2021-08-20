import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { CI } from './ci.model';

@Component({
  selector: 'app-ci',
  templateUrl: './ci.component.html',
  styleUrls: ['./ci.component.css']
})
export class CiComponent implements OnInit {
  listData: CI[] = []
  
  constructor(public util: UtilService) { 
    var ci1: CI = new CI(1);
    ci1.TITLE = "Mr."
    ci1.REFID = undefined
    ci1.NAME = "Chayapon Puakalong"
    ci1.MOBILE = "0814221628"
    ci1.LINE = "dream254111"
    ci1.STATUS = "verified"
    ci1.DATEIN = new Date()
    ci1.REGISTER = "Somchai Jaidee"
    ci1.KACHART = "LBH"
    ci1.DATESYMPTOM = new Date()
    ci1.DATEPOSITIVE = new Date()
    ci1.TESTING = "PCR"
    ci1.TESTINGLOCATION = "home"
    ci1.TESTINGREMARK = "everyone in the home are positive"
    ci1.THAIID = "1-2345-67890-12-3"
    ci1.GENDER = "male"
    ci1.AGE = "23 years 1 month 7 days"
    ci1.BIRTHDATE = new Date(1998, 6, 11)
    ci1.WEIGHT = 82.5
    ci1.MARRIAGE = "single"
    ci1.DISEASE = undefined
    ci1.HEALTH = "gold card"
    ci1.HEALTHHOSPITAL = "Siriraj"
    ci1.HEALTHPROJECT = undefined
    ci1.RELATIVE = "Thanapon Puakalong"
    ci1.RELATIVEMOBILE = "0811111111"
    ci1.RELATIVEMOBILE2 = "0922222222"
    ci1.HOMENO = "12/34"
    ci1.HOMESOI = "Na Phra"
    ci1.HOMEROAD = "Phuttamontol Sai 4"
    ci1.HOMESUBDISTRICT = "Talad Phlu"
    ci1.HOMEDISTRICT = "Thonburi"
    ci1.HOMEPROVINCE = "Bangkok"
    ci1.HOMEPOSTAL = "10120"
    ci1.MOBILETYPE = "Android"
    ci1.OFFICETHAIIDCOPY = "done"
    ci1.OFFICECOVIDTEST = "done"
    ci1.OFFICESTATUS = "unable to contact"
    ci1.HI = "Somying Jaidee"
    ci1.HIDATE = new Date()
    ci1.HISTATUS = "CI"
    ci1.CI = "Somjing Chingsha"
    ci1.CIDATE = new Date()
    ci1.CIO2 = "done"
    ci1.CISTATUS = "pending"
    ci1.PSY = "Yes"

    this.listData.push(ci1)
  }

  ngOnInit(): void {
  }

}
