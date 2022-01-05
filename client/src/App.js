//import logo from './logo.svg';
import './App.css';
import AddTask from './componets/AddTask';
import Nav from './componets/Nav';
import Home from './componets/Home';
import Display from './componets/Display';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Display" element={<Display/>}/>
         <Route path="/AddTask" element={<AddTask/>} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
