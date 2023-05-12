import { Link } from 'react-router-dom';

const RouteTest = () => {
  return (
    <>
      <Link to={'/'}>HOME</Link>
      <br />
      <Link to={'/new'}>NEW</Link>
      <br />
      <Link to={'/edit'}>EDIT</Link>
      <br />
      <Link to={'/diary'}>DIARY</Link>
    </>
  );
};

export default RouteTest;
