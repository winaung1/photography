
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { About } from './Pages/About';
import { Blog } from './Pages/Blog';
import {FeaturedWorks} from './Pages/FeaturedWorks'
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/featured-works' element={<FeaturedWorks/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
