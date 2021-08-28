export class Doctor {
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

    get DOCTOR_LATEST() {
        return this.DOCTOR[this.DOCTOR.length-1];
    }

    get NURSE_LATEST() {
        return this.NURSE[this.NURSE.length-1];
    }

    constructor(
        public DATEIN?: Date,
        public ID?: number,
        public REF_ID?: number,
        public DOC_REF?: number,
        public REFCOMBINED?: number,
        public TITLE?: string,
        public NAME?: string,
        public MOBILE?: string,
        public LINE?: string,
        public RELATIVE?: string,
        public RELATIVE_MOBILE?: string,
        public STATUS?: string,
        public AGE?: number,
        public WEIGHT?: number,
        public DISEASE?: string,
        public DOCTOR: DoctorRecord[] = [],
        public NURSE: NurseRecord[] = [],
        public DOC_PSY?: string
    ){}
}

export class DoctorRecord {
    constructor(
        public DOCTOR?: string,
        public DOCTOR_DATE?: Date,
        public DOCTOR_COLOR?: string,
        public DOCTOR_RR?: string,
        public DOCTOR_O2?: string,
        public DOCTOR_RECORD?: string,
        public DOCTOR_HISTORY?: string,
        public DOCTOR_REMARK?: string,
    ) {}
}

export class NurseRecord {
    constructor(
        public NURSE?: string,
        public NURSE_DATE?: Date,
        public NURSE_COLOR?: string,
        public NURSE_RECORD?: string,
        public NURSE_NOTE?: string,
    ) {}
}