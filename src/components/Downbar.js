import { Link } from "react-router-dom";


function Downbar() {

    return (
        <div className=" w-auto bg-slate-500  pl-20 text-white    md:hidden sm:hidden lg:block justify-start hidden">
            <div className="flex">
                <ul className="flex  space-x-3  ">
                    <li className="hover:bg-black rounded-md ">
                        <Link to="/movies">Aquarium Accessories</Link>
                    </li >
                    <li className="hover:bg-black rounded-md ">
                        <Link to="/stream">Tank and Fish Bowl </Link>
                    </li>
                    <li className="hover:bg-black rounded-md ">
                        <Link to="/events">Toys and Decors</Link>
                    </li>
                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/plays">Artficial Plants</Link>
                    </li>
                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/sports">Fish Foods and Pellets</Link>
                    </li>
                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/activities">Lights</Link>
                    </li>
                    <li className="hover:bg-black   rounded-md ">
                        <Link to="/buzz">Aquascaping Tools</Link>
                    </li>

                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/contact">Medicine and Remedies</Link>
                    </li>
                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/Coporate">Gadgets</Link>
                    </li>
                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/offers">Offers</Link>
                    </li>
                    <li className="hover:bg-black rounded-md  ">
                        <Link to="/giftcards">Aquarium Decors</Link>
                    </li>
                    <li className="hover:bg-black rounded-md ">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

            </div>
            
        </div>
    )
}
export default Downbar;