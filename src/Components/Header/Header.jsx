import '../Header/header.css'
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReactCountryFlag from "react-country-flag"
import { CiSearch } from "react-icons/ci";
import Logo from '../../imgs/Link.png'
const Header = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <div className='mt-4 '>
                {/* top header start*/}
                <div className='flex justify-between'>
                    <p className='open-sans-font text-sm'> Wellcome to our drama store.</p>
                    <div className='flex gap-3 textarea-sm text-[#253237]'>
                        <div className='cursor-pointer flex gap-2 border-r-2 pr-2  hover:text-[#80d4ff] border-gray-200'>
                            <TfiReload className='mt-1' />
                            <p>Compare (0)</p>
                        </div>
                        <div className='cursor-pointer flex gap-2  hover:text-[#80d4ff] border-r-2 pr-2 border-gray-200'>
                            <CiHeart className='text-xl mt-0.5'></CiHeart>
                            <p>Wishlist (0)</p>
                        </div>
                        <div className='cursor-pointer flex border-r-2 pr-2  hover:text-[#80d4ff] border-gray-200'>
                            <p>Setting</p>
                            <MdOutlineKeyboardArrowDown className='text-xl '></MdOutlineKeyboardArrowDown>
                        </div>
                        <div className=' cursor-pointer flex  hover:text-[#80d4ff] border-r-2 pr-2 border-gray-200 '>
                            <p>USD $ </p>
                            <MdOutlineKeyboardArrowDown className='text-xl '></MdOutlineKeyboardArrowDown>
                        </div>
                        <div className='cursor-pointer  hover:text-[#80d4ff] flex gap-1 pr-2'>
                            <ReactCountryFlag
                                className='mt-1 '
                                countryCode="US"
                                svg
                                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                cdnSuffix="svg"
                                title="US"
                            />
                            <p>English </p>
                            <MdOutlineKeyboardArrowDown className='text-xl '></MdOutlineKeyboardArrowDown>
                        </div>
                    </div>
                </div>
                {/* top header end */}
                {/* middle header start */}
                <div className='mt-5'>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        {/* searchber start */}
                        <div className="flex items-center w-[451px] h-10 border-2 border-[#0090F0] rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Enter your search key..."
                                className="w-full ml-3 h-full pl-2 pr-3 text-base bg-transparent focus:outline-none focus:ring-0 border-none"
                            />
                            <div className="flex items-center gap-0.5 whitespace-nowrap cursor-pointer hover:font-medium px-3">
                                <span className="text-sm">All categories</span>
                                <MdOutlineKeyboardArrowDown className="w-5 h-5 mt-0.5" />
                            </div>
                            <div className="h-full flex items-center justify-center px-6 bg-[#0090F0]">
                                <CiSearch className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        {/* searchber end */}
                    </div>
                    <div>

                    </div>
                </div>
                {/* middle header end */}
            </div>
        </div>
    );
};

export default Header;