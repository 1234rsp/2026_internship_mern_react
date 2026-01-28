import React from 'react'

export default function ContentComponent() {
    var title = "React";
      var version = "19.2.4";
      var person = {
        name: "Ritesh",
        age: 21,
        city: "Surat"
      };
  return (
    <div style={{border: "1px solid black",minheight:"300px",width:"auto",height:"auto",padding:"10px",margin:"5px"}}>
      <h1>HELLO</h1>
      <h1>Welcome to {title}</h1>
      <h1>Latest Version: {version}</h1>
      <h2>User Details ..... </h2>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>City: {person.city}</h3>
    </div>
  )
}
