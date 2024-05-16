import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
            <nav className="bg-indigo-950 w-full h-12 flex justify-center items-center ">
                <ul className="text-white font-sans text-xl flex ">
                    <li className="mr-5 h-12 content-center">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="border-l-2 border-gray-400 h-12 content-center">
                        <Link to="/Portal" className="ml-5"> Portal do Paciente </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar