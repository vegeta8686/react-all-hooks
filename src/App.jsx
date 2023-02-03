import './App.css';
import Usestate from './components/UsestateFnc';
import { CreateTodo } from './components/useReducer/CreateTodo';
import { Counter } from './components/useReducer/Counter';
import { Useeffect } from './components/Useeffect';
import { Useref } from './components/Useref';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Uselayouteffect } from './components/Uselayouteffect';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/useState" element={<Usestate />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<CreateTodo />} />
          <Route path="/useEffect" element={<Useeffect />} />
          <Route path="/useRef" element={<Useref />} />
          <Route path="/useLayoutEffect" element={<Uselayouteffect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
