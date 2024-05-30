import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from "./App/Main";
import Profile from "./App/Profile";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App