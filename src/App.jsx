import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-img"></div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
