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
        </div>
      </div>
    </div>
  );
}

export default Select;