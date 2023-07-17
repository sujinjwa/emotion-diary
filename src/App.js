import React, { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }

    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }

    case 'REMOVE': {
      newState = state.filter((elem) => elem.id !== action.targetId);
      break;
    }

    case 'EDIT': {
      newState = state.map((elem) =>
        elem.id === action.data.id ? { ...action.data } : elem
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기 1번',
    date: 1684652767383,
  },
  {
    id: 2,
    emotion: 2,
    content: '오늘의 일기 2번',
    date: 1684652767385,
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘의 일기 3번',
    date: 1684652767387,
  },
  {
    id: 4,
    emotion: 4,
    content: '오늘의 일기 4번',
    date: 1684652767388,
  },
  {
    id: 5,
    emotion: 5,
    content: '오늘의 일기 5번',
    date: 1684652767389,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef();

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId,
    });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: { id: targetId, date: new Date(date).getTime(), content, emotion },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
