import './Select.css'
import { useState } from 'react';

const Select = () => {
  
  const [isActive, setIsActive] = useState(false);
  
  const toggleSelect = () => {
    setIsActive(!isActive);
  }

  return(
    <div className='mt-5'>
      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <div className="select-btn" onClick={toggleSelect}>
          <span>Select Country</span>
          <i className="uil uil-angle-down"></i>
        </div>
        <div className="content">
          <div className="search">
            <i className="uil uil-search"></i>
            <input type="text" placeholder='Search' />
          </div>
          <ul className="options">
            <li>Australia</li>
            <li>Colombia</li>
            <li>Dinamarca</li>
            <li>Alemania</li>
            <li>Indonesia</li>
            <li>Australia</li>
            <li>Colombia</li>
            <li>Dinamarca</li>
            <li>Alemania</li>
            <li>Indonesia</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;