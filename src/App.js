import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Jobboard from './components/Jobboard';
import Header from "./components/Header"

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<AboutUs/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/jobboard" element={<Jobboard/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
