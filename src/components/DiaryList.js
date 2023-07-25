import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DiaryItem from '../components/DiaryItem';
import MyButton from './MyButton';

const optionList = [
  { name: '최신순', value: 'latest' },
  { name: '오래된 순', value: 'oldest' },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className='ControlMenu'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const filterOptionList = [
  { name: '전부 다', value: 'all' },
  { name: '좋은 감정만', value: 'good' },
  { name: '나쁜 감정만', value: 'bad' },
];

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [emoType, setEmoType] = useState('all');

  const getProccessedDiaryList = () => {
    const filterCallBack = (it) => {
      if (emoType === 'good') {
        return parseInt(it.emotion) <= 3;
      } else {
        return parseInt(it.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      emoType === 'all'
        ? copyList
        : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={optionList}
          />
          <ControlMenu
            value={emoType}
            onChange={setEmoType}
            optionList={filterOptionList}
          />
        </div>
        <div className='right_col'>
          <MyButton
            type={'positive'}
            text={'새 일기 쓰기'}
            onClick={() => navigate('/new')}
          />
        </div>
      </div>
      {getProccessedDiaryList().map((it) => (
        <DiaryItem
          key={it.id}
          id={it.id}
          emotion={it.emotion}
          content={it.content}
          date={it.date}
        />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
