import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/images/logo.svg"
import { FaGithub } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

const Header = () => {

    const links = (
        <>
            <li>
                <NavLink to={'/'} className='text-[#000000E5] text-base font-medium'>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/apps'} className='text-[#000000E5] text-base font-medium'>Apps</NavLink>
            </li>
            <li>
                <NavLink to={'/installation'} className='text-[#000000E5] text-base font-medium'>Installation</NavLink>
            </li>
        </>
    )

    return (
        <header className='bg-white py-3 md:py-4 border-b border-[#E9E9E9] sticky top-0 z-50'>
            <div className='container-custom'>
                <nav className='hidden lg:flex items-center justify-between'>
                    <div>
                        <Link to={"/"}>
                        <img src={Logo} alt="Logo" /></Link>
                    </div>
                    <ul className='flex flex-wrap gap-8 items-center header-list'>
                        {links}
                    </ul>
                    <div>
                        <Link to={"/"} className="text-sm lg:text-base py-2 px-4 lg:py-2.5 lg:px-4 rounded-sm text-white font-semibold bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] hover:opacity-80 flex items-center gap-2.5"><FaGithub /> Contribute</Link>
                    </div>
                </nav>

                <div className='flex items-center justify-between lg:hidden'>
                    <div>
                        <Link to={"/"}>
                        <img src={Logo} alt="Logo" /></Link>
                    </div>
                    <div className="drawer w-auto">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-1" className="cursor-pointer">
                                <FaBarsStaggered />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-80 p-4 max-w-[250px]">
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;