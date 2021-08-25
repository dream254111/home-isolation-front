import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";
import { CI } from "./ci.model";

export class CiColumn {
    listColumn: CiColumnItem[] = [
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        },
        {
            name: '',
            width: '150px',
            fixRight: false,
            showFilter: false,
            filterFn: null,
            listOfFilter: [],
            filterMultiple: false
        }
    ]
}

interface CiColumnItem {
    name: string;
    width: string;
    fixRight: boolean;

    /* Filter Part */
    showFilter: boolean;
    filterFn: NzTableFilterFn<CI> | null;
    listOfFilter: NzTableFilterList;
    filterMultiple: boolean;
}