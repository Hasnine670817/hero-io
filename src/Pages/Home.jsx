import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Banner from "../Sections/Banner";
import TrendingApps from "../Sections/TrendingApps";

const Home = () => {

    const { loading } = useContext(AppContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-red-600"></span>
            </div>
        );
    }

    return (
        <main>
            {/* banner section */}
            <Banner></Banner>

            {/* Trending Apps */}
            <TrendingApps></TrendingApps>
        </main>
    );
};

export default Home;