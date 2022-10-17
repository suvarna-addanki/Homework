
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from "react-router-dom";
import React from 'react'

function App() {
  return (
    <div className='App'>
        {/* <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes> */}
        <HomePage />

    </div>
  )
}

export default App;