import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Custom Import */
import { RouterModule, Routes } from '@angular/router';

/* Component Part */
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './dept/registration/registration.component';
import { DoctorComponent } from './dept/doctor/doctor.component';
import { MedicineComponent } from './dept/medicine/medicine.component';
import { NurseComponent } from './dept/nurse/nurse.component';
import { LogisticComponent } from './dept/logistic/logistic.component';
import { HiComponent } from './dept/hi/hi.component';
import { CiComponent } from './dept/ci/ci.component';
import { CmComponent } from './dept/cm/cm.component';
import { OfficeComponent } from './dept/office/office.component';

/* NgZorro Part */
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

/* NgIcon Part */
import { MailOutline } from '@ant-design/icons-angular/icons';
import { AppstoreOutline } from '@ant-design/icons-angular/icons';
import { SettingOutline } from '@ant-design/icons-angular/icons';
import { PlusOutline } from '@ant-design/icons-angular/icons';
import { SolutionOutline } from '@ant-design/icons-angular/icons';
import { FileDoneOutline } from '@ant-design/icons-angular/icons';
import { PrescriptionComponent } from './dept/prescription/prescription.component';
import { LoginComponent } from './authen/login/login.component';
import { SummaryComponent } from './dept/summary/summary.component';

const icons = [
  MailOutline, 
  AppstoreOutline, 
  SettingOutline,
  PlusOutline,
  SolutionOutline,
  FileDoneOutline
];

/* Router Part */
const appRouter: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'pharmacist', component: MedicineComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'logistic', component: LogisticComponent },
  { path: 'home-isolation', component: HiComponent },
  { path: 'community-isolation', component: CiComponent },
  { path: 'cm', component: CmComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'summarize', component: SummaryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
]

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,

    /* Component Part */
    NavigationComponent,
    RegistrationComponent,
    DoctorComponent,
    MedicineComponent,
    NurseComponent,
    LogisticComponent,
    HiComponent,
    CiComponent,
    CmComponent,
    OfficeComponent,
    PrescriptionComponent,
    LoginComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    /* Custom Import */
    RouterModule.forRoot(appRouter),

    /* NgZorro Part */
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzTableModule,
    NzModalModule,
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzTimelineModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzTabsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
