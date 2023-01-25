import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ExHome from './components/Explore Courses/ExHome';
import TeamHome from './components/Team/TeamHome';
import PricingHome from './components/Pricing/PricingHome';
import Journal from './components/Journal/Journal';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/ExHome' element={<ExHome/>}/>
        <Route exact path='/TeamHome' element={<TeamHome/>}/>
        <Route exact path='/PricingHome' element={<PricingHome/>}/>
        <Route exact path='/Journal' element={<Journal/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
