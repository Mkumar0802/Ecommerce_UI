
import better from "../Assets/wallpaperbetter.webp"

import React from 'react'
import { Link } from "react-router-dom";


function Main() {
   

   
    return (
        <div>
            <div className=" w-auto bg-gray-500 p-5 flex " >
                <div className="ml-14">
                    <h1 className="text-white text-3xl font-mono" >
                        <Link to="/">Aqua Pets </Link>
                    </h1>
                </div>

                <div className="md:hidden sm:hidden lg:block justify-start hidden ">
                    <div class="flex  flex-col justify-center ml-96 ">
                        <div class="mb-3 w-96">
                            <div class="input-group relative flex  items-stretch w-full mb-4">
                                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-500-600 focus:outline-none" placeholder=" Aquascaping tools gadgets" aria-label="Search" aria-describedby="button-addon2" />
                                <button class="btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-500-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-10">
                     
                       
                            <div className="  md:text-xl border-2 p-1  rounded-md bg-gray-700 text-white hover:bg-blue-200 hidden md:block ">   <Link to="/login">Login</Link></div>
                        
                   
                </div>
                <div className="mx-auto text-white sm:text-xl  md:text-2xl">
                    <Link to="/cart"><ion-icon name="cart-outline"></ion-icon></Link>
                </div>

            </div>
            <div className="w-full h-full" >
                <img src={better} alt="muthukumar" />

            </div>

        </div>
    )

}



export default Main;