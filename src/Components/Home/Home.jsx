import '../Home/home.css'
import imgCam from '../../imgs/sample-2.jpg'
import supportIC from '../../assets/support.png'
import secIC from '../../assets/secq.png'
import retunIc from '../../assets/return.png'
import delivIC from '../../assets/delivICe.png'
import earbirdIMG from '../../imgs/earphone.jpeg'
import watchIMG from '../../imgs/watch.jpeg'
import speakerIMG from '../../imgs/speaker.jpeg'
import Home_Items from '../Home_items/Home_Items'
const Home = () => {
    return (
        <div className=" ">
            <div className='relative mt-3 md:mt-0 '>
                <div className='ml-20'>
                    <img src={imgCam} alt="" />
                </div>
                <div className='md:w-8/12 mx-auto'>
                    <div className='absolute top-0 md:mt-16 mt-3 ml-2 md:ml-0'>
                        <h1 className='md:text-base open-sans-font-sm mobile-small-text '>Oh Snap!</h1>
                        <h1 className='open-sans-bold  md:text-4xl mt-1 md:mt-2 mobile-small-heading '>The Pentax K-50
                            <br />Dslr Camera</h1>
                        <p className='open-sans-font-sms md:text-base mt-1 md:mt-8 mobile-small-text'>Free Shipping On Order $250</p>
                        <button className="mobile-small-button bg-[#0090F0] hover:transition-all hover:cursor-pointer hover:bg-[#0044f0e0] px-3 py-1 sm:px-3 sm:py-1 md:px-5 md:py-2 mt-2 md:mt-8  md:text-base text-white rounded-full">Shop Now</button>
                    </div>
                    {/* facilitys section start*/}
                    <div className='mt-5 border-1 md:flex  border-gray-300 md:h-[80px] '>
                        <div className='flex gap-3 md:mr-2 p-4'>
                            <img src={delivIC} alt="" />
                            <div>
                                <h1 className='text-md font-medium'>Free Shipping</h1>
                                <p className='text-xs text-gray-500'>
                                    On all orders over $75.00
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-3 md:ml-4 md:mr-2 p-4'>
                            <img src={retunIc} alt="" />
                            <div>
                                <h1 className='text-md font-medium'>Free Returns</h1>
                                <p className='text-xs text-gray-500'>
                                    Returns are free within 9 days
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-3 md:ml-4 p-4'>
                            <img src={secIC} alt="" />
                            <div>
                                <h1 className='text-md font-medium'>100% Payment Secure</h1>
                                <p className='text-xs text-gray-500'>
                                    Your payment are safe with us.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-3 md:ml-8 p-4'>
                            <img src={supportIC} alt="" />
                            <div>
                                <h1 className='text-md font-medium'>Support 24/7</h1>
                                <p className='text-xs text-gray-500'>
                                    Contact us 24 hours a day
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* facilitys section  end*/}

                    <div className='mt-5 md:flex md:gap-5'>
                        <img className='w-full md:w-[250px] h-full md:h-[300px]' src={watchIMG} alt="" />
                        <img className='md:mt-0 md:mb-0 mt-5 mb-5 w-[540px] h-[300px]' src={earbirdIMG} alt="" />
                        <img className='h-full w-full md:w-[250px]  md:h-[300px]' src={speakerIMG} alt="" />
                    </div>
                    <div className='mt-8'>
                        <Home_Items></Home_Items>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;