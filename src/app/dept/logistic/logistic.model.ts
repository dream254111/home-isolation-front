export class Logistic {
    constructor(
        public PRE_ID: number,
        public PAT_ID?: string,
        public PAT_REF?: string,
        public DOC_ID?: string,
        public PRE_NO?: number,
        public PRE_DATE?: Date,
        public PRE_DRUG_FAVI125?: string,
        public PRE_DRUG_FAVI610?: string,
        public PRE_DRUG_DEXA?: string,
        public PRE_DRUG_FAH?: string,
        public PRE_DRUG_GEN?: string,
        public PRE_DEV_OXIMETER?: string,
        public PRE_DEV_THERMO?: string,
        public PRE_DEV_GLUMONITOR?: string,
        public PRE_DEV_GLUSTRIP?: string,
        public PRE_DEV_ATK?: string,
        public PRE_DEV_O2?: string,
        public PRE_DRUG_TOTAL?: string,
        public PRE_DEV_TOTAL?: string,
        public PHA_ID?: string,
        public PHA_DATE?: Date,
        public PHA_CONFIRM?: string,
        public PHA_EDIT?: string,
        public PHA_TOLOGIST?: string,
        public LOG_ID?: string,
        public LOG_STATUS?: string,
        public LOG_DATE?: Date,
        public LOG_REMARK?: string,
    ) {}
}