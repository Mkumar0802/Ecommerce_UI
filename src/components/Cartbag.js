import React from "react";
import { useEffect, useState } from 'react';
// import { Link, Outlet } from "react-router-dom";
// import { cart } from '../features/cart'
// import { useDispatch } from "react-redux";
// import {cart} from '../features/cart'
import axios from "axios";
import { URLDevelopment } from "./helpers/URL";

import useRazorpay from "react-razorpay";


function Cartbag() {
    // const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    // const [id, setID] = useState(null);
    // const[total,setTotal] =useState('');


    useEffect(() => {
        // setID(localStorage.getItem('id'))
        setName(localStorage.getItem('name'));
        setPhoto(localStorage.getItem('photo'));
        setPrice(localStorage.getItem('price'));



    }, [])


    const Razorpay = useRazorpay();

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_coemrweGrm2ve0",
            amount: data.amount,
            currency: data.currency,
            name: name,
            description: "Test Transaction",
            image: photo,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = `${URLDevelopment}payment/verify`;
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            const orderUrl = `${URLDevelopment}payment/orders `;
            const { data } = await axios.post(orderUrl, { amount: price * count });
            console.log(data);
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // const setData = (id, price, photo, name) => {
    //     localStorage.setItem('id', id)
    // //     localStorage.setItem('name', name)
    // //     localStorage.setItem('photo', photo)
    // //     localStorage.setItem('price', price)
    //     // localStorage.setItem('total',total)
    //     // localStorage.setItem('details', details)

    // }

    return (
        <div>
            <div className="container mx-auto px-20  py-20 ">
                <h1 className="sm:text-xl md:text-3xl animate-rubberBand">Cart details</h1>

                <div className="grid grid-cols-2 gap-5  md:grid-cols-3 p-2">
                    <img
                        className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                        alt="Briyani"
                        src={photo}
                    ></img>

                    <div class="mb-6 ">
                        <p className="text-base md:text-xl  ">{name}</p>
                        <p className="text-base md:text-lg   ">₹{price}</p>
                        <p className="text-base md:text-lg   ">Total Price</p>
                        <p className="text-base md:text-lg   ">₹{price * count}</p>
                    </div>


                    <div className="justify-center ml-6 ">
                        <h1 className="text-xl font-semibold ">No of Quantity</h1>
                        <div className=" flex  py-3  ">
                            <button onClick={() => setCount(count - 1)} className={`  ${count <= 0 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>-</button>
                            <button className="p-2"> {count} </button>
                            <button onClick={() => setCount(count + 1)} className={`  ${count >= 100 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>+</button>
                        </div>
                        <div className="justify-center py-5   font-bold">
                            <button onClick={handlePayment} className={`  ${count === 0 ? '  bg-red-600 opacity-50 cursor-not-allowed px-5   py-4 rounded-md ' : 'rounded-md px-10 py-4 my  bg-red-600 hover:bg-red-700'} `}>Pay Now {price * count} </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>




            </div>
        </div>

    )
}

export default Cartbag;