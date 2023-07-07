import './Navbar.scss'
import { FaBookQuran } from 'react-icons/fa6'
import { SlBasketLoaded } from 'react-icons/sl'
import { FiUser } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="navLeft">
                <FaBookQuran size={40} color='white' />
            </div>
            <div className="navRight">
                <div className="navLinks">
                    <Link className='navLink' to="/">Ana Səhifə</Link>
                    <Link className='navLink' to="/ourinfo">Bizim haqqımızda</Link>
                    <Link className='navLink' to="/contact">Əlaqə</Link>
                </div>

                <div className="otherItems">
                    <button className='registerButton'>Qeydiyyatdan keç</button>
                    <button className='signInButton'>Daxil ol</button>

                    <div className="basketContainer">
                        <span className="countCircle">0</span>
                        <Link to="/basket"><SlBasketLoaded size={40} color='white' /></Link>
                    </div>

                    <Link to="/profile" className='profile'>
                        <FiUser size={40} color="white" />
                    </Link>
                </div>
            </div>
            <button className='hMenu'>
                <RxHamburgerMenu size={40} color="white" />
            </button>
        </nav>
    )
}

export default Navbar