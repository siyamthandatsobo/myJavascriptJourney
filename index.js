const language ='Javascript';
let score = 10;
let length = 10;
let width = 5;
let area = length*width;
console.log(`The area of the rectangle is `+area)
let num1 = 10;
let num2 = 4;
let x =num1/num2;
let remainder = num1%num2;
console.log(remainder)
// 2.5

console.log(`${num1} / ${num2} is ${Math.floor(x)} remainder ${remainder}`)

///Datatypes challenge
//integer
let integer = 2;
let decimal = 2.5;
let string = 'Kingdom';
const array =['father','son','holyspirit'];
let object ={height:'50cm' ,race:'black',country:'south-africa', eyecolor:'brown'};

console.log(array)
console.log(object)
console.log(typeof(2))
console.log(typeof(2.5))
console.log(typeof('Kingdom'))
console.log(typeof['father','son','holyspirit'])
console.log(typeof{height:'50cm' ,race:'black',country:'south-africa', eyecolor:'brown'})
//object
let mixedArray =[1,"two",3,"four"]
console.log(typeof[1,"two",3,"four"])
let computer = null;
let laptop = undefined;
console.log(computer)
console.log(laptop)
console.log(`${num1} / ${num2} is ${Math.floor(x)} remainder ${remainder}`)

//functions
function euroconversion(){
    let Rands = 1000/19.76;
 console.log(`E`+Rands)
return euroconversion;
}
euroconversion()
function dollarconversion (){
    let Rands = 1000/18.52;
 console.log('$'+Rands)
return dollarconversion;
}
dollarconversion()
function poundconversion(){
    let Rands = 1000/22.68;
 console.log('P'+Rands)
return poundconversion;
}
poundconversion()

function taxcalc(){
let initialamount = 400;
let Vat = 15/100;
let finalamount = initialamount*Vat;
console.log(`The amount after tax is  R ${finalamount+initialamount}`)
return taxcalc;
}
taxcalc()

let Num1 = 8
let Num2 =20
let Num3 =14
function compare(){
    if (Num1<Num2){
        console.log(Num2)
    }
    else if (Num1>Num2){
        console.log(Num1)
    }
    else console.log(Num1)
    return compare
}
compare()

function oddnumber(){
    if (Num1%2 == 0){
        console.log('even number')
    }
    else if (Num1%2 > 0){
        console.log('odd number')
    }
    return oddnumber
}
oddnumber()
if  (Num1>Num2 && Num1>Num3){
    console.log(Num1)
}
else if (Num2>Num1 && Num2>Num3){
    console.log(Num2)
}
else if (Num3>Num2 && Num3>Num1)
console.log(Num3)
if (Num3<Num2 && Num2>Num1){
    console.log(Num3)
}
if (Num1<Num2 && Num1<Num3){
    console.log(Num1)
}