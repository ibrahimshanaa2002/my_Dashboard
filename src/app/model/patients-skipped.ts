import * as percs_gold from "./percs-gold.interface";

const patientSkippedsList: Array<percs_gold.Patient> = [
    {
        title: "Patients skipped",
        value: 14,
    },
    {
        title: "Patients skipped due to Bad Debt",
        value: 22,
    },
    {
        title: "Patients skipped due to Invalid Caller Id",
        value: 0,
    },
    {
        title: "Encounters skipped",
        value: 23,
    },
    {
        title: "Encounters skipped due to Bad Debt",
        value: 41,
    },
    {
        title: "Encounters Balance skipped - Other",
        value: 52.72,
    },
    {
        title: "Encounters Balance skipped - Bad Debt",
        value: 10930.05,
    },
];
export const patientSkipped: Array<percs_gold.IPERCSGold> = [
    {
        date: "01-11-0000",
        Patient_section: patientSkippedsList
    }
];
