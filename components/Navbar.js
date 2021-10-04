import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        } else {
            setButton(true);
        }
    }


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className="navbar-logo">
                        JDLV <i className='fab fa-typo3' ></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu act active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/Acc' className='nav-links' onClicks={closeMobilemenu}>
                                Acceuil
                            </Link>

                            <li className='nav-item'>
                                <Link to='/test' className='nav-links' onClicks={closeMobilemenu}>
                                    Test
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/Info' className='nav-links' onClicks={closeMobilemenu}>
                                    Information
                                </Link>
                            </li>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Download</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
