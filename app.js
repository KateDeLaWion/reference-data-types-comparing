// Reference data types are arrays , objects and functions in JavaScript

// Objects and Functions--------------------------------
// variable inside the function is in reference object type but if the input is primitive type.
// To output the right calcalation result, 2 ways,  
// 1) console.log(function(input));  as opposed to using console.log(variableInsideFunction)
// 2) change the input to object 

// Reference and primitive type discrepancy example: 
let number = 10;
function increase(number){
       number++;  // variable is a reference object in function and stay inside the scope of function
}
increase(number);
console.log(number);  // output is still 10 because number inside, frst number inside the scope of function
                    // cannot be read from outside without using return. 
                     //  second,  number inside the function, although stores 11 has reference type address 
                     //  different from the address of the number from let number =10;  
                     // so the change won't populate to both number variables                    


// To output the right calcalation result, 2 ways,  
// 1) use return and console.log(function(input));   as opposed to using console.log(variableInsideFunction)
// let number = 10;
// function increase(number){
//        number++;  // variable is a reference object in function and stay inside the scope of function
//        return number;
// }
// console.log(increase(number));  // output is still 10 because number inside, frst number inside the scope of function



// To output the right calcalation result, 2 ways,  
// 2) change the input to object 
// let number = { value: 10};
// function increase(number){
//     number.value++;
// }
// increase(number);
// console.log(number);


// let obj = { value: 10};
// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj);





// Arrays----------------------
// let c = [1,2];
// let d = c
// console.log(d);
// d = [3,4,5]; // d pointer replaced c address with new address of [3,4,5]
// console.log(d);
// console.log(c);
// d.push(20);
// c.push(10);

// // now c and d do not affect each other 
// console.log(d);
// console.log(c);


// let c = [1,2];
// let d = c;
// // they have type of addresses and same value in the address number
// console.log(`c === d ${c === d}`);
// console.log(`c == d ${c == d}`);


// let c = [1,2];
// let d = [1,2];
// // c and d will store 2 different addresses  
// // Despite 2 arrays look the same, they are at two different addresses
// console.log(`c === d ${c === d}`);
// console.log(`c == d ${c == d}`);



// Arrays and Functions------------------------------
// let c = [1,2];
// console.log(`c = ${c}`);
// add(c, 3); // passing in (arrayAddress eg 0x01 , number)
// console.log(`c = ${c}`);
// function add(array, element){ // passing in (arrayAddress eg 0x01, number)
//     array.push(element);
// }


// let c = [1,2];
// console.log(`c = ${c}`);
// add(c, 3); // passing in (arrayAddress eg 0x01 , number)
// console.log(`c = ${c}`);
// function add(array, element){ // passing in (arrayAddress eg 0x01 , number)
//     array = [element]; // array created and copied a new memory therefore c would not change
// }
















