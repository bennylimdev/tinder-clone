import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={[<TinderCards />, <SwipeButtons/>]} />
        <Route path="/chats"/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
