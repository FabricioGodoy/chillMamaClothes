import {BrowserRouter as Router,Routes,Route,  Navigate } from "react-router-dom";
import {Home} from "./components/home/home.jsx";
import {NavBar} from './components/navBar/navBar';
import {Footer} from "./components/footer/footer";

function App() {
  return (
    <Router>
      
        <NavBar/>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="*" element={<Navigate to="/notFound" />} />
            
          </Routes>
        <Footer />  
    </Router>
  );
}
export default App;