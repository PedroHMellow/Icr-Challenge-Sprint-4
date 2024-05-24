import Stepper from "../../Components/Stepper/Stepper";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import Paciente from "../../Components/Paciente/Paciente";
import Calendario from "../../Components/Calendario/Calendario"




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
            <section style={{backgroundImage: url('./src/img/Bg_Infantil_3.jpg')}}>
                
                <div className="p-5"> 
                    <p className="flex justify-center text-center text-indigo-800 text-xl lg:text-2xl"> 
                    Acompanhe em que passo você está da sua jornada com a nossa barra de progressão. 
                    </p>
                    <div className="p-10"> <Stepper /> </div>

                </div>
               
                
                <div className="p-10 bg-slate-400 m-3 border-4 rounded-md flex flex-col justify-between gap-16"> 

                    <div className="flex flex-col gap-3">
                        <div className="text-indigo-800 text-4xl">Saiba Mais sobre sua Consulta</div>
                        <div className="w-56 h-1 bg-teal-600 rounded-md"></div>
                    </div>    
                    
                    <img id="img4" width="250" height="150" src="img-cha 20-11-23.png"></img>      

                </div>

                <div className="p-8"></div>
            
            </section>
            
            
            <Footer />
        </>
    )
}

export default Portal