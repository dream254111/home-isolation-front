import { NzTableFilterFn, NzTableFilterList, NzTableSortFn } from "ng-zorro-antd/table";
import { Logistic } from "./logistic.model";

export class LogisitcColumn {
    listColumn: LogisticColumnItem[] = [
        {
            name: 'เลขที่ใบสั่งยา',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'ID',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'Ref Combined',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'สั่งยาครั้งที่',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'CM Alert โลจิสติกส์',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'คำนำหน้า',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'ชื่อ',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'ที่อยู่',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'เบอร์โทรศัพท์',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'LINE ID',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'ชื่อญาติติดต่อฉุกเฉิน',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'เบอร์โทรฉุกเฉิน',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'ชื่อแพทย์',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'วันที่สั่ง',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'สีผู้ป่วย',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'สรุปยา',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'สรุปอุปกรณ์',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'ID เภสัช',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'วันเวลาที่ confirm',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'เภสัช Confirm/แก้ไข',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'เภสัช รายการแก้ไข',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'เภสัช หมายเหตุ',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'เภสัช to โลจิสติกส์',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'สถานะการรับยาและอุปกรณ์',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'โลจิสติกส์ หมายเหตุ',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'วันเวลาที่ confirm สถานะ',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: 'CM Confirm จ่ายยา',
            nzWidth: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            nzWidth: '150px',
            fixRight: true,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        }
    ]
}

interface LogisticColumnItem {
    name: string;
    nzWidth: string;
    fixRight: boolean;

    /* Filter Part */
    showFilter: boolean;
    filterFn: NzTableFilterFn<Logistic> | null;
    listOfFilter: NzTableFilterList;
    filterMultiple: boolean;
}