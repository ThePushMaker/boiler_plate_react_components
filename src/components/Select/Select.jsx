import './Select.css'
import { useState } from 'react';

const Select = () => {
  
  const [isActive, setIsActive] = useState(false);
  const [selectBtn, setSelectBtn] = useState("Select Country");
  const [searchInp, setSearchInp] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]); // Nuevo estado para almacenar los países filtrados
  
  
  const toggleSelect = () => {
    setIsActive(!isActive);
  }
  
  const countries = ["Australia", "Colombia", "Dinamarca", "Alemania", "Indonesia","Australia", "Colombia", "Dinamarca", "Alemania", "Indonesia"];

  const updateName = (selectedLi) => {
    setSelectBtn(selectedLi)
    setIsActive(false); // Cerrar la lista después de seleccionar un país
  }

  // Función para manejar cambios en el input de búsqueda
  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInp(inputValue);
    
    const searchedVal = inputValue.toLowerCase();
    // Filtrar los países que coinciden con la búsqueda
    const filtered = countries.filter(data => {
      return data.toLowerCase().includes(searchedVal); // Usar includes para buscar en cualquier parte del nombre
    })
    
    setFilteredCountries(filtered); // Actualizar el estado de países filtrados
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
            {filteredCountries.map((item, index) => (
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