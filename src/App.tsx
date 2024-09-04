import React from 'react';
import './App.css';

const name: string = "Sakib"
const age: number = 20
const isMan: boolean = true
const hobbies: string[] = ["Fishing ", "Reading ", "Writing "]
const role:[number[], string][] = [[[1,2,3], " Sakib "],[[4,5,6], " Rakib "]]



function App() {
  return (
    <div className="App">
      Hellow World {name} {age} {isMan?"Man":"Woman"}
      <br />
      Hobbies : {hobbies}
      <br />
      Tupples : {role}

    </div>
  );
}

export default App;
