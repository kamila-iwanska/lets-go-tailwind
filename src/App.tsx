import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [age, setAge] = useState<string>('')


  return (
    <>
    <h2>Personal info</h2>
    <label>First Name</label>
    <input type= 'text' onChange={(e)=>setFirstName(e.target.value)}/>
    <label>Last Name</label>
    <input type ='text' onChange={(e)=>setLastName(e.target.value)}/>
    <label>Email Address</label>
    <input type='email' onChange={(e)=>setEmail(e.target.value)}></input>
    <label>Age</label>
    <input type ='range' onChange={(e)=>setAge(e.target.value)}/>
    <label>Photo</label>

    <h2>Your workout</h2>
    <label>Date</label>
    <button>Send Application</button>
    <label>Time</label>


      
    </>
  )
}

export default App
