export class Registration {
    get TITLE_DISPLAY() {
        switch(this.TITLE) {
            case 'mr': return 'นาย'
            case 'mrs': return 'นาง'
            case 'miss': return 'นางสาว'
            case 'other': return 'อื่นๆ'
            case 'novalue': return 'ไม่ระบุ'
            default: return 'error'
        }
    }

    constructor(
        public ID: number,
        public REFID?: number,
        public TITLE: string = 'novalue',
        public NAME?: string,
        public MOBILE?: string,
        public LINE?: string,
        public STATUS: string = 'verified',
        public DATEIN?: Date,
        public REGISTER?: string,
        public KACHART: string = 'redcross',
        public DATESYMPTOM?: Date,
        public DATEPOSITIVE?: Date,
        public TESTING: string = 'other',
        public TESTINGLOCATION?: string,
        public TESTINGREMARK?: string,
        public THAIID?: string,
        public GENDER: string = 'novalue',
        public AGE?: string,
        public BIRTHDATE?: Date,
        public WEIGHT?: number,
        public MARRIAGE: string = 'single',
        public DISEASE?: string,
        public HEALTH?: string,
        public HEALTHHOSPITAL?: string,
        public HEALTHPROJECT?: string,
        public RELATIVE?: string,
        public RELATIVEMOBILE?: string,
        public RELATIVEMOBILE2?: string,
        public HOMENO?: string,
        public HOMESOI?: string,
        public HOMEROAD?: string,
        public HOMESUBDISTRICT?: string,
        public HOMEDISTRICT?: string,
        public HOMEPROVINCE?: string,
        public HOMEPOSTAL?: string,
        public MOBILETYPE: string = 'android',
        public OFFICETHAIIDCOPY: string = 'notdone',
        public OFFICECOVIDTEST: string = 'notdone',
        public OFFICESTATUS?: string,
        public HI?: string,
        public HIDATE?: Date,
        public HISTATUS: string = 'hi',
        public CI?: string,
        public CIDATE?: Date,
        public CIO2?: string,
        public CISTATUS?: string,
        public PSY: boolean = false
    ) {}
}