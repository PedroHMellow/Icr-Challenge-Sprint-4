import Stepper from "../../Components/Stepper/Stepper";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import Paciente from "../../Components/Paciente/Paciente";



function Portal () {
    return (
        <>
            <Header />
            <NavBar />

            <section className="bg-[url('./src/img/Bg_Infantil_4.jpg')]">

                <div className=" text-4xl md:text-6xl lg:text-8xl p-10 text-center ">Page Portal do Paciente</div>
                
                <div>

                    <Paciente />

                </div>

            </section>
            <section className="bg-[url('./src/img/Bg_Infantil_3.jpg')]">
                
                <div className="p-5"> 
                    <p className="flex justify-center text-center text-indigo-800 text-xl lg:text-2xl"> 
                    Acompanhe em que passo você está da sua jornada com a nossa barra de progressão. 
                    </p>
                    <div className="p-10"> <Stepper /> </div>

                </div>

                <div className="text-4xl md:text-6xl lg:text-8xl p-10 text-center"> 
                        
                    Aba do video    

                </div>

                <div className="p-8"></div>
            
            </section>
            
            
            <Footer />
        </>
    )
}

export default Portal