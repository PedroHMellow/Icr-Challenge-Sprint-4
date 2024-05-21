import Carrossel_Home from "../../Components/Carrossel_Home/Carrossel_Home"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"

import Icr_img from "../../img/show_image.jpeg"


function Home() {
    return (
        <>
        <Header />
        <NavBar />

        <section className="bg-gray-200">
        <h1 className="text-8xl p-5 m-0 flex justify-center font-sans pt-10"> Nosso Hospital</h1>
        <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
        
        <Carrossel_Home />
        
        <div>
            <h1 className="text-8xl p-5 m-0 flex justify-center font-sans">Sobre Nos</h1>
            <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
            <div className="flex p-5">
                <p className=" text-xl justify-center items-center pt-20">
                    O Instituto da Criança do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo - ICr/HCFMUSP é uma das sete unidades hospitalares que integram e, juntas, formam o Hospital das Clínicas da FMUSP. 
                </p>
                <img src={Icr_img} alt="" />
            </div>
        </div>

        <div>
            <h1 className="text-8xl p-5 m-0 flex justify-center font-sans">Nosso Especialidade</h1>
            <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>


        </div>

        <div className="px-36 grid grid-cols-3 grid-rows-3 gap-10 p-3"> 
                <div className="border">
                    <h1> Atendimento Humanizado </h1>
                    <p>

                    </p>
                </div>
        </div>


        </section>
        <Footer />
        
        </>
    )
}

export default Home