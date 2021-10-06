// 1
// let multiplicateur=5;
// for (let index = 0; index <=10; index++) {

//    console.log(`la multiplication de 
//    ${index} * ${multiplicateur} = ${(index*multiplicateur)}`);
       
// }

// 2
// let multiplicateur=5;
// for (let index = 0; index <=10; index+=2) {

//    console.log(`la multiplication de 
//    ${index} * ${multiplicateur} = ${(index*multiplicateur)}`);

//    }

// 3
// let nombre = 0;
// for (let index = 20; index > nombre; index--) {
//     if (index% 2 === 0) {
//         console.log("nombre paire: "+index);
//     }  
// }



// 4 faux

// let prenoms=["hilal","hussein","ayhan","heredia","jon","philippe","georg","wassim","genc","moh","zaf"];
// let longPrenomes=[];
// let petitPrenomes=[];


// prenoms.forEach(element => {
//     if (element.length>5) {
//         longPrenomes.push(element);
//         // console.log(`longPrenomes = ${longPrenomes}`);
//     }else{
//         petitPrenomes.push(element);
//         // console.log(`petit prenom = ${petitPrenomes}`);
//     }
// });
// console.log(`longPrenomes = ${longPrenomes}`);
// console.log(`petit prenom = ${petitPrenomes}`);

// console.log(longPrenomes);
// console.log(petitPrenomes);
// ou avec filter
// const result = prenoms.filter(prenom=>prenom.length>5);
// console.log(result);


// 5
// let sommes=[14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

// let grossesSommes=[];
// let petiteSommes=[];

// sommes.forEach(element => {
//     if (element>60) {
//         grossesSommes.push(element);
//     }else{
//         petiteSommes.push(element);
//     }
// });


// 6
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

// let typeString= donnees.filter(hilal=>hilal);
// let typeNumber= typeof Number;
// let typeObject= typeof Object;
// let typeAutre= undefined;

// console.log(typeString);

// donnees.forEach(element => {
// console.log(typeof donnees[element]);

// if (donnees[element]===typeof (String)) {
//     console.log(donnees[element]);
// }
// });



