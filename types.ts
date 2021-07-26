//data types

let myString:string;
myString = "hello world";
myString = 'hello'+''+'world'
let stringSlice = 'hello'.slice(0,3)
let myVar :any = 5;
let myNum:number = 12;
let myBoolean:boolean = true;
let hexNum:number = 0xf00d;

//arrays 

let strArr :string[] = ['hello', 'world', 'nabeel']
let numArr:number[] = [1,2,3]
let boolArr:boolean[] = [true, false, true]

//other way of define array 
let strArray :Array<string>
let numArray:Array<number>
let boolArray:Array<boolean>

//tuple is array with define number of elements 
let strNumTuple:[string, number] = ['nabeel' ,3]
let exp :[string] = ['one']

//void 
let myVoid:void = null;

//undefined
let myundefined:undefined = undefined
let myundefined2:undefined = null

//null
let myNull:null = null
let myNull2:null = undefined

//enums
enum ManufacturerMake{TESLA, AUDI, MERCEDES, VOLVO, BMW}
const myCar = {
    year : 2021,
    make:ManufacturerMake.AUDI
}

console.log(myCar.make)

//Objects

let person = {
    name : 'nabeel', 
    age : 36
}

//person.email //doesnt exist 

type stringOrNum = string | number;
let yearr : stringOrNum; 
yearr = 2021
yearr = '2021'

//generic type
function doSomething2<T>(arg:T) : T{
    return arg 
}

//doSomething2(2)
doSomething2<string>('wow')

//more example 
interface book<T>{
    id:number,
    name:string, 
    data: T
}

const aBook : book <String> = {
    id: 1,
    name: 'Tilte 1',
    data : "more data here"
}

const bBook : book <String[]> = {
    id: 2,
    name: 'Tilte 2',
    data : ["Review 1","Review 2"]
}

