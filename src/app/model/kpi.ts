// import { Ikpi } from "./kpi.interface"
// export let kpiList: Ikpi[];
// kpiList = new Array<Ikpi>;
// let kpi = new Ikpi("../assets/img/growth.png",1449.89,'Immediate payment');
// kpi.mpracc = 54;
// kpiList.push(kpi);

// kpiList = [
// {
//     icon: "../assets/img/growth.png";
//     value: 1449.89,
//     subtitle: 'Immediate payment',
//     useracc: 1050,
//     userapp: 1000,
//     mpracc: 22,
//     mprapp: 23
//   },
//   {
//     icon: '../assets/img/user.png',
//     value: -2475.16,
//     subtitle: 'Auto Payment Plans',
//     useracc: 1050,
//     userapp: 3000,
//     mpracc: 322,
//     mprapp: 100
//   },
//   {
//     icon: '../assets/img/product-return.png',
//     value: 1.49,
//     subtitle: 'Total',
//     total1: 0.94,
//     total2: 0.55,


//   },
//   {
//     icon: '../assets/img/profits.png',
//     value: '3.23%',
//     subtitle: 'Response rate',

//   }
// ];
import { Ikpi } from "./kpi.interface"
export const kpiData:Ikpi[]=[

    { icon:"../assets/img/growth.png" ,
        value:1449.89,
        subtitle:'Immediate payment',
        useracc: 11,
        userapp: 22,
        mpracc: 333,
        total1: 44,
        total2:55,
        mprapp:66,


    },
    { icon:'../assets/img/user.png',
        value:-2475.16,
        subtitle:'Auto Payment Plans',
        useracc: 1050,
        userapp: 3000,
        mpracc: 322,

        total1: 0,
        total2:0,
        mprapp:100,


    },
    { icon:"../assets/img/growth.png" ,
        value:1.49,
        subtitle:'% Amount Secured',
        useracc: 11,
        userapp: 22,
        mpracc: 333,
        total1: 44,
        total2:55,
        mprapp:66,

    },
    { icon:"../assets/img/growth.png" ,
        value:3.23,
        subtitle:'Response rate',
        useracc: 11,
        userapp: 22,
        mpracc: 333,
        total1: 44,
        total2:55,
        mprapp:66,


    }
];
