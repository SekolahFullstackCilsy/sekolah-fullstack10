import './App.css';
import React from 'react';
import Greeting from './components/Greeting';

function App() {
  const [person, setPerson] = React.useState([
    { nama: "Afif", umur: 20, email: "afif@gg.com" }, // 0
    { nama: "Satria", umur: 20, email: "satria@gg.com" } // 1
  ]);

  const addPerson = () => {
    setPerson([
      ...person,
      { nama: "Orang baru", umur: 18, email: "email@gg.com" }
    ])
  }

  return (
    <div>
      {person.map((item, index) => (
        <Greeting
          key={index}
          nama={item.nama}
          umur={item.umur}
          email={item.email}
        />
      ))}
      <button type="button" onClick={addPerson}>Add Person</button>
    </div>
  )
}

export default App;
