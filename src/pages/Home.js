import { useState, useContext, useEffect } from 'react';

// Context
import { DiaryStateContext } from '../App';

// Components
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [currDate, setCurrDate] = useState(new Date());
  const headerText = `${currDate.getFullYear()}년 ${currDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length > 1) {
      const firstDay = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        currDate.getFullYear(),
        currDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter(
          (diary) => firstDay <= diary.date && diary.date <= lastDay
        )
      );
    }
  }, [diaryList, currDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurrDate(
      new Date(
        currDate.getFullYear(),
        currDate.getMonth() + 1,
        currDate.getDate()
      )
    );
  };

  const decreaseMonth = () => {
    setCurrDate(
      new Date(
        currDate.getFullYear(),
        currDate.getMonth() - 1,
        currDate.getDate()
      )
    );
  };

  return (
    <div>
      <MyHeader
        headerText={headerText}
        leftChild={
          <MyButton text={'<'} type={'default'} onClick={decreaseMonth} />
        }
        rightChild={
          <MyButton text={'>'} type={'default'} onClick={increaseMonth} />
        }
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
