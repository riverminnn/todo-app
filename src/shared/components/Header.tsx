import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.png'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false);
    const toggleProfile = () => {
        setIsShowProfile(!isShowProfile);
    };
    return (
        <header>
            <div className="header-container w-full flex justify-center shadow-md z-1">
                <nav className="nav-bar flex justify-between w-4/5">
                    <Link to='/' className='flex gap-4 items-center'>
                        <img src={Logo} alt='logo'></img>
                        <span className='text-2xl font-bold'>Todo</span>
                    </Link>
                    <div className='flex justify-center items-center *:block *:p-5 *:hover:bg-[#33adff] *:hover:text-white'>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>Home</NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>Dashboard</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>Contact</NavLink>
                    </div>
                    <div className="profile-menu relative flex items-center" onClick={toggleProfile} aria-hidden="true">
                        <img src={Avatar} alt='logo' className='w-12 rounded-full overflow-hidden cursor-pointer'></img>
                        <div className={`profile-dropdown absolute top-full right-0 bg-white shadow-md w-[200px] ${isShowProfile ? "block" : "hidden"}`}>
                            <div className="dropdown-item">
                                <NavLink to="/profile" className={({ isActive }) => `block p-4 hover:bg-[#33adff] hover:text-white hover:rounded-t-md ${isActive ? "bg-blue-500 text-white" : ""}`}>Profile</NavLink>
                            </div>
                            <div className="dropdown-item">
                                <button type='button' className='block w-full p-4 text-left hover:bg-[#33adff] hover:text-white hover:rounded-b-md cursor-pointer'>Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
