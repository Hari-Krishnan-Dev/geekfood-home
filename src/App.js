
import './App.css';
import Nav from "./components/Nav";
import {Routes, Route} from 'react-router-dom'
import Home from './Page-menus/Home';
import Quote from './Page-menus/Quote';
import Restaurants from './Page-menus/Restaurants';
import Foods from './Page-menus/Foods';
import Contact from './Page-menus/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
     < Nav />
        <Routes>
          <Route path="/" Component={Home}/>} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="foods" element={<Foods />} />
          <Route path="contact" element={<Contact />} />
        
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
