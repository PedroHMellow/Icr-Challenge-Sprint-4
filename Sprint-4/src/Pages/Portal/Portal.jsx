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

            <section className="bg-gray-200">

                <div className="text-8xl p-10 text-center">Page Portal do Paciente</div>
                
                <div>

                    <Paciente />

                </div>

                <div className="p-5 pt-20"> 
                        
                    <Stepper />

                </div>

                <div className="text-8xl p-10"> 
                        
                    Calendario  

                </div>

                <div className="text-8xl p-10"> 
                        
                    Aba do video    

                </div>

                <div className="p-8"></div>
            
            </section>
            
            
            <Footer />
        </>
    )
}

export default Portal