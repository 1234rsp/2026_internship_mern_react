import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  var title = "React JS";
  var year = 2026;
  var age = 77;
  var person = {
    name: "Ritesh",
    age: 21,
    city: "Surat"
  };

  return (
    <div>
      <h1>HELLO</h1>
      <h1>Welcome to {title}</h1>
      <h1>Year: {year}</h1>
      <h2>User Details ..... </h2>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>City: {person.city}</h3>
      

    </div>
  )
}

export default App
