
import { Link } from "react-router-dom";
import FooterLogo from "../assets/images/footer-logo.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#001931] pt-[35px] pb-[30px]">
            <div className="container-custom">
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-between items-center border-b border-[#E5E7EB]/20 pb-2">
                    <div>
                        <Link to={"/"}>
                            <img src={FooterLogo} alt="footer logo" />
                        </Link>
                    </div>
                    <div>
                        <h4 className="text-xl text-white font-medium mb-4">Social Links</h4>
                        <ul className="flex gap-4 items-center justify-end text-white text-xl">
                            <li>
                                <Link target="_blank" to={"https://x.com/"} className="hover:opacity-80"><FaSquareXTwitter /></Link>
                            </li>
                            <li>
                                <Link target="_blank" to={"https://www.linkedin.com/"} className="hover:opacity-80"><FaLinkedin /></Link>
                            </li>
                            <li>
                                <Link target="_blank" to={"https://www.facebook.com/"} className="hover:opacity-80"><FaFacebook /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-sm md:text-base text-[#FAFAFA] mt-7 font-normal">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;