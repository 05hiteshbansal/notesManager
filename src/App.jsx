
import './App.css'
import Auth  from './components/Auth'
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Notes from './components/Notes';
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/notes' element={<Notes/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>

    </Routes>

    </>
  )
}

export default App
