import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const DataCard = ({item}) => {

    return (
        <div className="bg-white rounded-sm p-4 hover:[box-shadow:0px_10px_20px_-12px_#0000001A] transition-all duration-300 cursor-pointer">
            <div className="h-[316px] bg-[#D9D9D9] rounded-md flex flex-col justify-center items-center">
                <img src={item?.image} alt={item.title} />
            </div>
            <h4 className="my-4 text-xl text-[#001931] font-medium text-start truncate">{item?.title}: {item?.companyName}</h4>

            <div className="flex items-center justify-between">
                <span className="text-base font-medium flex items-center gap-2 py-1.5 px-2.5 bg-[#F1F5E8] rounded-sm text-[#00D390]"><MdOutlineFileDownload /> {Math.floor(item?.downloads / 1000000)}M</span>
                <span className="text-base font-medium flex items-center gap-2 py-1.5 px-2.5 bg-[#FFF0E1] rounded-sm text-[#FF8811]"><FaStar /> {item?.ratingAvg}</span>
            </div>
        </div>
    );
};

export default DataCard;
