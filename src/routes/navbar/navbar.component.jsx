import {Link, Outlet} from 'react-router-dom';
import {ReactComponent as WissLogo} from '../../assets/crown.svg';
import './navbar.styles.scss';
const Navbar = () => {
    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <WissLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/sign-in'>SIGN IN</Link>

                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navbar;