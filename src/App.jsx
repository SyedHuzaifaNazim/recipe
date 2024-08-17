import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from '../src/Components/Header'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [myData, setMyData] = useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes')
    .then(response => {
      setMyData(response.data.recipes)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])
  
  // const imagePath = require(`./assets/${pngwing.com}.png`);
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Header />} />
          </Routes>
        </Router>
        <h1 className='recipe-title'>Home Made Oat Flour Pizza</h1>
        {/* <img src={imagePath} alt="" sizes="" srcset="assets" /> */}
    </>
  )
}

export default App
