import {useContext} from 'react'
import {Link, Outlet} from 'react-router-dom';
import {ReactComponent as WissLogo} from '../../assets/crown.svg';
import './navbar.styles.scss';
import {UserContext} from "../../context/context.user";
import {logoutUser} from "../../utils/firebase/firebase.utils";
const Navbar = () => {
    const {currentUser,setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
      await logoutUser();
        setCurrentUser(null);
    }

    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <WissLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {
                        currentUser ?
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                            :
                            <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
                    }

                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navbar;