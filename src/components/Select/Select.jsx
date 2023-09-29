import './Select.css'

const Select = () => {

  return(
    <div>
      <div className="wrapper">
        <div className="select-btn">
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