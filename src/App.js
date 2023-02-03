import './App.css';
import Usestate from './components/UsestateFnc';
import { CreateTodo } from './components/useReducer/CreateTodo';
import { Counter } from './components/useReducer/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/useState" element={<Usestate />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<CreateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
