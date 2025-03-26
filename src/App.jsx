import { useState } from 'react'
import './App.css'

function App(){

  const [pets, setPets] = useState([
    { id: 1, name: "Norma", type: "cat", age: "12" },
    { id: 2,name: "Carly", type: "cat", age: "3" },
    { id: 3, name: "Bruce", type: "dog", age: "8" },
  ]);
const [newPets, setNewPets] = useState([
  {id: 4, name: "Buddy", type: "dog", age: "3" },
  {id: 5, name: "Porky", type: "pig", age: "1" },
  {id: 6, name: "Spirit", type: "horse", age: "5" },
]
)

const addPet = ()=>{
  const newPet = newPets.pop();
  setPets([...pets, newPet]);
  setNewPets([...newPets])
}


  return (
    <div>
      <h1>Pets from React!</h1>
{
  newPets.length === 0 ?
  <p>No more pets...LOL</p> :
  <button onClick={addPet}>Add a Pet</button>
}


      <div id="petsContainer">

      {
        pets.map((pet)=>{
          return(
            <div className = "pets" key={pet.id}>
              <h1>Name: {pet.name}</h1>
              <p><strong>Type: {pet.type}</strong></p>
              <p><strong>Age: {pet.age}</strong></p>
          </div>
          )
        })
      }  
    

      </div>
    </div>
  )
    }

export default App
