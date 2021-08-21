import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UtilService } from 'src/app/services/util.service';
import { Registration } from './registration.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  listData: Registration[] = []

  current = new Registration(-1)
  
  constructor(public util: UtilService, private modal: NzModalService) { 
    var registration1: Registration = new Registration(1);
    registration1.TITLE = "Mr."
    registration1.REFID = undefined
    registration1.NAME = "Chayapon Puakalong"
    registration1.MOBILE = "0814221628"
    registration1.LINE = "dream254111"
    registration1.STATUS = "verified"
    registration1.DATEIN = new Date()
    registration1.REGISTER = "Somchai Jaidee"
    registration1.KACHART = "LBH"
    registration1.DATESYMPTOM = new Date()
    registration1.DATEPOSITIVE = new Date()
    registration1.TESTING = "PCR"
    registration1.TESTINGLOCATION = "home"
    registration1.TESTINGREMARK = "everyone in the home are positive"
    registration1.THAIID = "1-2345-67890-12-3"
    registration1.GENDER = "male"
    registration1.AGE = "23 years 1 month 7 days"
    registration1.BIRTHDATE = new Date(1998, 6, 11)
    registration1.WEIGHT = 82.5
    registration1.MARRIAGE = "single"
    registration1.DISEASE = undefined
    registration1.HEALTH = "gold card"
    registration1.HEALTHHOSPITAL = "Siriraj"
    registration1.HEALTHPROJECT = undefined
    registration1.RELATIVE = "Thanapon Puakalong"
    registration1.RELATIVEMOBILE = "0811111111"
    registration1.RELATIVEMOBILE2 = "0922222222"
    registration1.HOMENO = "12/34"
    registration1.HOMESOI = "Na Phra"
    registration1.HOMEROAD = "Phuttamontol Sai 4"
    registration1.HOMESUBDISTRICT = "Talad Phlu"
    registration1.HOMEDISTRICT = "Thonburi"
    registration1.HOMEPROVINCE = "Bangkok"
    registration1.HOMEPOSTAL = "10120"
    registration1.MOBILETYPE = "Android"
    registration1.OFFICETHAIIDCOPY = "done"
    registration1.OFFICECOVIDTEST = "done"
    registration1.OFFICESTATUS = "unable to contact"
    registration1.HI = "Somying Jaidee"
    registration1.HIDATE = new Date()
    registration1.HISTATUS = "CI"
    registration1.CI = "Somjing Chingsha"
    registration1.CIDATE = new Date()
    registration1.CIO2 = "done"
    registration1.CISTATUS = "pending"
    registration1.PSY = "Yes"

    this.listData.push(registration1)
  }

  ngOnInit(): void { }

  /* Modal Part */
  createModal(content: TemplateRef<{}>) {
    this.modal.create({
      nzTitle: 'แบบฟอร์มกรอกข้อมูล',
      nzContent: content,
      nzClosable: false,
      nzCentered: true,
      nzWidth: 750
    })
  }


  submitForm() {

  }

}
