
//example 1 
class User{
    name: string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age

        console.log('user Created' + this.name)
    }

}

let john = new User('nabeel', 'nabeeljaved2029@gmail.com', 36)
console.log(john.age)

//example 2 access modifier
class User2{
    private name: string;
    private email:string;
    public age:number;
    protected age2:number

    constructor(name:string, email:string, age:number, age2:number){
        this.name = name;
        this.email = email;
        this.age = age
        this.age2 = age2
        console.log('user Created' + this.name)
    }

}

let john2 = new User2('nabeel', 'nabeeljaved2029@gmail.com', 36, 34)
console.log(john2.age)
//console.log(john2.age2)  // we cant use outside of class but we can access that inherits this one 


//example 3 inheritance 
class User3 {
    name: string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age

        console.log('user Created' + this.name)
    }

    //call from within class 
    private register(){
        console.log(this.name+'is now registered')
    }

    
    payInvoice(){
        console.log(this.name+'payinvoice')   
    }

}

//member class inherits user3
class Member extends User3{
    id:number;
    constructor(id:number, name:string, email:string, age:number){
        super(name, email, age)
        this.id = id
    }

    payInvoice(){
        console.log(this.name+'payinvoice')
        super.payInvoice()    
    }

}

let nabeel = new Member(1, "nabeel", "nabeeljaved2029@gmail.com", 36)
nabeel.payInvoice()

//example 4 user interface
interface UserInterface{
    name:string; 
    email:string; 
    age:number; 
    register()
    payInvoice()
}

class User5 implements UserInterface {
    name: string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age

        console.log('user Created' + this.name)
    }

    //call from within class 
    register(){
        console.log(this.name+'is now registered')
    }

    
    payInvoice(){
        console.log(this.name+'payinvoice')   
    }

}

//example6
interface personInterface{
    name: string,
    age:number
}

class Person implements personInterface{
    constructor(public name : string, public age: number){}

    greet(){
        return `hi, my name is ${this.name} and i am ${this.age}`
    }

} 
