import '../Header/header.css'
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReactCountryFlag from "react-country-flag"
import { CiSearch } from "react-icons/ci";
import Logo from '../../imgs/Link.png'
import csIcon from '../../assets/cs.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className='w-8/12 mx-auto open-sans-font'>
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
                    <div className='mt-6 flex space-x-15'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div className='mt-2'>
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
                        {/* contact us start */}
                        <div className=' flex gap-2 mt-1 '>
                            <div>
                                <img src={csIcon} alt="" />
                            </div>
                            <div className='textarea-md'>
                                <div className='flex'>
                                    <div className='flex'>
                                        <h1 className='font-semibold'>Call us: </h1>
                                        <p className='text-blue-400 ml-1'>+1(123)8889999</p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        demo@posthemes.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* contact us end */}
                    </div>
                    {/* middle header end */}

                </div>
            </div>

            {/* last header  start*/}
            <div className='mt-5 h-[50px] w-full bg-[#0090F0CC]'>
                <div className='w-8/12 mx-auto open-sans-font '>
                    <div className='flex gap-1 text-white open-sans-bold textarea-md '>
                        <Link className=' p-3.5 hover:bg-[#0483D7]'>Home</Link>
                        <Link className='flex p-3.5 hover:bg-[#0483D7]'>Electronics
                            <MdOutlineKeyboardArrowDown className='text-xl mt-0.5'></MdOutlineKeyboardArrowDown>
                        </Link>
                        <Link className='flex p-3.5 hover:bg-[#0483D7]'>Women’s Clothing
                            <MdOutlineKeyboardArrowDown className='text-xl mt-0.5'></MdOutlineKeyboardArrowDown>
                        </Link>
                        <Link className='p-3.5 hover:bg-[#0483D7]'>Computer</Link>
                        <Link className='p-3.5 hover:bg-[#0483D7]'>Jewelry & Watches</Link>
                        <Link className='flex p-3.5 hover:bg-[#0483D7]'>Custom Menu
                            <MdOutlineKeyboardArrowDown className='text-xl mt-0.5'></MdOutlineKeyboardArrowDown>
                        </Link>
                    </div>
                </div>
            </div>
            {/* last header end */}
        </div>
    );
};

export default Header;