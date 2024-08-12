import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './Components/Employee'

function App() {

  let myObj={
    userName: "Dev Jain",
    age: 18
  }
  return (
    <>
      <h1 className='bg-green-400' >Tailwind</h1>
    <Employee userName="Dev" age="22" />
    <Employee userName="Jain" />
    <Employee {...myObj} />
    </>

  )
}

export default App