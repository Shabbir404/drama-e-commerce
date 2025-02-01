import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import blog1IMG from '../../imgs/blog1.jpeg'
import blog2IMG from '../../imgs/blog-2.jpeg'
import blog3IMG from '../../imgs/blog-3.jpeg'
import { Link } from "react-router";
import '../Blogs/blog.css'
const Blog = () => {
    return (
        <div className="open-sans-font">
            <div className="mt-25 mb-8">
                <div className="flex justify-between">
                    <div>
                        <h1 className="open-sans-bold text-xl">From Our Blog</h1>
                        <p className="text-sm mt-2 text-[#888888]">The latest news, videos, and discussion topics</p>
                    </div>
                    <div className="gap-2 flex text-3xl text-gray-400 mt-5">
                        <IoIosArrowDropleft></IoIosArrowDropleft>
                        <IoIosArrowDropright></IoIosArrowDropright>
                    </div>
                </div>
                <hr className="w-full md:w-[120px] mt-2 text-blue-500 border border-t" />
                <hr className=" ml-30 text-gray-300 border border-t -mt-[1.8px]" />
            </div>
            <div className="md:flex md:gap-2 mt-10">
                <div className="w-full h-full md:p-0 p-2  md:w-[395px] md:h-[450px]">
                    <div>
                        <img className="w-full" src={blog1IMG} alt="" />
                    </div>
                    <div className="flex md:text-sm gap-0.5 italic mt-4">
                        <p className="md:text-md text-gray-400">Posted by</p>
                        <div className="md:text-md ">
                            <span className="text-[#0090F0]">Demo Posthemes</span>
                            <span className="text-gray-400"> / Jun 30TH, 2019</span>
                            <span className="text-[#0090F0]">
                                <span className="text-gray-400"> /</span> Fashion
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className="open-sans-bold text-xl mt-4">This is Secound Post For XipBlog</h1>
                        <p className="text-[#666666]  mt-5">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when ...
                        </p>
                        <div className="mt-5">
                            <Link className="text-[#0090F0] text-md">Read more..</Link>
                        </div>
                    </div>

                </div>
                <div className="w-full h-full md:p-0 p-2  md:w-[395px] md:h-[450px]">
                    <div>
                        <img className="w-full" src={blog2IMG} alt="" />
                    </div>
                    <div className="flex gap-0.5 text-sm italic mt-4">
                        <p className="text-md text-gray-400">Posted by</p>
                        <div className="text-md ">
                            <span className="text-[#0090F0]">Demo Posthemes</span>
                            <span className="text-gray-400"> / Jun 30TH, 2019</span>
                            <span className="text-[#0090F0]">
                                <span className="text-gray-400"> /</span> Fashion
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className="open-sans-bold text-xl mt-4">This is Secound Post For XipBlog</h1>
                        <p className="text-[#666666]  mt-5">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when ...
                        </p>
                        <div className="mt-5">
                            <Link className="text-[#0090F0] text-md">Read more..</Link>
                        </div>
                    </div>

                </div>
                <div className="w-full h-full md:p-0 p-2  md:w-[395px] md:h-[450px]">
                    <div>
                        <img className="w-full" src={blog3IMG} alt="" />
                    </div>
                    <div className="flex gap-0.5 text-sm italic mt-4">
                        <p className="text-md text-gray-400">Posted by</p>
                        <div className="text-md ">
                            <span className="text-[#0090F0]">Demo Posthemes</span>
                            <span className="text-gray-400"> / Jun 30TH, 2019</span>
                            <span className="text-[#0090F0]">
                                <span className="text-gray-400"> /</span> Fashion
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className="open-sans-bold text-xl mt-4">This is Secound Post For XipBlog</h1>
                        <p className="text-[#666666]  mt-5">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when ...
                        </p>
                        <div className="mt-5">
                            <Link className="text-[#0090F0] text-md">Read more..</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;