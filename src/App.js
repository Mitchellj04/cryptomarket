import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';


const App = () => {
  return (
    <>
        <div>
        <NavBar />
        </div>
        <div style={{marginLeft: 200}}>
        <Routes>
            <Route exact path='/' element={<Home />}/>
        </Routes>
        </div>
    </>
  )
}

export default App