import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './App2.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
// const [value that you store, Function which you can use to reset the value]
console.log(puppies);

const [featPupId, setFeatPupId] = useState(null);
const featuredPup = puppies.find((pup)=> pup.id === featPupId);
console.log(featuredPup)
  return (
    <>
      <div className ="App">

        {featPupId && (
          <div className ='info'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          </div>
        )}
  
      {
        puppies.map((puppy)=>{
          return <p className= "hover" onClick={()=>{setFeatPupId( puppy.id)}} key = {puppy.id}>{puppy.name}</p>
        })
      }
      </div>
    </>
  )
}

export default App
