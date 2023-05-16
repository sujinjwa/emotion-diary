import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

// components
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MyHeader
          headerText={'App'}
          leftChild={
            <MyButton text={'왼쪽 버튼'} onClick={() => alert('왼쪽 클릭')} />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => alert('오른쪽 클릭')}
            />
          }
        />
        <h2>App.js</h2>

        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt='' />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt='' />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt='' />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt='' />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt='' />

        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'positive'}
        />
        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'negative'}
        />
        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'default'}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
