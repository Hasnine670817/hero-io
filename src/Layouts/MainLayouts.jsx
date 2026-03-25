
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;