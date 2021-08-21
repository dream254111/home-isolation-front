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
    get STATUS_DISPLAY() {
        switch(this.STATUS) {
            case 'verified': return 'ตรวจสอบแล้ว'
            case 'pendingResult': return 'รอผลตรวจ'
            case 'pendingHi': return 'รอพบ HI'
            case 'noContact': return 'ติดต่อไม่ได้'
            case 'contacting': return 'กำลังโทรติดต่อ'
            case 'pendingVerify': return 'รอการตรวจสอบ'
            case 'anotherCampaign': return 'ไม่เข้าร่วม - ร่วมโครงการอื่น'
            case 'hospital': return 'ไม่เข้าร่วม - รักษาที่ รพ.'
            case 'noResult': return 'ไม่เข้าร่วม - ไม่มีผลตรวจ'
            case 'outside': return 'ไม่เข้าร่วม - อยู่นอก กทม.'
            case 'noData': return 'ไม่เข้าร่วม - ไม่ให้ข้อมูล'
            case 'normal': return 'ไม่เข้าร่วม - หายแล้ว'
            case 'dupName': return 'ชื่อซ้ำ'
            default: return 'error'
        }
    }
    get KACHART_DISPLAY() {
        switch(this.KACHART) {
            case 'redcross': return 'กาชาด'
            case 'lbh': return 'LBH'
            case 'other': return 'อื่นๆ'
            default: return 'error'
        }
    }
    get TESTING_DISPLAY() {
        switch(this.TESTING) {
            case 'pcr': return 'PCR'
            case 'atk': return 'ATK'
            case 'other': return 'อื่นๆ'
            default: return 'error'
        }
    }
    get GENDER_DISPLAY() {
        switch(this.GENDER) {
            case 'male': return 'ชาย'
            case 'female': return 'หญิง'
            case 'other': return 'อื่นๆ'
            case 'novalue': return 'ไม่ระบุ'
            default: return 'error'
        }
    }
    get MARRIAGE_DISPLAY() {
        switch(this.MARRIAGE) {
            case 'single': return 'โสด'
            case 'marriage': return 'แต่งงาน'
            case 'divorce': return 'หย่า'
            case 'widow': return 'หม้าย'
            case 'novalue': return 'ไม่ระบุ'
            default: return 'error'
        }
    }
    get MOBILETYPE_DISPLAY() {
        switch(this.MOBILETYPE) {
            case 'android': return 'Android'
            case 'ios': return 'iPhone'
            case 'other': return 'อื่นๆ'
            default: return 'error'
        }
    }
    get OFFICETHAIIDCOPY_DISPLAY() {
        switch(this.OFFICETHAIIDCOPY) {
            case 'notdone': return 'ยังไม่ได้ถ่าย'
            case 'done': return 'ถ่ายแล้ว'
            case 'problem': return 'ติดปัญหา'
            case 'lbh': return 'LBH'
            case 'noarchieve': return 'ไม่เก็บเอกสาร'
            case 'nocampaign': return 'ไม่เข้าร่วมโครงการ'
            default: return 'error'
        }
    }
    get OFFICECOVIDTEST_DISPLAY() {
        switch(this.OFFICECOVIDTEST) {
            case 'notdone': return 'ยังไม่ได้ถ่าย'
            case 'done': return 'ถ่ายแล้ว'
            case 'problem': return 'ติดปัญหา'
            case 'lbh': return 'LBH'
            case 'noarchieve': return 'ไม่เก็บเอกสาร'
            case 'nocampaign': return 'ไม่เข้าร่วมโครงการ'
            default: return 'error'
        }
    }
    get HISTATUS_DISPLAY() {
        switch(this.HISTATUS) {
            case 'contacting': return 'กำลังติดต่อ'
            case 'hi': return 'HI'
            case 'himprove': return 'ปรับปรุง HI'
            case 'ci': return 'CI'
            case 'hialert': return 'HI Alert'
            case 'hiout': return 'ออกจากระบบ'
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