import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';


const App = () => {
  return (
    <>
    <Router>
        <div>
        <NavBar />
        </div>
        <div style={{marginLeft: 200}}>
        <Routes>
            <Route exact path='/' element={<Home />}/>
        </Routes>
        </div>
    </Router>

    </>
  )
}

export default App