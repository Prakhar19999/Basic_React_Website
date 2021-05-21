import { Link } from 'react-router-dom';
import React,{useState} from 'react';



function Navbar(){
    const[click,setClick]=useState(false);

    const onClickHandler=()=>{
        setClick(!click)
    }

    const closeMobileMenu=()=>{
        setClick(false)
    }
    return(
       <div>
           <nav className="nabvar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">TRAVELLER<i className='fab fa-typo3'/></Link>
                   <div className="menu-icon" onClick={onClickHandler}>
                        <i className={click?'fas fa-times':'fas fa-bars'}></i>
                   </div>
                   <ul className={click?'nav-menu active':'nav-menu'}>
                       <li className="nav-item">
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                               Services
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                               Product
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                               Sign-Up
                           </Link>
                       </li>
                   </ul>
               </div>
           </nav>
       </div>
    );
}

export default Navbar;