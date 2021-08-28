import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { UtilService } from 'src/app/services/util.service';
import { DoctorRecord, Doctor, NurseRecord } from './doctor.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzTableFilterFn, NzTableFilterList } from 'ng-zorro-antd/table';
import { DoctorColumn } from './doctor.column';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  backupList: Doctor[] = []
  listData: Doctor[] = [
    new Doctor(new Date("2/8/2021"),1,1,1,1,"mr","สมชาย รักดี",
    undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
    [new DoctorRecord("1",new Date("2/8/2021"),"เหลือง"),new DoctorRecord("1",new Date("2/11/2021"),"เหลือง"),new DoctorRecord("1",new Date("2/11/2021"),"เขียว")],
    [new NurseRecord("1",new Date("2/8/2021"),"เหลือง","13/8/21 T36.2 P82 OS98  หายใจปกติ ไม่มีหอบเหนื่อย ไอเล็็กน้อย มีเสมหะเสมสีเหลือง ทานข้าวได้ปกติ รับรสได้น้อย"),new NurseRecord("1",new Date("2/10/2021"),"แดง","15/08/21 T 37, PR -, O2 sat 98/98 อาการทั่วไปปกติ ยังมีไอเล็กน้อย รับรสและกลิ่นได้ปกติ///13/8/21 T37.5 P98 OS97/-หายใจปกติ ไม่มีหอบเหนื่อย ไอเล็กน้อย ไม่ได้กลิ่น รับรสได้เล็กน้อย")],undefined),
    new Doctor(new Date("2/8/2021"),1,1,2,3,"miss","สมหญิง รักดี",
    undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
    [new DoctorRecord("1",new Date("2/8/2021"),"เหลือง")],[new NurseRecord("2",new Date("2/9/2021"))],undefined),
    new Doctor(new Date("2/8/2021"),1,1,3,4,"mr","สมศักด์ รักดี",
    undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
    [new DoctorRecord("1",new Date("2/8/2021"),"เหลือง")],[new NurseRecord("2",new Date("2/9/2021"))],undefined),
    new Doctor(new Date("2/8/2021"),1,1,4,5,"miss","สมปอง รักดี",
    undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
    [new DoctorRecord("1",new Date("2/7/2021"),"เหลือง")],[new NurseRecord("3",new Date("2/8/2021"))],undefined),
  ]
  current = new Doctor()
  listColumns = new DoctorColumn().listColumns

  nameSearch = ''
  
  constructor(public util: UtilService, private modal: NzModalService) { }

  ngOnInit(): void { }

  updateData(data: Doctor, content: TemplateRef<{}>) {
    this.current = Object.assign(new Doctor(), data)
    this.modal.create({
      nzTitle: 'ตรวจสอบข้อมูลสำหรับพยาบาลของ ' + data.NAME,
      nzContent: content,
      nzClosable: true,
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

  searchName() {
    if (this.nameSearch.length == 0 && this.backupList.length  != 0) {
      this.listData = [...this.backupList]
      this.backupList = []
    } else if (this.backupList.length == 0) {
      this.backupList = [...this.listData]
      this.listData = this.listData.filter(item => item.NAME?.includes(this.nameSearch))
      this.listData = [...this.listData]
    } else {
      this.listData = [...this.backupList]
      this.listData = this.listData.filter(item => item.NAME?.includes(this.nameSearch))
      this.listData = [...this.listData]
    }
  }

  onClearSearchClick() {
    this.nameSearch = ''
    this.searchName()
  }

}
