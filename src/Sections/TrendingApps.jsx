import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import DataCard from "../Components/DataCard";
import { Link } from "react-router-dom";

const TrendingApps = () => {

    const { data } = useContext(AppContext);
    
    const slideData = data.slice(0, 8);

    return (
        <section className="py-10 lg:py-20">
            <div className="container-custom">
                <div className="text-center">
                    <h2 className="text-[#001931] text-3xl md:text-4xl lg:text-5xl font-bold">Trending Apps</h2>
                    <p className="text-sm md:text-base lg:text-xl text-[#627382] mt-4 mb-6 md:mb-10">Explore All Trending Apps on the Market developed by us</p>

                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {
                            slideData.map((item, idx) => <DataCard item={item} key={idx}></DataCard>)
                        }
                    </div>

                    <div className="text-center mt-10">
                        <Link to={"/apps"} className="text-sm lg:text-base py-2 px-4 lg:py-3 lg:px-5 rounded-sm text-white font-semibold bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] hover:opacity-80 md:w-[150px] text-center">Show All</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;