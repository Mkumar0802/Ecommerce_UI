import first from '../Assets/1.webp'
import second from '../Assets/2.webp'
import third from '../Assets/3.webp'
import four from '../Assets/4.webp'
import five from '../Assets/5.webp'
import six from '../Assets/6.webp'
import seven from '../Assets/7.webp'
import eight from '../Assets/8.webp'
import nine from '../Assets/9.webp'
import ten from '../Assets/11.webp'
import { Link } from "react-router-dom"

function Footer() {


    return (
        <div>
            <div className="flex  justify-center">
                <h1 className="font-semibold text-xl">
                    Your One-Stop-Shop For All Aquarium Things
                </h1>
            </div>
            <div>
                <p className="pl-10 py-6 whitespace-normal  text-sm md:text-xl    font-semibold font-serif">
                    The primary objective of our team is to provide Healthy pets with professional and authentic knowledge and service for pet lovers. We located in Salem

                    Here, we have dealing Exotic Fishes and tanks with all accessories, Best aqua scaping with Best price, Dealing birds with it's accessories.
                </p>
            </div>
            <div class="py-4">
                <div class="w-full border-t-4 border-black"></div>
            </div>
            <div className="flex justify-center">
                <h1 className="font-semibold text-2xl text-green-700 underline-offset-1">
                    Brand Collaboration
                </h1>
            </div>
            <div className='px-14  py-6'>
                <div className='grid grid-cols-5 gap-7'>

                    <div className="grid-rows grid-flow-col   w-12 h-12       md:w-20 md:h-20   md:flex-col  ">
                        <img src={first} alt="html" />
                    </div>
                    <div className='grid-rows grid-flow-col      w-12 h-12    md:flex-col md:w-20 md:h-20 '>
                        <img src={second} alt="css" />
                    </div>
                    <div className='grid-rows grid-flow-col    w-12 h-12    md:flex-col md:w-20 md:h-20'>
                        <img src={third} alt="js" />
                    </div>
                    <div className='grid-rows grid-flow-col  w-12 h-12   md:flex-col md:w-20 md:h-20'>
                        <img src={four} alt="boot" />
                    </div>

                    <div className='grid-rows grid-flow-col      w-12 h-12    md:flex-col md:w-20 md:h-20'>
                        <img src={five} alt="react" />
                    </div>
                    <div className='grid-rows grid-flow-col   w-12 h-12   md:flex-col md:w-20 md:h-20 '>
                        <img src={six} alt="tailwind" />
                    </div>
                    <div className='grid-rows grid-flow-col   w-12 h-12   md:flex-col md:w-20 md:h-20 '>
                        <img src={seven} alt="tailwind" />
                    </div>
                    <div className='grid-rows grid-flow-col   w-12 h-12   md:flex-col md:w-20 md:h-20 '>
                        <img src={eight} alt="tailwind" />
                    </div>
                    <div className='grid-rows grid-flow-col   w-12 h-12   md:flex-col md:w-20 md:h-20 '>
                        <img src={nine} alt="tailwind" />
                    </div>
                    <div className='grid-rows grid-flow-col   w-12 h-12   md:flex-col md:w-20 md:h-20 '>
                        <img src={ten} alt="tailwind" />
                    </div>


                </div>


            </div>
            <div class="py-4">
                <div class="w-full border-t-4 border-black"></div>
            </div>
            <div className='flex justify-center'>
                <h1 className="font-semibold text-2xl text-green-700 underline-offset-1">
                    Feel Free to Reach us
                </h1>
            </div>
            <div className=" text-black   text-xs md:text-sm py-10 p-5 ">
                <div className="flex grid-cols-6  space-x-10 md:space-x-36 justify-center  ">

                    <div>
                        <ul className="  ">
                            <h1 className="font-semibold whitespace-wrap">
                                Cloning Aqua Pets
                            </h1>
                            <li >
                                <Link to="/">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Link>
                            </li>
                            <li >
                                <Link to="/">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Link>
                            </li>


                            <li className='text-xl space-x-2 grid grid-flow-col-dense'>
                                <span className='text-green-600'><ion-icon name="logo-whatsapp"></ion-icon> </span>
                                <span className='text-red-600'><ion-icon name="logo-youtube"></ion-icon> </span>
                                <span className='text-sky-500'><ion-icon name="logo-twitter"></ion-icon> </span>
                                <span className='text-pink-500'><ion-icon name="logo-instagram"></ion-icon> </span>
                            </li>
                        </ul>





                    </div>
                    <div>
                        <ul className="  ">
                            <h1 className="font-semibold whitespace-wrap">
                                Contact Us
                            </h1>
                            <li>Call us at +919XXXXXXXX, +919XXXXXXX

                            </li>
                            <li>e-mail us at Customercare@cloningaquapets.com</li>
                            <li>
                                Business Hours
                                Monday to Sunday - 10am to 8.30pm
                            </li>
                        </ul>





                    </div>
                </div>
            </div>
            <div className='py-12  flex justify-center'>
                <p className=''>
                    All right reserved@{(new Date().getFullYear())}
                </p>
            </div>
        </div>


    )
}

export default Footer;