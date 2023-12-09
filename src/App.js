import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
        <Route path="/" element={<TinderCards />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
