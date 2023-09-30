import './Select.css'
import { useState } from 'react';

const Select = () => {
  
  const [isActive, setIsActive] = useState(false);
  const [selectBtn, setSelectBtn] = useState("Select Country");
  const [searchInp, setSearchInp] = useState('');

  
  
  const toggleSelect = () => {
    setIsActive(!isActive);
  }
  
  const countries = ["Australia", "Colombia", "Dinamarca", "Alemania", "Indonesia","Australia", "Colombia", "Dinamarca", "Alemania", "Indonesia"];

  const updateName = (selectedLi) => {
    setSelectBtn(selectedLi)
  }
  

  // Función para manejar cambios en el input de búsqueda
  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInp(inputValue);
    console.log(inputValue);
    
    let array = [];
    const searchedVal = inputValue.toLowerCase();
    // returning all data from array which starts with user searched value
    array = countries.filter(data => {
      return data.toLowerCase().startsWith(searchedVal);
    });
    console.log(array)
     
  }
  

  return(
    <div className='mt-5'>
      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <div className="select-btn" onClick={toggleSelect}>
          <span>{selectBtn}</span>
          <i className="uil uil-angle-down"></i>
        </div>
        <div className="content">
          <div className="search">
            <i className="uil uil-search"></i>
            <input type="text" placeholder='Search' value={searchInp} onChange={handleSearchInputChange}/>
          </div>
          <ul className="options">
            {countries.map((item, index) => (
              <li key={index} onClick={() => updateName(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;