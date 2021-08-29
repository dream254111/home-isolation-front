import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UtilService } from 'src/app/services/util.service';
import { Registration } from './registration.model';
import { RegistrationColumn } from './registration.column';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  backupList: Registration[] = []
  listData: Registration[] = [
    new Registration(1,0,"mr","สมชาย รักดี"),
    new Registration(2,0,"miss","สมหญิง รักดี"),
    new Registration(3,0,"mr","สมศักด์ รักดี"),
    new Registration(4,0,"miss","สมปอง รักดี"),
  ]
  current = new Registration(-1)
  listColumns = new RegistrationColumn().listColumns

  nameSearch = ''
  
  constructor(
    public util: UtilService, 
    private modal: NzModalService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(environment.registrationURL).subscribe(data => console.log(data))
  }

  addData(content: TemplateRef<{}>) {
    this.current = new Registration(this.listData.length + 1)
    this.modal.create({
      nzTitle: 'เพิ่มข้อมูลเวชระเบียน',
      nzContent: content,
      nzClosable: true,
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
      nzTitle: 'แก้ไขข้อมูลเวชระเบียนของ ' + data.NAME,
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
