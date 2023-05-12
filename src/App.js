import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary' element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
