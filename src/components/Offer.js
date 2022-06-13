function Offers() {

    return (
        <div className="bg-gray-400">


            <div className="flex  justify-center p-10  text-xl md:text-3xl">
                <h1 className="text-2xl font-bold animate-bounce">
                    Welcome Offers!!!
                </h1>
            </div>
            <div className="flex  justify-center ">
                <h1 className="text-3xl font-semibold bg-yellow-500 rounded-md ">
                
                    Use coupon code :<span className="text-red-800  ">Welcome <ion-icon name="ticket-outline"></ion-icon>
                    </span>
                    
                </h1>
            </div>
            <div className="flex  justify-center p-10 ">
                <h1 className="text-xl md:text-3xl font-semibold bg-black text-white rounded-md ">
                    SHRIMP STARTS From ₹10.00
                </h1>

            </div>
            <div className="grid grid-cols-2 text-3xl  ">
                <div className="text-white font-semibold bg-black rounded-t-3xl text-center  ">
                    <h1 className="text-xl md:text-2xl ">Start Shopping
                        <span className="text-2xl"><ion-icon name="bag-handle-outline"></ion-icon></span>
                    </h1>
                </div>
                <div className="text-white font-semibold bg-black rounded-t-3xl  text-center ">
                    <h1 className="text-xl md:text-2xl ">Free Shiping
                        <span className="text-2xl"><ion-icon name="cart-outline"></ion-icon></span>
                    </h1>
                </div>
            </div>
        </div>
    )

}


export default Offers;


