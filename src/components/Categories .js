import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link,Outlet } from "react-router-dom";
// import {url} from "../components/Url/index";


 
const Catagories = () => {
 
    const [productList, SetProductList] = useState([]);
    console.log(productList);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(`http://localhost:4000/categories/getall`);
          
            SetProductList(response);
        } catch (err) {
            console.error(err.message);
        }

    };

    useEffect(() => {
        getData();
    }, []);


    return (

        <div className="w-auto h-auto bg-slate-700  ">
            <div>
                <h2 className="px-16 pt-5  text-xl   md:text-2xl font-bold text-white  ">Product Catagories</h2>
            </div>

            <div className=" pr-10  mx-10   sm:grid-flow-grid-cols-2   md:grid-cols-5 gap-5      lg:grid grid-cols-5 ">
                {productList.map((val) => {
                    return (
                        <div className="p-1 mr-2  m-5  bg-white text-black  rounded-lg  max-w-sm  sm:rounded-lg  " key={val.index}>
                            <img
                                className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                                alt="Movies"
                                src={`http://localhost:4000/uploads/categories/${val.cImage}`}
                            ></img>
                            <div className="p-2">
                                
                                <button className="text-base md:text-lg font-bold"><Link to = "/">{val.name} </Link><Outlet/></button> 

                            </div>

                        </div> 


                    );
                })}
            </div>

        </div>




    );
};





export default Catagories;