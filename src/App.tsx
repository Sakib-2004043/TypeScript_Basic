import React from 'react';

// Type
type Person = {
  name: string;
  age?: number;  // age is optional
}

// Variable
const name: string = "Sakib"
const age: number = 20
const isMan: boolean = true
const hobbies: string[] = ["Fishing ", "Reading ", "Writing "]
const role:[number[], string][] = [[[1,2,3], " Sakib "],[[4,5,6], " Rakib "]]
const person : Person[] = [{name: "Abul"},{name: "Sayeem" , age: 35}]
const unknownType: unknown = "Hamid" // Type Will be the First Input Type


// Function
const printName = (name: string): void =>{
  console.log(name)
}
// A function returning `never` typically throws an error or enters an infinite loop.
const printAge = (age: number): never => {
  throw new Error("This function will never return because it throws an error");
  // Alternatively, you could use an infinite loop:
  // while (true) {
  //   console.log(age);
  // }
}

// It is most similar to Class
interface man{
  name: string;
  age?: number;  // age is optional
  greet(): string;
}

const person1: man= {
  name: "Sakib",
  age: 20,
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
};

const person2: man = {
  name: "Rakib",
  greet() {
    return `Hi, I'm ${this.name}.`;
  }
};

function App() {
  // Return Void 
  printName("Void Function")

  // Return Never
  // printAge(25)


  return (
    <div>
      Hellow World {name} {age} {isMan?"Man":"Woman"}
      <br />
      Hobbies : {hobbies.join(", ")}
      <br />
      Tupples : {role}
      <br />
      Person: {person[0].name}__{person[1].age}
      <br />
      Unknown Type : {typeof unknownType === 'string' ? unknownType : "Unknown Type"}
      <br /><br />
      Interface1 : {person1.greet()}
      <br />
      Interface2 : {person2.greet()}

    </div>
  );
}

export default App;
