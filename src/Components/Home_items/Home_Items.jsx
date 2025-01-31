import '../Home_items/home_items.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import headPhoneIMC from '../../assets/headset.jpeg'
import BheadPhoneIMC from '../../assets/bheadset.jpeg'
import PhoneIMC from '../../assets/phone.jpeg'
import alexaIMG from '../../assets/alexa.jpeg'
import alexa2IMG from '../../assets/alexa-2.jpeg'
import phone2IMG from '../../assets/phone-2.jpeg'
import gameIMG from '../../assets/gameset.jpeg'
import tabImg from '../../assets/tab.jpeg'
import cameraIMG from '../../assets/camera.jpeg'
import TvIMG from '../../assets/tv.jpeg'
import { FaStar } from "react-icons/fa6";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import playGamesIMG from '../../imgs/games.jpeg'
import nikonCamIMG from '../../imgs/NikonCam.jpeg'
import yearphoneIMG from '../../imgs/yearphone.jpeg'

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

                    <div className='mt-8'>
                        <div className='md:flex md:gap-4'>
                            <div className='flex w-full h-full md:w-[300px] md:h-[180px] bg-[#F5F5F5] p-3'>
                                <img src={alexa2IMG} alt="" />
                                <div className='mt-6'>
                                    <h1 className='font-semibold text-md'>Accessories &
                                        Parts</h1>
                                    <span className='mt-2 text-xs text-gray-400'>12 Products</span>
                                    <br />
                                    <span className='mt-2 text-xs text-gray-900 flex gap-1'> Shop Now
                                        <IoMdArrowDroprightCircle className='mt-0.5 text-blue-500'></IoMdArrowDroprightCircle></span>
                                </div>
                            </div>
                            <div className='flex w-full h-full md:w-[300px] md:h-[180px] bg-[#F5F5F5] p-3 '>
                                <img src={phone2IMG} alt="" />
                                <div className='mt-6'>
                                    <h1 className='font-semibold text-md'>Smart
                                        Electronics</h1>
                                    <span className='mt-2 text-xs text-gray-400'>12 Products</span>
                                    <br />
                                    <span className='mt-2 text-xs text-gray-900 flex gap-1'> Shop Now
                                        <IoMdArrowDroprightCircle className='mt-0.5 text-blue-500'></IoMdArrowDroprightCircle></span>
                                </div>
                            </div>
                            <div className='flex w-full h-full md:w-[300px] md:h-[180px] bg-[#F5F5F5] p-3'>
                                <img src={gameIMG} alt="" />
                                <div className='mt-6'>
                                    <h1 className='font-semibold text-md'>Video Games</h1>
                                    <span className='mt-2 text-xs text-gray-400'>12 Products</span>
                                    <br />
                                    <span className='mt-2 text-xs text-gray-900 flex gap-1'> Shop Now
                                        <IoMdArrowDroprightCircle className='mt-0.5 text-blue-500'></IoMdArrowDroprightCircle></span>
                                </div>
                            </div>
                        </div>
                        {/* second */}
                        <div className='md:flex md:gap-4 mt-4'>
                            <div className='flex w-full h-full md:w-[300px] md:h-[180px] bg-[#F5F5F5] p-3'>
                                <img src={tabImg} alt="" />
                                <div className='mt-6'>
                                    <h1 className='font-semibold text-md'>Computer</h1>
                                    <span className='mt-2 text-xs text-gray-400'>12 Products</span>
                                    <br />
                                    <span className='mt-2 text-xs text-gray-900 flex gap-1'> Shop Now
                                        <IoMdArrowDroprightCircle className='mt-0.5 text-blue-500'></IoMdArrowDroprightCircle></span>
                                </div>
                            </div>
                            <div className='flex w-full h-full md:w-[300px] md:h-[180px] bg-[#F5F5F5] p-3'>
                                <img src={cameraIMG} alt="" />
                                <div className='mt-6'>
                                    <h1 className='font-semibold text-md'>Camera & Photo</h1>
                                    <span className='mt-2 text-xs text-gray-400'>12 Products</span>
                                    <br />
                                    <span className='mt-2 text-xs text-gray-900 flex gap-1'> Shop Now
                                        <IoMdArrowDroprightCircle className='mt-0.5 text-blue-500'></IoMdArrowDroprightCircle></span>
                                </div>
                            </div>
                            <div className='flex w-full h-full md:w-[300px] md:h-[180px] bg-[#F5F5F5] p-3'>
                                <img src={TvIMG} alt="" />
                                <div className='mt-6'>
                                    <h1 className='font-semibold text-md'>Televisions</h1>
                                    <span className='mt-2 text-xs text-gray-400'>12 Products</span>
                                    <br />
                                    <span className='mt-2 text-xs text-gray-900 flex gap-1'> Shop Now
                                        <IoMdArrowDroprightCircle className='mt-0.5 text-blue-500'></IoMdArrowDroprightCircle></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* more feature div */}
                    <div className='mt-10'>
                        {/* hr start */}
                        <div className="flex justify-between">
                            <div className=''>
                                <h1 className='font-semibold text-xl'>Featured products</h1>
                                <p className='mt-2 text-gray-400 text-xs'>Add featured products to weekly line up</p>
                            </div>
                            <div className='flex mt-4 gap-2 text-3xl mr-6'>
                                <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
                                <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                            </div>
                        </div>
                        <div className='mr-[900px] mt-2 '>
                            <hr className='border-t-2  text-blue-500' />
                        </div>
                        <hr className='ml-14 border-t-2 -mt-[1.5px] text-gray-300  mb-4' />
                        {/* hr end */}
                        <div className='md:flex mt-12 '>
                            <div className="relative">
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={alexaIMG} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={alexaIMG} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={PhoneIMC} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={headPhoneIMC} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={BheadPhoneIMC} alt="" />
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
                        <div className='md:flex mt-12'>
                            <div className="relative">
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={alexaIMG} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={alexaIMG} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={PhoneIMC} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={headPhoneIMC} alt="" />
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
                                <img className='h-full w-full md:h-[200px] md:w-[200px]' src={BheadPhoneIMC} alt="" />
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
                    {/* more feature div end */}

                    <div className='md:flex md:gap-4 mt-10 mb-10'>
                        <img className='h-full w-full md:w-[305px] md:h-[299px]' src={playGamesIMG} alt="" />
                        <img className='h-full w-full md:w-[305px] md:h-[299px]' src={nikonCamIMG} alt="" />
                        <img className='h-full w-full md:w-[305px] md:h-[299px]' src={yearphoneIMG} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home_Items;