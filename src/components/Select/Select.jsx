import './Select.css'
import { useEffect, useState, useRef } from 'react';

const Select = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectBtn, setSelectBtn] = useState("Select Country");
  const [searchInp, setSearchInp] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const wrapperRef = useRef(null); // Ref para el div contenedor del select

  const toggleSelect = () => {
    setIsActive(!isActive);
  }

  const closeSelect = () => {
    setIsActive(false);
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
    setSearchInp(inputValue);

    const searchedVal = inputValue.toLowerCase();
    const filtered = countries.filter(data => {
      return data.toLowerCase().includes(searchedVal);
    })

    setFilteredCountries(filtered);
    setHasSearched(true);
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
            <input type="text" placeholder='Search' value={searchInp} onChange={handleSearchInputChange} />
          </div>
          <ul className="options">
            {hasSearched ? (
              filteredCountries.length > 0 ? (
                filteredCountries.map((item, index) => (
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
