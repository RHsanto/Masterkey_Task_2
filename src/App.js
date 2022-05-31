
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './page/common/Navbar';
import Home from './page/Home/Home';
import Footer from './page/common/Footer';
import Products from './page/Home/Services/Products';
import About from './page/Home/About';
import Contact from './page/Home/Contact';
import Login from './page/Auth/Login';
import Signup from './page/Auth/Signup';
import Blog from './page/Home/Blog';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/product'  element={<Products />} />
          <Route path='/about'  element={<About />} />
          <Route path='/blog'  element={<Blog />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/log-in'  element={<Login />} />
          <Route path='/sign-up'  element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
