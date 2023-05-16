const MyHeader = ({ headerText, leftChild, rightChild }) => {
  return (
    <header>
      <div className='head_btn_left'>{leftChild}</div>
      <div className='head_text'>{headerText}</div>
      <div className='head_btn_right'>{rightChild}</div>
    </header>
  );
};

export default MyHeader;
