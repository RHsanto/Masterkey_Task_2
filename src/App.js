
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './page/common/Navbar';
import Home from './page/Home/Home';
import Footer from './page/common/Footer';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
