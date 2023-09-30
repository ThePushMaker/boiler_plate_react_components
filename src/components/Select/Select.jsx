import './Select.css'
import { useEffect, useState, useRef } from 'react';

const Select = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectBtn, setSelectBtn] = useState("Select Country");
  const [searchData, setSearchData] = useState({
    searchInp: '',
    filteredCountries: [],
    hasSearched: false,
  });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const wrapperRef = useRef(null); // Ref para el div contenedor del select
  const inputRef = useRef(null); // Ref para el elemento input del campo de búsqueda

  const toggleSelect = () => {
    setIsActive(!isActive);
  }

  const closeSelect = () => {
    setIsActive(false);
    setSearchData(prevData => ({
      ...prevData,
      searchInp: '', // Establecer el campo de búsqueda en una cadena vacía al cerrar el select
      filteredCountries: countries,
    }));
  }

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      closeSelect();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      // Cuando se activa el select, establece el enfoque en el campo de búsqueda
      inputRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && selectedCountry) {
      setSelectBtn(selectedCountry);
    }
  }, [isActive, selectedCountry]);

  const countries = ["Australia", "Colombia", "Dinamarca", "Alemania", "Indonesia","Australia", "Colombia", "Dinamarca", "Alemania", "Indonesia"];

  const updateName = (selectedLi) => {
    setSelectBtn(selectedLi)
    setSelectedCountry(selectedLi);
    closeSelect();
  }

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchData(prevData => ({
      ...prevData,
      searchInp: inputValue,
      hasSearched: true,
      filteredCountries: countries.filter(data => data.toLowerCase().includes(inputValue.toLowerCase())),
    }));
  }

  return (
    <div className='mt-5'>
      <div className={`wrapper ${isActive ? 'active' : ''}`} ref={wrapperRef}>
        <div className="select-btn" onClick={toggleSelect}>
          <span>{selectBtn}</span>
          <i className="uil uil-angle-down"></i>
        </div>
        <div className="content">
          <div className="search">
            <i className="uil uil-search"></i>
            <input
              type="text"
              placeholder='Search'
              value={searchData.searchInp}
              onChange={handleSearchInputChange}
              ref={inputRef} // Asigna la referencia al elemento input
            />
          </div>
          <ul className="options">
            {searchData.hasSearched ? (
              searchData.filteredCountries.length > 0 ? (
                searchData.filteredCountries.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => updateName(item)}
                    className={selectedCountry === item ? 'selected' : ''}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <p>Oops! Country not found</p>
              )
            ) : (
              countries.map((item, index) => (
                <li
                  key={index}
                  onClick={() => updateName(item)}
                  className={selectedCountry === item ? 'selected' : ''}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;
