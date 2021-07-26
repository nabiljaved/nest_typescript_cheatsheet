
//function 1
function getSum(num1:number, num2:number):number{
    return num1 + num2;
}

getSum(2,3);


//function 2
let mySum = function(num1:any,num2:any):number{

    if(typeof num1 == 'string'){
        num1 = parseInt(num1)
    }

    
    if(typeof num2 == 'string'){
        num2 = parseInt(num1)
    }

    return num1 + num2
}

mySum('3',5)

//function3
function getName(firstName:string, lastName?:string):string{

        if(lastName == undefined){
            return firstName
        }

        return firstName + lastName
}

getName('nabeel')

//function 4
function voidFunc():void{
    return;
}





