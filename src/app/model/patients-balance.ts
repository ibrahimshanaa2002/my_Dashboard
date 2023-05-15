import * as percs_gold from "./percs-gold.interface";

const patientBalanceList: Array<percs_gold.Patient> = [
    {
        title: "Encounters Balance (at time of broadcast)",
        value:  151736.73,
    },
    {
        title: "Cash (POA + Down Payments)",
        value:  763.55,
    },
    {
        title: "AutoPay Plans Secured",
        value:  655.70,
    },
    {
        title: "AutoPay Plans Settled",
        value:  78.12,
    },
    {
        title: "Patient Payment Collections",
        value: 0,
    },
    {
        title: "Amount Secured (Cash + AutoPay Plans Secured + Patient Payment Collections)",
        value:  1419.25,
    },
    {
        title: "% Total Secured/Encounters Balance",
        value: 0.94,
    },
    {
        title: "% Total Cash/Encounters Balance",
        value: 0.55,
    },
];
export const patientBalance: Array<percs_gold.IPERCSGold> = [
    {
        date: "01-11-0000",
        Patient_section: patientBalanceList
    }
];
