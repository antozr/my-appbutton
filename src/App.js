
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ButtonPage from './Page/ButtonPage';
function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <ButtonPage />
      </div>
    </Router>

    
  );
}

export default App;
