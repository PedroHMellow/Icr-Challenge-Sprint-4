import Stepper from "../../Components/Stepper/Stepper";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import Perfil from "../../img/Perfil_profile (1).png"
import { FaCamera } from "react-icons/fa";



function Portal () {
    return (
        <>
            <Header />
            <NavBar />

            <section className="bg-gray-200">

                <div className="text-8xl p-10">Page Portal do Paciente</div>
                
                <div className="flex">
                    
                    <div className="flex flex-col ">
                        <img src={Perfil} alt="" className="h-52 w-52 px-2"/>
                        <button className=" flex border-4 border-blue-400 text-center content-center mx-5  rounded-full "> 
                            <FaCamera className="text-xl m-2"/>
                             <span className="text-xl"> Trocar Perfil </span> 
                        </button>
                    </div>

                    <div className="flex flex-col pt-10 gap-1">
                        <span className="text-2xl">Nome do Paciente:</span>
                        <span className="text-xl"> Numero: </span>
                        <span className="text-xl"> Idade: </span>
                    </div>

                    <div className=" pl-80 ml-96 ">
                        <button className="flex justify-center items-center	 bg-blue-400 w-20 h-10 rounded-lg">
                            <span className="text-white"> Editar </span>
                        </button>
                    </div>
                    
                </div>

                <div className="p-5 pt-20"> 
                        
                    <Stepper />

                </div>

                <div className="text-8xl p-10"> 
                        
                    Calendario  

                </div>

                <div className="p-8"></div>
            
            </section>
            
            
            <Footer />
        </>
    )
}

export default Portal