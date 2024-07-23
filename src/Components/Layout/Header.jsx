import React from 'react';
import '../Pages/indexPage/stylePage1.css';


const Header = ({title}) => {
  return (
    <div className='HeaderMain'>
        <h1>{title}</h1>
    </div>
  );
};

export default Header;