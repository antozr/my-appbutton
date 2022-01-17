
import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import ButtonPage from './Page/ButtonPage';
import Home from './Page/Home';
import InputPage from './Page/InputPage';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
      
      <Route exact path="/" element={<ButtonPage/>}/>
      <Route exact path="/input" element={<InputPage/>}/>
      
    </Routes>
    </div>

    
  );
}

export default App;
