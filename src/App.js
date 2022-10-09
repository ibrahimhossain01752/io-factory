import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './component/Shared/Navbar';
import Home from './component/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
     
        <Route index element={<Home />} />
        
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
