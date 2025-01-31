import '../Home/home.css'
import imgCam from '../../imgs/sample-2.jpg'
const Home = () => {
    return (
        <div className=" ">
            <div className='relative mt-3 md:mt-0 '>
                <div className=''>
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
                </div>
            </div>
        </div>
    );
};

export default Home;