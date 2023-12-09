import './App.css';
import Header from './Header';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={[<Header />, <TinderCards />, <SwipeButtons/>]} />
        <Route path="/chats" element={[<Header backButton="/"/>, <Chats />]} />
        <Route path="/chat/:person" element={[<Header backButton={"/chats"}/>, <ChatScreen /> ]} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
