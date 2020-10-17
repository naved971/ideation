import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  const [list, setList] = useState([])
  console.log(list)
  return (
    <div className="App">


      <ul>
        <li>
          <span>ModernOffice</span> - <span>votes: {list.filter(l => l.name === "ModernOffice").length}</span>
          <button onClick={() => {
            const votes = list.filter(l => l.name === "ModernOffice").length;
            list.push({ name: "ModernOffice", votes: votes === 0 ? 1 : votes })
            setList([...list]);

          }}>+</button>

          <button  onClick={() => {
            const ModernOffices = list.filter(l => l.name === "ModernOffice");
            if(ModernOffices.length ===0) return 
            const Offsites = list.filter(l => l.name === "Offsite");

            ModernOffices.splice(0,1)
            setList([...ModernOffices,...Offsites]);

          }} >-</button>
        </li>
        <li>
          <span>Offsite</span> - <span>votes: {list.filter(l => l.name === "Offsite").length} </span>

          <button onClick={() => {
            const votes = list.filter(l => l.name === "Offsite").length;
            list.push({ name: "Offsite", votes: votes === 0 ? 1 : votes })
            setList([...list]);
          }}
          >+</button>
          <button
          onClick={() => {
            const Offsites = list.filter(l => l.name === "Offsite");
            if(Offsites.length ===0) return 
            const ModernOffices = list.filter(l => l.name === "ModernOffice");

            Offsites.splice(0,1)
            setList([...ModernOffices,...Offsites]);
          }}
          >-</button>
        </li>
      </ul>


      <List
        data={list}
      />

    </div>
  );
}

export default App;
