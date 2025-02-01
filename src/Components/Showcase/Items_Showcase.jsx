import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import bottleIMG from '../../imgs/bottle.jpeg'
import phone2IMG from '../../imgs/phone.jpeg'
import watchIMG from '../../imgs/watch2.jpeg'
import Blog from "../Blogs/blog";
const Items_Showcase = () => {
    return (
        <div className="mt-10">
            <div className="open-sans-font md:flex md:gap-8 ">
                <div className="w-full h-full md:h-[400px] md:w-[350px] ">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-xl">Audio & Video</h1>
                        <div className="gap-2 flex text-3xl text-gray-400 mt-1">
                            <IoIosArrowDropleft></IoIosArrowDropleft>
                            <IoIosArrowDropright></IoIosArrowDropright>
                        </div>
                    </div>
                    <hr className="w-2/12 mt-2 text-blue-500 border border-t" />
                    <hr className="w-10/12 ml-14.5 text-gray-300 border border-t -mt-[1.4px]" />

                    <div className="mt-4">
                        <div className="flex gap-2">
                            <img src={bottleIMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3"> Juicy Couture Tricot Logo …</h1>
                                <p className="text-gray-500">$9.00</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={phone2IMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3">Trans-Weight Hooded Win…</h1>
                                <p className="text-gray-500">$11.90</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={watchIMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3"> Juicy Couture Juicy Quilted…</h1>
                                <div className="flex gap-2">
                                    <p className="text-gray-500 line-through">$35.90
                                    </p>
                                    <span className="text-red-600">$28.72</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full md:h-[400px] md:w-[350px] ">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-xl">Audio & Video</h1>
                        <div className="gap-2 flex text-3xl text-gray-400 mt-1">
                            <IoIosArrowDropleft></IoIosArrowDropleft>
                            <IoIosArrowDropright></IoIosArrowDropright>
                        </div>
                    </div>
                    <hr className="w-2/12 mt-2 text-blue-500 border border-t" />
                    <hr className="w-10/12 ml-14.5 text-gray-300 border border-t -mt-[1.4px]" />

                    <div className="mt-4">
                        <div className="flex gap-2">
                            <img src={bottleIMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3"> Juicy Couture Tricot Logo …</h1>
                                <p className="text-gray-500">$9.00</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={phone2IMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3">Trans-Weight Hooded Win…</h1>
                                <p className="text-gray-500">$11.90</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={watchIMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3"> Juicy Couture Juicy Quilted…</h1>
                                <div className="flex gap-2">
                                    <p className="text-gray-500 line-through">$35.90
                                    </p>
                                    <span className="text-red-600">$28.72</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full md:h-[400px] md:w-[350px] ">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-xl">Audio & Video</h1>
                        <div className="gap-2 flex text-3xl text-gray-400 mt-1">
                            <IoIosArrowDropleft></IoIosArrowDropleft>
                            <IoIosArrowDropright></IoIosArrowDropright>
                        </div>
                    </div>
                    <hr className="w-2/12 mt-2 text-blue-500 border border-t" />
                    <hr className="w-10/12 ml-14.5 text-gray-300 border border-t -mt-[1.4px]" />

                    <div className="mt-4">
                        <div className="flex gap-2">
                            <img src={bottleIMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3"> Juicy Couture Tricot Logo …</h1>
                                <p className="text-gray-500">$9.00</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={phone2IMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3">Trans-Weight Hooded Win…</h1>
                                <p className="text-gray-500">$11.90</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={watchIMG} alt="" />
                            <div className=" mt-8">
                                <h1 className="text-md mb-3"> Juicy Couture Juicy Quilted…</h1>
                                <div className="flex gap-2">
                                    <p className="text-gray-500 line-through">$35.90
                                    </p>
                                    <span className="text-red-600">$28.72</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Blog></Blog>

        </div>
    );
};

export default Items_Showcase;