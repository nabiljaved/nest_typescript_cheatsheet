
//example 1
function showTodo(todo:{title:string, text:string}){
    console.log(todo.title + ':'+todo.text)
}

let myTodo = {title:'trash', text:'take out trash'}

showTodo(myTodo)


//example 2
interface Todo{
    title:string;
    text: string; 
}

function showTodoTwo(todo: Todo){
    console.log(todo.title + ':'+todo.text)
}

showTodoTwo(myTodo)

//example 3
interface personInterface{
    name: string,
    age:number
}

let mike : personInterface = {
    name : 'mike',
    age : 34
}

class personn implements personInterface {
    name : string;
    age: number;

    constructor(n:string, a:number){
        this.name = n; 
        this.age = a;    
    }

    greet(){
        return `hi, my name is ${this.name} and i am ${this.age}`
    }

}

class personn2 implements personInterface {
    
    constructor(public name:string, public age:number){}

    greet(){
        return `hi, my name is ${this.name} and i am ${this.age}`
    }

}

