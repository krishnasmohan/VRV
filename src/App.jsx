import './App.css'
import { Routes,Route } from "react-router-dom"
import Home from './components/Home/Home'
import Contact from './components/contactabout/Contact'
import AboutContainer from './components/contactabout/AboutContainer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='About' element={<AboutContainer />}/>
        <Route path='Contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
