import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes, FaPhoneAlt, FaSearch, FaCarAlt, FaCartPlus} from 'react-icons/fa'
import Logo from './resources/dummy-logo.png'



function Navbar() {
    const category1 = "Laptop"
    const category2 = "PC"

    const [categoryName, setCategoryName] = useState('')

    const [searchClick, setSearchClick] = useState(false)

    const handleSearchClick = () => setSearchClick(!searchClick)
    const closeSearchBar = () => setSearchClick(false)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className={searchClick ? 'search-section search-active': 'search-section'}>
                    <div className="search-container">
                    <input type='text' onChange={event => setCategoryName(event.target.value)} />
                    <div onClick={closeSearchBar} className='search-button'>
                    <Link to= {{
                        pathname: "/product",
                        state: categoryName // your data array of objects
                    }}>
                        search
                    </Link>
                    </div>
                    </div>
                    
                </div>
                <div className="bar">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <Link to= '/' >
                    <img src={Logo} alt='logo' className='logo' />
                    </Link>
                    <div className="right-div" >
                        <Link to='/cart' className='nav-link' >
                    <FaCartPlus />
                    </Link>
                    <FaSearch onClick={handleSearchClick}/>
                    </div>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to= {{
                        pathname: "/product",
                        state: category1 // your data array of objects
                    }} 
                        onClick={closeMobileMenu}
                    >
                        {category1} 
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to= {{
                        pathname: "/product",
                        state: category2 // your data array of objects
                    }}  
                        onClick={closeMobileMenu}
                    >
                        {category2} 
                    </Link> 
                    </li>
                    <li className='nav-item'>
                        Product 
                    </li>
                    <li className='nav-item'>
                        Product 
                    </li>
                    <li className='nav-item'>
                        Product 
                    </li>
                    <li className='nav-item'>
                        Product 
                    </li>
                    <li className='nav-item'>
                        Product 
                    </li>
                    <li className='nav-item'>
                        Product 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
