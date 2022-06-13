import { Link } from "react-router-dom"
import Food from "../Assets/foods.jpg"
import light from "../Assets/light.jpg"
import Toy from "../Assets/toys.jpg"
import Plants from "../Assets/plants.jpg"
import Acc from "../Assets/acc.jpg"
// import Tanks from "../Assets/tanks.jpg"

function Products() {

    return (
        <div className="sm:p-10   md:pl-14 md:py-20  py-9 justify-center relative bg-slate-400  ">

            <div className="  pr-10  mx-10  grid grid-cols-2   md:grid-cols-4 gap-5   ">
                <div className=" border-1  rounded-md">
                    <div className="p-1  bg-black  rounded-lg  max-w-sm  sm:rounded-lg  ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={Food}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1  bg-black hover:bg-gray-700 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/food">Food and Pellents </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div className="p-1  bg-black  rounded-lg  max-w-sm  sm:rounded-lg  ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={light}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1  bg-black hover:bg-gray-700 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/light">Light </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className=" border-1  rounded-md">
                    <div className="p-1  bg-black  rounded-lg  max-w-sm  sm:rounded-lg  ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={Toy}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1  bg-black hover:bg-gray-700 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/toys">Toys and Decors</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div className="p-1  bg-black  rounded-lg  max-w-sm  sm:rounded-lg  ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={Acc}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1  bg-black hover:bg-gray-700 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/light">Accessories</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div className="p-1  bg-black  rounded-lg  max-w-sm  sm:rounded-lg  ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="plant"
                            src={Plants}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1  bg-black hover:bg-gray-700 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/plants">Plants </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>

    )
}


export default Products