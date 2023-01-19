import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='nav'>
                <div className='logo_container'>
                    <h1>Logo</h1>
                </div>
                <ul className='nav_items'>
                    <li><Link className='text' to='/'>Home</Link></li>
                    <li className="dropdown">
                        <div className="dropbtn">Dropdown</div>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li><Link className='text' to='/contactus'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar