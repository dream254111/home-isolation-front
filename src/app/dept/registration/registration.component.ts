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
  
  constructor(public util: UtilService, private modal: NzModalService) { }

  ngOnInit(): void { }

  addData(content: TemplateRef<{}>) {
    this.current = new Registration(this.listData.length + 1)
    this.modal.create({
      nzTitle: 'เพิ่มข้อมูลเวชระเบียน',
      nzContent: content,
      nzClosable: false,
      nzCentered: true,
      nzWidth: 750,
      nzOnOk: () => Promise.resolve()
        .then(() => {
          this.listData.push(this.current)
          this.listData = [...this.listData]
        })  
        .catch(err => console.error(err))
    })
  }

  updateData(data: Registration, content: TemplateRef<{}>) {
    this.current = Object.assign(new Registration(-1), data)
    this.modal.create({
      nzTitle: 'แก้ไขข้อมูลเวชระเบียนของ' + data.NAME,
      nzContent: content,
      nzClosable: false,
      nzCentered: true,
      nzWidth: 750,
      nzOnOk: () => Promise.resolve()
        .then(() => {
          var index = this.listData.findIndex(data => data.ID == this.current.ID)
          this.listData[index] = this.current
          this.listData = [...this.listData]
        })  
        .catch(err => console.error(err))
    })

  }
}
