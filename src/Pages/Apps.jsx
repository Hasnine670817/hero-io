import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import DataCard from "../Components/DataCard";
import { IoSearchOutline } from "react-icons/io5";
import AppError from "../assets/images/app-error.png";
import { Link } from "react-router-dom";

const Apps = () => {

    const { data } = useContext(AppContext);

    const [search, setSearch] = useState("");

    // filter apps by title (case insensitive)
    const filteredApps = data.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleClearInputValue = () => {
        setSearch("");
    }

    return (
        <section className="py-10 lg:py-20">
            <div className="container-custom">
                <div className="text-center">
                    <h2 className="text-[#001931] text-3xl md:text-4xl lg:text-5xl font-bold">Our All Applications</h2>
                    <p className="text-sm md:text-base lg:text-xl text-[#627382] mt-4 mb-6 md:mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>

                    <div className="flex flex-wrap gap-4 items-center justify-between mb-5">
                        <p className="text-lg lg:text-2xl font-semibold text-[#001931]">({filteredApps.length}) Apps Found</p>
                        <form className="w-full md:w-[400px]">
                            <label className="block relative">
                                <input onChange={(e) => setSearch(e.target.value)} value={search} className="w-full border border-[#D2D2D2] py-2.5 px-4 rounded-sm ps-11 text-base focus-within:border-[#9F62F2]" type="search" name="search" id="search" placeholder="search Apps" />
                                <span className="absolute left-3.5 top-3 text-2xl text-[#627382]"><IoSearchOutline /></span>
                            </label>
                        </form>
                    </div>

                    {filteredApps.length === 0 ? (
                        <div className="flex flex-col justify-center items-center py-14 md:py-20 px-5">
                            <img className="max-w-[200px] sm:max-w-[300px] lg:max-w-none mx-auto" src={AppError} alt="Error 404" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#001931] mt-4 mb-2 leading-[1.5]">OPPS!! APP NOT FOUND</h2>
                            <p className="text-sm md:text-base lg:text-xl text-[#627382]">The App you are requesting is not found on our system.  please try another apps</p>
                            <Link onClick={handleClearInputValue} className="text-sm lg:text-base py-2 px-4 lg:py-3 lg:px-5 rounded-sm text-white font-semibold mt-4 bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] hover:opacity-80 md:w-[150px] text-center">Go Back!</Link>
                        </div>
                    ) : (
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            {
                                filteredApps.map((item, idx) => <DataCard item={item} key={idx}></DataCard>)
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Apps;