// Imports
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import ReadProduct from './components/ReadProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <main className="container">
     <Router>
       <Header/>
      <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/read-product" element={<ReadProduct/>} />
        <Route path="/update-product/:id" element={<UpdateProduct/>} />
       
      </Routes>
      </div>
     </Router>
    </main>
  )
}

export default App;
