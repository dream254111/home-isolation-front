export class Doctor {
    constructor(
        public PAT_ID: number,
        public DOC_NO?: number,
        public DOC_Name?: string,
        public DOC_DATE?: Date,
        public DOC_REF?: number,
        public DOC_COLOR?: string,
        public DOC_RR?: string,
        public DOC_O2SAT?: string,
        public DOC_RECORD?: string,
        public DOC_HISTORY?: string,
        public DOC_REMARK?: string,
        public DOC_PSY?: string
    ){}
}