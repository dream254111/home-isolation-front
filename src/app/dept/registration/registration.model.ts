export class Registration {
    // get TITLE_DISPLAY() {
    //     switch(this.TITLE) {
    //         case 'mr': return 'นาย'
    //         case 'mrs': return 'นาง'
    //         case 'miss': return 'นางสาว'
    //         case 'other': return 'อื่นๆ'
    //         case 'novalue': return 'ไม่ระบุ'
    //         default: return 'error'
    //     }
    // }
    // get STATUS_DISPLAY() {
    //     switch(this.STATUS) {
    //         case 'verified': return 'ตรวจสอบแล้ว'
    //         case 'pendingResult': return 'รอผลตรวจ'
    //         case 'pendingHi': return 'รอพบ HI'
    //         case 'noContact': return 'ติดต่อไม่ได้'
    //         case 'contacting': return 'กำลังโทรติดต่อ'
    //         case 'pendingVerify': return 'รอการตรวจสอบ'
    //         case 'anotherCampaign': return 'ไม่เข้าร่วม - ร่วมโครงการอื่น'
    //         case 'hospital': return 'ไม่เข้าร่วม - รักษาที่ รพ.'
    //         case 'noResult': return 'ไม่เข้าร่วม - ไม่มีผลตรวจ'
    //         case 'outside': return 'ไม่เข้าร่วม - อยู่นอก กทม.'
    //         case 'noData': return 'ไม่เข้าร่วม - ไม่ให้ข้อมูล'
    //         case 'normal': return 'ไม่เข้าร่วม - หายแล้ว'
    //         case 'dupName': return 'ชื่อซ้ำ'
    //         default: return 'error'
    //     }
    // }
    // get KACHART_DISPLAY() {
    //     switch(this.KACHART) {
    //         case 'redcross': return 'กาชาด'
    //         case 'lbh': return 'LBH'
    //         case 'other': return 'อื่นๆ'
    //         default: return 'error'
    //     }
    // }
    // get TESTING_DISPLAY() {
    //     switch(this.TESTING) {
    //         case 'pcr': return 'PCR'
    //         case 'atk': return 'ATK'
    //         case 'other': return 'อื่นๆ'
    //         default: return 'error'
    //     }
    // }
    // get GENDER_DISPLAY() {
    //     switch(this.GENDER) {
    //         case 'male': return 'ชาย'
    //         case 'female': return 'หญิง'
    //         case 'other': return 'อื่นๆ'
    //         case 'novalue': return 'ไม่ระบุ'
    //         default: return 'error'
    //     }
    // }
    // get MARRIAGE_DISPLAY() {
    //     switch(this.MARRIAGE) {
    //         case 'single': return 'โสด'
    //         case 'marriage': return 'แต่งงาน'
    //         case 'divorce': return 'หย่า'
    //         case 'widow': return 'หม้าย'
    //         case 'novalue': return 'ไม่ระบุ'
    //         default: return 'error'
    //     }
    // }
    // get MOBILETYPE_DISPLAY() {
    //     switch(this.MOBILETYPE) {
    //         case 'android': return 'Android'
    //         case 'ios': return 'iPhone'
    //         case 'other': return 'อื่นๆ'
    //         default: return 'error'
    //     }
    // }
    // get OFFICETHAIIDCOPY_DISPLAY() {
    //     switch(this.OFFICETHAIIDCOPY) {
    //         case 'notdone': return 'ยังไม่ได้ถ่าย'
    //         case 'done': return 'ถ่ายแล้ว'
    //         case 'problem': return 'ติดปัญหา'
    //         case 'lbh': return 'LBH'
    //         case 'noarchieve': return 'ไม่เก็บเอกสาร'
    //         case 'nocampaign': return 'ไม่เข้าร่วมโครงการ'
    //         default: return 'error'
    //     }
    // }
    // get OFFICECOVIDTEST_DISPLAY() {
    //     switch(this.OFFICECOVIDTEST) {
    //         case 'notdone': return 'ยังไม่ได้ถ่าย'
    //         case 'done': return 'ถ่ายแล้ว'
    //         case 'problem': return 'ติดปัญหา'
    //         case 'lbh': return 'LBH'
    //         case 'noarchieve': return 'ไม่เก็บเอกสาร'
    //         case 'nocampaign': return 'ไม่เข้าร่วมโครงการ'
    //         default: return 'error'
    //     }
    // }
    // get HISTATUS_DISPLAY() {
    //     switch(this.HISTATUS) {
    //         case 'contacting': return 'กำลังติดต่อ'
    //         case 'hi': return 'HI'
    //         case 'himprove': return 'ปรับปรุง HI'
    //         case 'ci': return 'CI'
    //         case 'hialert': return 'HI Alert'
    //         case 'hiout': return 'ออกจากระบบ'
    //         default: return 'error'
    //     }
    // }

    constructor(
        public ADDRESS_TEL: string = '',
        public CI_ID: string = '',
        public CI_NAME: string = '',
        public DOC_DATE: string = '',
        public DOC_PAT_STATUS: string = '',
        public DOC_REQ_PSY: string = '',
        public HI_ID: string = '',
        public HI_NAME: string = '',
        public MED_REGSTATUS_DESC: string = '',
        public MED_REGSTATUS_ID: string = '',
        public MED_REG_ID: string = '',
        public MED_REG_NAME: string = '',
        public NUR_DATE: string = '',
        public NUR_PAT_STATUS: string = '',
        public NUR_REQ_PSY: string = '',
        public PAT_AGE: string = '',
        public PAT_BIRTHDATE: string = '',
        public PAT_CIDATE: string = '',
        public PAT_CIO2: string = '',
        public PAT_CISTATUS_DESC: string = '',
        public PAT_CISTATUS_ID: string = '',
        public PAT_CRE_BY: string = '',
        public PAT_CRE_DATE: string = '',
        public PAT_DATEIN: string = '',
        public PAT_DATEPOSITIVE: string = '',
        public PAT_DATESYMPTOM: string = '',
        public PAT_DISEASE: string = '',
        public PAT_GENDER_DESC: string = '',
        public PAT_GENDER_ID: string = '',
        public PAT_HEALTH: string = '',
        public PAT_HEALTHHOSPITAL: string = '',
        public PAT_HEALTHPROJECT: string = '',
        public PAT_HIDATE: string = '',
        public PAT_HISTATUS_DESC: string = '',
        public PAT_HISTATUS_ID: string = '',
        public PAT_HOMEDISTRICT: string = '',
        public PAT_HOMENO: string = '',
        public PAT_HOMEPOSTAL: string = '',
        public PAT_HOMEPROVINCE: string = '',
        public PAT_HOMEROAD: string = '',
        public PAT_HOMESOI: string = '',
        public PAT_HOMESUBDISTRICT: string = '',
        public PAT_ID: string = '',
        public PAT_KACHART_DESC: string = '',
        public PAT_KACHART_ID: string = '',
        public PAT_LINE: string = '',
        public PAT_MARRIAGE_DESC: string = '',
        public PAT_MARRIAGE_ID: string = '',
        public PAT_MOBILE: string = '',
        public PAT_MOBILETYPE: string = '',
        public PAT_NAME: string = '',
        public PAT_OFFICECOVIDTEST: string = '',
        public PAT_OFFICECOVIDTEST_ID: string = '',
        public PAT_OFFICESTATUS_DESC: string = '',
        public PAT_OFFICESTATUS_ID: string = '',
        public PAT_OFFICETHAIIDCOPY: string = '',
        public PAT_OFFICETHAIIDCOPY_ID: string = '',
        public PAT_OFFICE_ID: string = '',
        public PAT_OFFICE_NAME: string = '',
        public PAT_PSY: string = '',
        public PAT_REFID: string = '',
        public PAT_RELATIVE: string = '',
        public PAT_RELATIVEMOBILE: string = '',
        public PAT_RELATIVEMOBILE2: string = '',
        public PAT_REQ_PSY: string = '',
        public PAT_TESTINGLOCATION: string = '',
        public PAT_TESTINGREMARK: string = '',
        public PAT_TESTING_DESC: string = '',
        public PAT_TESTING_ID: string = '',
        public PAT_THAIID: string = '',
        public PAT_TITLE: string = '',
        public PAT_UPD_BY: string = '',
        public PAT_UPD_DATE: string = '',
        public PAT_WEIGHT: string = ''
    ) {}
}