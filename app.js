"use strict"

//// dry (d'ont repeat yourself .... )
// console.log("lifting weights repetition 1 🏋️‍♀️ ")
// console.log("lifting weights repetition 2 🏋️‍♀️ ")
// console.log("lifting weights repetition 3 🏋️‍♀️ ")
// console.log("lifting weights repetition 4 🏋️‍♀️ ")
// console.log("lifting weights repetition 5 🏋️‍♀️ ")
// console.log("lifting weights repetition 6 🏋️‍♀️ ")
// console.log("lifting weights repetition 7 🏋️‍♀️ ")
// console.log("lifting weights repetition 8 🏋️‍♀️ ")
// console.log("lifting weights repetition 9 🏋️‍♀️ ")
// console.log("lifting weights repetition 10 🏋️‍♀️ ")


////////////////////////////// (for) //////////////////////////////////////////////

/// exemple 1 :: 
/// for (valeur-intial ; stop condition ; tzid) {

// } 



// for (let repetetion = 1 ; repetetion < 16 ; repetetion++){  // 2 ; 3
//   console.log(`lifting weights repetition ${repetetion} 🏋️‍♀️`)
// }

/// exemple 2 :: 
// const lucasArray = ["lucas" , "smith" , 2025-1995 , "teacher" , ["peter" , "mark" , "jhon"] , true , "mouna"   ]


// const types = [] ;

// for (let i = 0 ; i < lucasArray.length ; i++ ){
//     types.push(typeof(lucasArray[i]))
// }

// console.log(lucasArray)
// console.log(types)



//// exemple 3 :: 


// const years = [1991,2007,1969,2020] ; 
// const ages = [] ; 
// // ages.push(calcAge(years[0]))
// // ages.push(calcAge(years[1])) .......

// const calcAge = function (year) {   /// generick function
//   return 2025 - year 
// }


// for(let i = 0 ; i <  years.length ; i++) {
//     ///1
// //   ages.push(calcAge(years[i]))

//   ///2
// //    ages [i] = calcAge(years[i])

// }

// console.log(years ,ages)


//////// continue //////////////////////////////////

// const lucasArray = ["lucas" , "smith" , 2025-1995 , "teacher" , ["peter" , "mark" , "jhon"] , true , "mouna"   ]


// for (let i = 0 ; i < lucasArray.length ; i++){
//     if (typeof(lucasArray[i]) === "string") continue ;   //// bech yrjaa mena
//     console.log(lucasArray[i] , ":" , typeof(lucasArray[i]))
// }


/////////////////// break ////////////////////


// const lucasArray = ["lucas" , "smith" , 2025-1995 , "teacher" , ["peter" , "mark" , "jhon"] , true , "mouna"   ]


// for (let i = 0 ; i < lucasArray.length ; i++){
//     if (typeof(lucasArray[i]) === "number") break ;   //// bech yekef
//     console.log(lucasArray[i] , ":" , typeof(lucasArray[i]))
// }


// const numbers = [1,2,3,4,10]

// for (let a = 0 ; a < numbers.length ; a++) {

//     console.log(numbers[a])
// }

// for (let i = numbers.length-1 ; i>=0 ; i--  ){
//  console.log(numbers[i])
// }


///// loop inside other loop :: 



// for (let exercice = 1 ; exercice < 6 ; exercice++) {
//     console.log(`starting exercice ${exercice}`)
// for (let repetetion = 1 ; repetetion < 11 ; repetetion++){  
//   console.log(`lifting weights repetition ${repetetion} 🏋️‍♀️`)
// }

// }


////////// while loop ///////////////////// 

// let rep = 1 ;  ///11

// while (rep < 11){
// console.log(`lifting weights repetition ${rep} 🏋️‍♀️`)
// rep ++
// }


// let dice = Math.trunc((Math.random()*6)+1)  ;

// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`)
//     dice = Math.trunc((Math.random()*6)+1)
//     if (dice === 6 ){
//         console.log("win")
//     }
// }
