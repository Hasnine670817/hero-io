import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import AppError from "../assets/images/app-error.png";
import { Link } from "react-router-dom";

const Installation = () => {

    const { installedApps, handleUninstallButton } = useContext(AppContext);

    const [sortType, setSortType] = useState("");

    let sortedApps = [...installedApps];

    if (sortType === "high") {
        sortedApps.sort((a, b) => b.size - a.size);
    }

    if (sortType === "low") {
        sortedApps.sort((a, b) => a.size - b.size);
    }

    return (
        <section className="py-10 lg:py-20">
            <div className="container-custom">
                <div className="text-center">
                    <h2 className="text-[#001931] text-3xl md:text-4xl lg:text-5xl font-bold">Your Installed Apps</h2>
                    <p className="text-sm md:text-base lg:text-xl text-[#627382] mt-4 mb-6 md:mb-10">Explore All Trending Apps on the Market developed by us</p>

                    <div className="flex flex-wrap gap-4 items-center justify-between mb-5">
                        <p className="text-lg lg:text-2xl font-semibold text-[#001931]">{installedApps.length} Apps Found</p>
                        <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="select w-[150px] h-11 border-[#D2D2D2] text-base text-[#627382]">
                            <option value="">Sort By Size</option>
                            <option value="high">High-Low</option>
                            <option value="low">Low-High</option>
                        </select>
                    </div>
                </div>

                {sortedApps.length === 0 ? (
                    <div className="flex flex-col justify-center items-center py-14 md:py-20 px-5">
                            <img className="max-w-[200px] sm:max-w-[300px] lg:max-w-none mx-auto" src={AppError} alt="Error 404" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#001931] mt-4 mb-2 leading-[1.5]">OPPS!! APP NOT FOUND</h2>
                            <p className="text-sm md:text-base lg:text-xl text-[#627382]">You don't have any apps installed.</p>
                            <Link to={"/"} className="text-sm lg:text-base py-2 px-4 lg:py-3 lg:px-5 rounded-sm text-white font-semibold mt-4 bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] hover:opacity-80 md:w-[150px] text-center">Go Back!</Link>
                        </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {sortedApps.map((app) => (
                            <div key={app.id} className="p-4 rounded-sm bg-white flex gap-4 items-center flex-wrap justify-between">
                                <div className="flex gap-4 items-center flex-wrap">
                                    <div className="w-20 h-20 p-4 rounded-md bg-[#D9D9D9]">
                                        <img src={app?.image} alt={app?.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium text-[#001931] mb-4">{app?.title}: {app?.companyName}</h4>
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <span className="text-base font-medium flex items-center gap-1 text-[#00D390]"><MdOutlineFileDownload /> {Math.floor(app?.downloads / 1000000)}M</span>
                                            <span className="text-base font-medium flex items-center gap-1 text-[#FF8811]"><FaStar /> {app?.ratingAvg}</span>
                                            <span className="text-base font-normal text-[#627382]">{app?.size} MB</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleUninstallButton(app.id)} type="button" className="text-base font-semibold text-white py-2.5 px-4 bg-[#00D390] hover:bg-[#04e49d] rounded-sm">Uninstall</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Installation;