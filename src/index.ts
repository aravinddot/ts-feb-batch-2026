


// number

// let value: number = 10

// value = 20

// console.log(value);


// string

// let value: string = "automation"

// value = "playwright"

// boolean

// let value: boolean = true

// value = false

// undefined
// let value: undefined = undefined
// // null
// let value2 : null = null


// any - no type check - not recommended

// let value: any = 10

// value = "automation"

// value = true

// value = []

// value = {}


// unknown - checks type

// let value: unknown = 10

// value = "automtion"

// console.log(value - 10);


// array


// const arr: string[] = ["playwright", "cypress", "webdriver", "testcafe"]

// const num: number[] = [2,3,4,5,6]

// const arr1:(string | number | boolean | (string | number)[])[] = 

// ["playwright", 5, true,"cypress", 2020, false, "testcafe", 2021, ["microsoft", 2020] ]




// object

// const obj: {name: string, age: number, moreInfo: {ownedBy: string, year?: number}} = {
//     name: "Playwright",
//     age: 5,
//     moreInfo: {
//         ownedBy: "microsoft",
//     }
// }


// function


// function print(): number[] {
//   return []
    
// }


// tuple

// type headerType = [string, number, string, string, string]

// const header:headerType  = ["NO", 23, "Address", "city", "state"]


// type valuee = string | number

// const val: valuee = 22



// type


// type ValueType = string


// const value: ValueType = 23


//union type


// type value = string | number


// const automation: value = 5


// type status = "aravind" | "failure" | "pending"

// const value: status = "aravind"




// intersection type

// type automation1 = {name: string}

// type automation2 = {age: number}

// type finalType = automation1 & automation2

// const value: finalType = {
//     name: "playwright",
//     age: 5
// }


//   interface value {
//      readonly name: string;
//     age: number;
//     ownedBy: string;
//     year?: number
  
//   } 


//   const person: value = {
//      name: "playwright",
//     age: 5,
//     ownedBy: "microsoft",
//     year: 2020
//   }

//   person.name = "cypress"

// console.log(person);

// constant 
// enum tableHeader {
//     Home =  "HomePage",
//     Product = "ProductPage",
//     Login = "LoginPage",
//     SignIn = "SignInPage"
// }

// // fetch values from UI
// const arr = ["HomePage", "ProductPage", "LoginPage", "SignInPage"]


// for(const value of arr) {

//     if(value === tableHeader.Product){
//         console.log("click product page");// playwright code
//     } 

//     // if(value === tableHeader.Home){
//     //     console.log("click home page");// playwright code
//     // } 
    
// }


