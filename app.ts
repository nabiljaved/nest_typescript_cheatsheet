const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;
const inputForm = document.querySelector('form')  // ! if ?. down there will typecast to div
const greeting = document.querySelector('.greeting') as HTMLDivElement

interface personInterface{
    name: string,
    age:number
}

class Personn implements personInterface{
    constructor(public name : string, public age: number){}

    greet(){
        return `hi, my name is ${this.name} and i am ${this.age}`
    }

} 



inputForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const person = new Personn(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet()
    inputForm.reset()
})
