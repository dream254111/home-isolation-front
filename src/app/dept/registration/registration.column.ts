import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";
import { Registration } from "./registration.model";

export class RegistrationColumn {
    listColumns: RegisterColumnItem[] = [
        {
            name: 'ID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        }, 
        {
            name: 'Ref ID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'คำนำหน้า',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ชื่อ-นามสกุล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เบอร์โทรศัพท์',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'Line ID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เวชระเบียน',
            listOfFilter: [
                { text: 'ตรวจสอบแล้ว', value: 'ตรวจสอบแล้ว' },
                { text: 'รอผลตรวจ', value: 'รอผลตรวจ' },
                { text: 'รอพบ HI', value: 'รอพบ HI' },
                { text: 'ติดต่อไม่ได้', value: 'ติดต่อไม่ได้' },
                { text: 'กำลังโทรติดต่อ', value: 'กำลังโทรติดต่อ' },
                { text: 'รอการตรวจสอบ', value: 'รอการตรวจสอบ' },
                { text: 'ไม่เข้าร่วม - ร่วมโครงการอื่น', value: 'ไม่เข้าร่วม - ร่วมโครงการอื่น' },
                { text: 'ไม่เข้าร่วม - รักษาที่ รพ.', value: 'ไม่เข้าร่วม - รักษาที่ รพ.' },
                { text: 'ไม่เข้าร่วม - ไม่มีผลตรวจ', value: 'ไม่เข้าร่วม - ไม่มีผลตรวจ' },
                { text: 'ไม่เข้าร่วม - อยู่นอก กทม.', value: 'ไม่เข้าร่วม - อยู่นอก กทม.' },
                { text: 'ไม่เข้าร่วม - ไม่ให้ข้อมูล', value: 'ไม่เข้าร่วม - ไม่ให้ข้อมูล' },
                { text: 'ไม่เข้าร่วม - หายแล้ว', value: 'ไม่เข้าร่วม - หายแล้ว' },
                { text: 'ชื่อซ้ำ', value: 'ชื่อซ้ำ' },
            ],
            filterFn: (list: string[], item: Registration) => list.some(name => item.STATUS_DISPLAY == name),
            filterMultiple: true,
            showFilter: true, 
            fixRight: false
        },
        {
            name: 'วันที่เข้าระบบ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ผู้ลงข้อมูล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'กาชาด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันแรกที่มีอาการ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันที่ตรวจพบเชื้อ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วิธีการตรวจ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'สถานที่ตรวจ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'หมายเหตุ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เลขบัตรประชาชน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เพศ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'อายุ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันเกิด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'น้ำหนัก',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'สถานภาพ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'โรคประจำตัว',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'สิทธิ์การรักษา',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'โรงพยาบาล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'โครงการที่เข้าร่วม',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ญาติสำหรับติดต่อฉุกเฉิน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เบอร์ฉุกเฉิน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เบอร์ฉุกเฉินสำรอง',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'บ้านเลขที่',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ซอย',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ถนน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'แขวง/ตำบล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เขต/อำเภอ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'จังหวัด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'รหัสไปรษณีย์',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'โทรศัพท์มือถือ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'รวมที่อยู่และเบอร์มือถือ',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันที่พบแพทย์ล่าสุด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'แพทย์:สีผู้ป่วย',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันพบพยาบาลล่าสุด',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'พยาบาล:สีผู้ป่วย',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ถ่ายบัตรประชาชน',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ผลตรวจ COVID',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ผู้ลงข้อมูล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'สถานะ office',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'CM Alert HI',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ลงชื่อ HI',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันที่อัพเดตข้อมูล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'HI',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'CM Alert CI',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ลงชื่อ CI',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'วันที่อัพเดตข้อมูล',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'CIO2',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'CI',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'เวชระเบียน:ต้องการนักจิตวิทยา',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'แพทย์:ต้องการนักจิตวิทยา',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'พยาบาล:ต้องการนักจิตวิทยา',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: 'ต้องการนักจิตวิทยา',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: false
        },
        {
            name: '',
            listOfFilter: [],
            filterFn: null,
            filterMultiple: false,
            showFilter: false, 
            fixRight: true
        },
    ]
}

interface RegisterColumnItem {
    name: string,
    showFilter: boolean,
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<Registration> | null;
    filterMultiple: boolean;
    fixRight: boolean;
}