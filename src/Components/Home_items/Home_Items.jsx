import '../Home_items/home_items.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import headPhoneIMC from '../../assets/headset.jpeg'
import BheadPhoneIMC from '../../assets/bheadset.jpeg'
import PhoneIMC from '../../assets/phone.jpeg'
import alexaIMG from '../../assets/alexa.jpeg'
import { FaStar } from "react-icons/fa6";
const Home_Items = () => {
    return (
        <div>
            <div className='open-sans-font'>
                <div className="flex gap-5">
                    <div className=''>
                        <h1 className='font-semibold text-xl'>New Arraivals</h1>
                        <p className='mt-2 text-gray-400 text-xs'>Valid on select styles online and in-store supplies last</p>
                    </div>
                    <div>
                        <div className='md:flex md:gap-4 text-xs md:ml-48 mt-7'>
                            <p className='text-[#0090F0]'>Accessories & Parts</p>
                            <p>
                                Portable Audio & Video
                            </p>
                            <p>Video Games</p>
                        </div>
                    </div>
                    <div className='flex mt-4 gap-2 text-3xl ml-4'>
                        <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
                        <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                    </div>
                </div>
                {/* hr start */}
                <div className='mr-[900px] mt-2 '>
                    <hr className='border-t-2  text-blue-500' />
                </div>
                <hr className='ml-14 border-t-2 -mt-[1.5px] text-gray-300  mb-4' />
                {/* hr end */}

                <div className='mt-8'>
                    <div className='md:flex'>
                        <div className="relative">
                            <img className='h-full w-full md:h-[250px] md:w-[250px]' src={alexaIMG} alt="" />
                            <span className="absolute top-0 left-0 bg-[#0090F0] text-white text-xs px-2 py-1 rounded-full">NEW</span>
                            <p className='text-xs text-gray-900 text-center'>Water and Wind Resistant Insul…</p>
                            <div className='flex justify-center mt-2'>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className=' text-gray-300'></FaStar>
                                <FaStar className=' text-gray-300'></FaStar>
                            </div>
                            <div className='mt-3'>
                                <p className='text-center text-gray-600 text-xs'>$11.90</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img className='h-full w-full md:h-[250px] md:w-[250px]' src={PhoneIMC} alt="" />
                            <span className="absolute top-0 left-0 bg-[#0090F0] text-white text-xs px-2 py-1 rounded-full">NEW</span>
                            <p className='text-xs text-gray-900 text-center'>Trans-Weight Hooded Wind and…</p>
                            <div className='flex justify-center mt-2'>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className=' text-gray-300'></FaStar>
                                <FaStar className=' text-gray-300'></FaStar>
                            </div>
                            <div className='mt-3'>
                                <p className='text-center text-gray-600 text-xs'>$11.90</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img className='h-full w-full md:h-[250px] md:w-[250px]' src={headPhoneIMC} alt="" />
                            <span className="absolute top-0 left-0 bg-red-700 text-white text-xs px-2 py-1 rounded-full">-20%</span>
                            <p className='text-xs text-gray-900 text-center'>Originals Kaval Windbreaker Wi…</p>
                            <div className='flex justify-center mt-2'>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className=' text-yellow-400'></FaStar>
                                <FaStar className=' text-yellow-400'></FaStar>
                            </div>
                            <div className='mt-3'>
                                <p className='text-center text-red-600 text-xs'><span className='text-gray-500 line-through mr-2'>$23.12</span>$19.90</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img className='h-full w-full md:h-[250px] md:w-[250px]' src={BheadPhoneIMC} alt="" />
                            <span className="absolute top-0 left-0 bg-[#0090F0] text-white text-xs px-2 py-1 rounded-full">NEW</span>
                            <p className='text-xs text-gray-900 text-center'>New Balance Fresh Foam LAZR …</p>
                            <div className='flex justify-center mt-2'>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className=' text-yellow-400'></FaStar>
                                <FaStar className=' text-yellow-400'></FaStar>
                            </div>
                            <div className='mt-3'>
                                <p className='text-center text-gray-600 text-xs'>$11.90</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Home_Items;