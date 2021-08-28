import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";
import { Doctor } from "./doctor.model";

export class DoctorColumn {
    listColumns: DoctorColumnItem[] = [
        {
            name: 'วันที่เขาระบบ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'ID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'Ref ID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'Ref ID by Dr.',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'Ref Combined',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'คำนำหน้า',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'ชื่อ นามสกุล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'เบอร์โทรศัพท์',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'LINE ID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'ชื่อญาติติดต่อฉุกเฉิน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'เบอร์โทรฉุกเฉิน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'เวชระเบียน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'ชื่อแพทย์',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'วันพบแพทย์ล่าสุด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'สีผู้ป่วย',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'อายุ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'น้ำหนัก',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'โรคประจำตัว',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'RR วันแรกรับ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'O2sat วันแรกรับ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'แพทย์: อาการ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'แพทย์: ประวัติสั่งยาเดิม',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'แพทย์: หมายเหตุ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'ID พยาบาล/NU Code',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'วันพบพยาบาลล่าสุด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'พยาบาล: สีผู้ป่วย',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'พยาบาล: อาการ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: 'แพทย์: ต้องการนักจิตวิทยา',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false,
            nzWidth: "150px"
        },
        {
            name: '',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: true,
            nzWidth: "80px"
        },
    ]
}

interface DoctorColumnItem {
    name: string,
    showFilter: boolean,
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<Doctor> | null;
    filterMultiple: boolean;
    fixRight: boolean;
    nzWidth: string;
}