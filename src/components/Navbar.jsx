import { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
  const liStyles = 'list-none py-0 px-[20px] relative'
  const li_a_Styles = 'no-underline text-[1.3rem] font-bold text-white hover:text-[#17cf97] ease-in-out duration-300 '
  const [isClicked, setIsClicked] = useState(false)
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  
  return (
   <>
      <nav className='w-screen navbar flex items-center justify-between bg-[#1b2430] py-[20px] px-[80px] shadow-sm
       '>
        <a href='index.html'>
          <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg>
        </a>
        <div>
          <ul className='flex flex-col justify-start content-start
          fixed top-[90px] right-0 w-[300px] h-[100vh] bg-[#2a3239] shadow-2xl pt-[40px] pl-[10px]
          lg:static lg:h-auto lg:bg-transparent lg:shadow-none lg:pt-0 lg:pl-0 lg:justify-center  lg:flex-row lg:items-center '>
            <li className={liStyles}>
              <a className={`${li_a_Styles} active`} href='index.html'>Home</a>
            </li>
            <li className={liStyles}>
              <a className={li_a_Styles} href='index.html'>Shop</a>
            </li>
            <li className={liStyles}>
              <a className={li_a_Styles} href='index.html'>About</a>
            </li>
            <li className={liStyles}>
              <a className={li_a_Styles} href='index.html'>Contact</a>
            </li>
          </ul>
        </div>
        <div id='mobile' className='md:hidden' onClick={handleClick} >
          <i id='bar' className={isClicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
        </div>
      </nav>
   
   </>    
  )
}
export default Navbar;