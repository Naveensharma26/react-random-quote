import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState('Click on get quote')


  const getQuote = async()=>{
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json(); 
    console.log(data)
    setQuote(data.slip.advice)
    return data;
  }
    useEffect(()=>{
      getQuote()
    },[])
  
  return (
    <>
    <div className="container">
      <div className="area">
        <h1 id='quote'>{quote}</h1>
      </div>
        <button  id='btngetQuote' onClick={getQuote}>Get Quote</button>
    </div>
    </>
  )
  
 
  

}

export default App
