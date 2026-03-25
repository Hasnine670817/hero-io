import { Link } from "react-router-dom";
import ErrorImage from "../assets/images/error-404.png";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center py-14 md:py-20 px-5">
            <img className="max-w-[200px] sm:max-w-[300px] lg:max-w-none mx-auto" src={ErrorImage} alt="Error 404" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#001931] mt-4 mb-2 leading-[1.5]">Oops, page not found!</h2>
            <p className="text-sm md:text-base lg:text-xl text-[#627382]">The page you are looking for is not available.</p>
            <Link to={"/"} className="text-sm lg:text-base py-2 px-4 lg:py-3 lg:px-5 rounded-sm text-white font-semibold mt-4 bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] hover:opacity-80 md:w-[150px] text-center">Go Back!</Link>
        </div>
    );
};

export default ErrorPage;