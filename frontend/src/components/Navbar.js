import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <i className='fas fa-syringe'></i>
                <h4>VIGOUR</h4>
            </div>
            <ul className='navlinks'>
                <li className="link"><a href='#'>Home</a></li>
                <li className="link"><a href='#'>About</a></li>
                <li className="link"><a href='#'>Services</a></li>
                <li className="link"><a href='#'>Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
