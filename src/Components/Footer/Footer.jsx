import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import { TfiInstagram } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { FaCopyright } from "react-icons/fa";
import paymentIMG from '../../assets/payment.png'
import '../Footer/footer.css'
const Footer = () => {
    return (
        <div className="mt-30 open-sans-font open-sans-font hidden md:block">
            <div className="bg-[#0090F0] h-[100px]">
                <div className="md:w-8/12 mx-auto">
                    <div className="md:flex md:gap-12">
                        <div className=" pt-5">
                            <h1 className="text-2xl text-white tracking-wide">Sign Up For Newsletters</h1>
                            <p className=" tracking-wide mt-2 text-white text-sm">Be the First to Know. Sign up for newsletter today !</p>
                        </div>
                        <div className="md:w-[450px] md:h-[40px] mt-9 rounded-full bg-white flex">
                            <input className="md:w-[450px] md:h-[40px] focus:outline-none p-4 border-none " placeholder="Your email address.." type="text" />
                            <div className="md:w-[87px] md:h-[40px] bg-gray-800 rounded-r-full">
                                <p className="text-white mt-2 text-sm text-center">Sign Up</p>
                            </div>
                        </div>
                        <div className="md:flex md:gap-4 text-xl mt-11 text-white">
                            <FaFacebookF></FaFacebookF>
                            <FaXTwitter></FaXTwitter>
                            <FaYoutube></FaYoutube>
                            <LiaGoogle></LiaGoogle>
                            <TfiInstagram></TfiInstagram>
                        </div>
                    </div>
                    {/* contact start  */}
                    <div className="mt-16 md:flex md:gap-20">
                        <div className="flex gap-2">
                            <CiLocationOn className="text-6xl"></CiLocationOn>
                            <div>
                                <h1 className="font-bold mt-2">
                                    4710-4890 Breckinridge St, USK
                                </h1>
                                <p className="text-sm mt-1 text-[#888888]">Contact Info!</p>
                            </div>
                        </div>


                        <div>

                            <div className="flex gap-2">
                                <TfiEmail className="text-5xl font-medium"></TfiEmail>
                                <div>
                                    <h1 className="font-bold ">
                                        demo@posthemes.com
                                    </h1>
                                    <p className="text-sm mt-1 text-[#888888]">Orders Support!</p>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex gap-2">
                                <LuPhone className="text-4xl font-medium"></LuPhone>
                                <div>
                                    <h1 className="font-bold">
                                        +1 (123) 888 9999, +1 (678) 777 8888
                                    </h1>
                                    <p className="text-sm mt-1 text-[#888888]">Orders Support!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* contact end */}
                    <div className=" flex gap-18 w-full">
                        <div className="pt-15">
                            <div>
                                <h1 className="font-semibold">Information</h1>
                                <hr className="w-full  md:w-[60px] mt-2 text-blue-500 border border-t" />
                                <hr className=" w-[150px] ml-15 text-gray-300 border border-t -mt-[2px]" />
                            </div>
                            <div className="text-md mt-8">
                                <p className="mt-2.5 text-[#666666]">Delivery</p>
                                <p className="mt-2.5 text-[#666666]">About us</p>
                                <p className="mt-2.5 text-[#666666]">Secure payment</p>
                                <p className="mt-2.5 text-[#666666]">Contact us</p>
                                <p className="mt-2.5 text-[#666666]">Sitemap</p>
                                <p className="mt-2.5 text-[#666666]">Stores</p>
                            </div>
                        </div>
                        <div className="pt-15">
                            <div>
                                <h1 className="font-semibold">Products</h1>
                                <hr className="w-full  md:w-[60px] mt-2 text-blue-500 border border-t" />
                                <hr className=" w-[150px] ml-15 text-gray-300 border border-t -mt-[2px]" />
                            </div>
                            <div className="text-md mt-8">
                                <p className="mt-2.5 text-[#666666]">Legal Notice</p>
                                <p className="mt-2.5 text-[#666666]">Prices drop</p>
                                <p className="mt-2.5 text-[#666666]">New products</p>
                                <p className="mt-2.5 text-[#666666]">Best sales</p>
                                <p className="mt-2.5 text-[#666666]">Login</p>
                                <p className="mt-2.5 text-[#666666]">My account</p>
                            </div>
                        </div>
                        <div className="pt-15">
                            <div>
                                <h1 className="font-semibold">My Account</h1>
                                <hr className="w-full  md:w-[60px] mt-2 text-blue-500 border border-t" />
                                <hr className=" w-[150px] ml-15 text-gray-300 border border-t -mt-[2px]" /></div>
                            <div className="text-md mt-8">
                                <p className="mt-2.5 text-[#666666]">Personal info</p>
                                <p className="mt-2.5 text-[#666666]">Orders</p>
                                <p className="mt-2.5 text-[#666666]">Credit slips</p>
                                <p className="mt-2.5 text-[#666666]">Addresses</p>
                            </div>
                        </div>
                        <div className="pt-15">
                            <div>
                                <h1 className="font-semibold">Useful Links</h1>
                                <hr className="w-full  md:w-[60px] mt-2 text-blue-500 border border-t" />
                                <hr className=" w-[150px] ml-15 text-gray-300 border border-t -mt-[2px]" /> </div>
                            <div className="text-md mt-8">
                                <p className="mt-2.5 text-[#666666]">Terms & Conditions</p>
                                <p className="mt-2.5 text-[#666666]">Exchanges</p>
                                <p className="mt-2.5 text-[#666666]">Privacy Policy</p>
                                <p className="mt-2.5 text-[#666666]">Help</p>
                                <p className="mt-2.5 text-[#666666]">Customer Service</p>
                                <p className="mt-2.5 text-[#666666]">Support</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="mt-10 h-15 bg-[#F7F7F7]">
                    <div className="w-8/12 mx-auto pt-5 flex justify-between">
                        <div className="flex">
                            <span className="text-[#888888] text-sm">Copyright </span>
                            <FaCopyright className="text-[#888888] mt-1 text-sm ml-1 mr-1"></FaCopyright>
                            <p className="text-black text-sm">Posthemes</p>
                            <span className="text-[#888888] text-sm">. All Rights Reserved</span>
                        </div>
                        <div>
                            <img src={paymentIMG} alt="" />
                        </div>
                    </div>
                    <h1 className="playwrite-in text-md text-center text-[#575656] mt-16 pb-10">Developed by Shabbir Ahamed</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;