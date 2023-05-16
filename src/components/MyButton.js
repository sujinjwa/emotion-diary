const MyButton = ({ text, type, onClick }) => {
  // positive나 negative가 없다면 default를 반환 (3개 type 이외의 type이 생성되는 경우 절대 없도록)
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={['MyButton', `MyButton_${type}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};

export default MyButton;
