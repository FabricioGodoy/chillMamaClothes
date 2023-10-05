import {BrowserRouter as Router,Routes,Route,  Navigate } from "react-router-dom";
import {Home} from "./components/home/home.jsx";
import {Navbar} from './components/navBar/navbar';
import {Footer} from "./components/footer/footer";

function App() {
  return (
    <Router>
      
        <Navbar/>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="*" element={<Navigate to="/notFound" />} />
            
          </Routes>
        <Footer />  
    </Router>
  );
}
export default App;