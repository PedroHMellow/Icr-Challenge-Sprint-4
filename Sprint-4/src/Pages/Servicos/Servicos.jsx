import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import { BiCategory } from "react-icons/bi";
import card1 from "../../img/card-1.429e1ba9.png"
import card2 from "../../img/card-2-Remedio.png"
import card3 from "../../img/card-3.f2d123c7.png"
import card4 from "../../img/card-4.png"
import card5 from "../../img/card-5.16ea5895.png"
import card6 from "../../img/card-6.16ea5895.png"
import card7 from "../../img/card7.png"
import card8 from "../../img/card-8.ac1a9a37.png"
import { Link } from "react-router-dom";


function Servicos () {
    return (
        <>
            <Header />
            <NavBar />

            <div>
                <img src="https://sigma.icr.usp.br/ContadoresAtena/BANNER_PORTAL/3711.png" alt="" />
            </div>

            <div className="flex items-center px-36 h-12">
                <div className="text-xl"> <BiCategory /> </div>
                <h3 className="pl-2 text-xl"> 
                    Nossos Serviços 
                </h3>
            </div>
            
            <section className="bg-gray-200 px-36 grid grid-cols-3 grid-rows-3 gap-10 p-3">
               
               <Link to="/Exames">  
                    <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                        <img src={card1} alt="" />
                        <h3 className="text-xl p-3">
                            Exames
                        </h3>
                        <p className="p-3">
                            Resultados de Exames Laboratoriais e de Imagem
                        </p>
                    </div>
                </Link>

                <Link to="/Preparo_Exames">  
                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card7} alt="" />
                    <h3 className="p-3 text-xl">
                        Preparo Exames 
                    </h3>
                    <p className="p-3 ">
                        Vai passar por algum exame de Imagem? Verifique o preparo.
                    </p>
                </div>
                </Link>

                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card2} alt="" />
                    <h3 className="text-xl p-3">
                        Medicamentos
                    </h3>
                    <p className="p-3">
                        Lista de medicamentos disponíveis para retirada
                    </p>
                </div>

                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card3} alt="" />
                    <h3 className="text-xl p-3">
                        Agenda
                    </h3>
                    <p className="p-3">
                        Acesse sua agenda de consultas e exames
                    </p>
                </div>

                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                   <img src={card4} alt="" />
                    <h3 className="text-xl p-3">
                        Receitas
                    </h3>
                    <p className="p-3">
                        Acesse suas receitas emitidas no Ambulatório
                    </p>
                </div>
                
                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card5} alt="" />
                    <h3 className="text-xl p-3">
                        Guias de Exame e Documentos
                    </h3>
                    <p className="p-3">
                        Acesse guias e Exames ou documentos anexados pelos médico
                    </p>
                </div>

                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card6} alt="" />
                    <h3 className="text-xl p-3">
                        Laudos
                    </h3>
                    <p className="p-3">
                        Acompanhe os laudos solicitados
                    </p>
                </div>

                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card8} alt="" />
                    <h3 className="p-3 text-xl">
                        Preparo Exames 
                    </h3>
                    <p className="p-3 ">
                        Vai passar por algum exame de Imagem? Verifique o preparo.
                    </p>
                </div>

                <div className="bg-white cursor-pointer scale-1 hover:scale-110 border rounded-lg
                    border-black shadow-md	
                    ">
                    <img src={card8} alt="" />
                    <h3 className="p-3 text-xl">
                        Dados Pessoais
                    </h3>
                    <p className="p-3 ">
                        Mantenha seus dados sempre atualizados
                    </p>
                </div>


            </section>
            
            <Footer />
        
        </>
    )
}

export default Servicos