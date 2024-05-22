import Logo from "../../img/logo-1.1.png"
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <header className=" md:flex justify-between items-center p-5">
                <Link to="/">
                    <div className="flex justify-center" >
                        <img src={Logo} alt="Icr-Logo" />
                    </div>
                </Link>
                <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center justify-between m-4">
                        <div className="text-3xl  text-teal-500">
                            <FaPhone />
                        </div>
                        <h1 className="m-4">
                            (11) 2661-8500
                        </h1>
                    </div>
                    <div className="border-l border-gray-400 h-16 flex items-center justify-between">
                        <div className="text-3xl text-teal-500 m-4 ">
                            <FaLocationDot />
                        </div>
                        <h1>
                            AV. DR. ENÉAS CARVALHO DE AGUIAR, 647, SÃO PAULO - SP
                        </h1>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header