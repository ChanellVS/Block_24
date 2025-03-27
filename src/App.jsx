import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
// const [value that you store, Function which you can use to reset the value]
console.log(puppies);

  return (
    <>
      <div className ="App">
      {
        puppies.map((puppy)=>{
          return <p key = "{puppy.id}">{puppy.name}</p>
        })
      }
      </div>
    </>
  )
}

export default App
