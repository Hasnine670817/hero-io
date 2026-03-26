import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { AppContext } from "../Context/AppContext";
import DownloadIcon from "../assets/images/download.svg";
import StarIcon from "../assets/images/star.svg";
import LikeIcon from "../assets/images/like.svg";

const AppDetails = () => {
    const { data, installedApps, handleInstallButton } = useContext(AppContext);
    const { id } = useParams();

    
    const app = data.find((item) => item.id === Number(id));
    // const [installed, setInstalled] = useState(false);

    const isInstalled = installedApps.find(item => item.id === app.id);

    if (!app) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-red-600"></span>
            </div>
        );
    }

    const chartData = app.ratings
        .slice()
        .reverse() // 5 star first
        .map((item) => ({
            name: item.name,
            value: item.count,
        }));

    return (
        <section className="py-10 lg:py-20">
            <div className="container-custom">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-[300px_auto] lg:grid-cols-[350px_auto] gap-5 lg:gap-10">
                    
                    {/* Left Image */}
                    <div className="h-[350px] bg-white rounded-md flex items-center justify-center">
                        <img className="max-h-full" src={app.image} alt={app.title} />
                    </div>

                    {/* Right Info */}
                    <div>
                        <h2 className="text-2xl lg:text-[32px] font-bold">{app.title}: {app.companyName}</h2>
                        <p className="text-[#627382] text-lg lg:text-xl">Developed by <span className="font-semibold text-[#632EE3]">{app.companyName}</span></p>

                        <hr className="bg-[#001931] opacity-20 my-[30px]" />

                        <div className="flex gap-6 lg:gap-10">
                            <div>
                                <img className="max-w-[35px] md:max-w-none" src={DownloadIcon} alt="download icon" />
                                <p className="text-[#001931] text-sm lg:text-base my-2">Downloads</p>
                                <h4 className="text-3xl lg:text-[40px] font-extrabold text-[#001931]">
                                    {Math.floor(app.downloads / 1000000)}M
                                </h4>
                            </div>

                            <div>
                                <img className="max-w-[35px] md:max-w-none" src={StarIcon} alt="star icon" />
                                <p className="text-[#001931] text-sm lg:text-base my-2">Average Rating</p>
                                <h4 className="text-3xl lg:text-[40px] font-extrabold text-[#001931]">{app.ratingAvg}</h4>
                            </div>

                            <div>
                                <img className="max-w-[35px] md:max-w-none" src={LikeIcon} alt="like icon" />
                                <p className="text-[#001931] text-sm lg:text-base my-2">Total Reviews</p>
                                <h4 className="text-3xl lg:text-[40px] font-extrabold text-[#001931]">
                                    {Math.floor(app.reviews / 1000)}K
                                </h4>
                            </div>
                        </div>

                        {/* Install Button */}
                        <button 
                            onClick={() => handleInstallButton(app)} 
                            disabled={isInstalled}
                            className={`mt-6 px-5 py-3 rounded text-white text-xl font-semibold transition-all duration-300
                            ${isInstalled 
                                ? "bg-gray-400 cursor-not-allowed" 
                                : "bg-[#00D390] hover:bg-green-600"
                            }`}
                        >
                            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                <hr className="bg-[#001931] opacity-20 my-5 lg:my-[30px]" />

                {/* Chart Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3 lg:mb-6 text-[#001931]">Ratings</h3>

                    <div className="w-full h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                        >
                            <XAxis type="number" axisLine={false} tickLine={false} />
                            <YAxis
                            type="category"
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            />
                            <Tooltip />
                            <Bar
                            dataKey="value"
                            fill="#FF8811"
                            radius={[0, 0, 0, 0]}
                            barSize={32}
                            />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <hr className="bg-[#001931] opacity-20 my-5 lg:my-[30px]" />

                {/* Description */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3 lg:mb-6 text-[#001931]">Description</h3>
                    <p className="text-[#627382] text-sm lg:text-xl lg:leading-7">{app.description}</p>
                </div>
            </div>
        </section>
    );
};

export default AppDetails;