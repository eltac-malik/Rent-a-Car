import "./App.css";
import NavBar from "./Pages/components/NavBar";
import { BrowserRouter as Router, Routes, Route,Navigate, Link } from "react-router-dom";
import Home from "./Pages/Home";
import RentCar from "./Pages/RentCar";
import AllCars from "./Pages/AllCars";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/cars" element={<AllCars/>}/>
          <Route path="/rent/:id" element={<RentCar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
