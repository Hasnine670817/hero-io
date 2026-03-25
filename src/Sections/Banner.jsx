import { Link } from "react-router-dom";
import GooglePlay from "../assets/images/google-play.svg";
import AppStore from "../assets/images/app-store.svg";
import Hero from "../assets/images/hero.png";

const Banner = () => {
    return (
        <section className="pt-14 lg:pt-20">
            <div className="container-custom">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#001931]">We Build <br /> <span className="text-[#632EE3] font-black">Productive</span> Apps</h1>
                    <p className="text-sm md:text-base lg:text-xl text-[#627382] mt-4 mb-6 md:mb-10 max-w-[990px] mx-auto">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                    <div className="flex items-center gap-4 justify-center">
                        <Link to={"https://play.google.com/"} target="_blank" className="flex items-center gap-2.5 py-3 px-5 border border-[#D2D2D2] rounded-sm text-sm lg:text-xl text-[#001931] font-semibold hover:bg-[#EBEBEB]"><img className="max-w-[20px] md:max-w-none" src={GooglePlay} alt="google play" /> Google Play</Link>
                        <Link to={"https://www.apple.com/"} target="_blank" className="flex items-center gap-2.5 py-3 px-5 border border-[#D2D2D2] rounded-sm text-sm lg:text-xl text-[#001931] font-semibold hover:bg-[#EBEBEB]"><img className="max-w-[20px] md:max-w-none" src={AppStore} alt="app store" /> App Store</Link>
                    </div>

                    <img className="mx-auto mt-10" src={Hero} alt="hero image" />

                    
                </div>
            </div>

            <div className="bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] py-10 lg:py-20 text-center px-5">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Trusted by Millions, Built for You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
                    <div>
                        <p className="text-xs md:text-sm lg:text-base text-white font-normal">Total Downloads</p>
                        <h3 className="text-4xl lg:text-[64px] text-white font-extrabold my-1">29.6M</h3>
                        <p className="text-xs md:text-sm lg:text-base text-white font-normal">21% more than last month</p>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm lg:text-base text-white font-normal">Total Reviews</p>
                        <h3 className="text-4xl lg:text-[64px] text-white font-extrabold my-1">906K</h3>
                        <p className="text-xs md:text-sm lg:text-base text-white font-normal">46% more than last month</p>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm lg:text-base text-white font-normal">Active Apps</p>
                        <h3 className="text-4xl lg:text-[64px] text-white font-extrabold my-1">132+</h3>
                        <p className="text-xs md:text-sm lg:text-base text-white font-normal">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;