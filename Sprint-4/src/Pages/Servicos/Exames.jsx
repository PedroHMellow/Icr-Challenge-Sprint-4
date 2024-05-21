import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"

import card1 from "../../img/Sangue-card.jpg"
import card2 from "../../img/Espirometrica-card.jpg"
import card3 from "../../img/Pletismografia-card.jpg"
import card4 from "../../img/Oxigenoterapia-card.png"
import card5 from "../../img/RaioX Card.jpg"
import card6 from "../../img/RM Card.jpg"

function Exames () {
    return (
        <>

        <Header />
        <NavBar />

        <div>
            <h1 className="text-8xl p-5 m-0 flex justify-center font-sans"> Exames </h1>
            <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
        </div>

        <section className="bg-gray-200 px-36 grid grid-cols-2 grid-rows-2 gap-10 p-3 ">

            <div className="bg-white cursor-pointer scale-1 hover:scale-110 border-3 rounded-lg border-black shadow-md">
                
                <img src={card1} alt="" />
                <h3 className="p-3 text-xl">
                    Exame de Sangue
                </h3>
                <p className="p-3 ">
                    O exame de sangue inclui diversos testes para medir componentes químicos no sangue, como glicose, eletrólitos, enzimas, hormônios e proteínas. Usado para avaliar a função de órgãos, diagnosticar doenças metabólicas, endócrinas e monitorar tratamentos.
                </p>

            </div>

            <div className="bg-white cursor-pointer scale-1 hover:scale-110 border-3 rounded-lg border-black shadow-md">

                <img src={card5} alt="" />
                <h3 className="p-3 text-xl">
                    Raio-X
                </h3>
                <p className="p-3 ">
                    Utiliza radiação para criar imagens das estruturas internas do corpo, como ossos, órgãos e tecidos. Comumente usado para diagnosticar fraturas ósseas, infecções, tumores, problemas articulares, doenças pulmonares (como pneumonia) e para guiar procedimentos médicos. O Raio-X é uma ferramenta fundamental na prática clínica devido à sua capacidade de fornecer imagens detalhadas rapidamente.
                </p>

            </div>

            <div className="bg-white cursor-pointer scale-1 hover:scale-110 border-3 rounded-lg border-black shadow-md">

                <img src={card2} alt="" />
                <h3 className="p-3 text-xl">
                    Espirometria
                </h3>
                <p className="p-3 ">
                    Espirometria avalia a função pulmonar medindo o volume e a velocidade do ar que a pessoa consegue expirar. Utilizado no diagnóstico de doenças respiratórias como asma, DPOC (Doença Pulmonar Obstrutiva Crônica) e outras condições que afetam a respiração.
                </p>

            </div>

            <div className="bg-white cursor-pointer scale-1 hover:scale-110 border-3 rounded-lg border-black shadow-md">

                <img src={card3} alt="" />
                <h3 className="p-3 text-xl">
                    Pletismografia
                </h3>
                <p className="p-3 ">
                    Pletismografia Mede o volume pulmonar total e a capacidade residual funcional dos pulmões. Útil para diagnosticar e avaliar a gravidade de doenças pulmonares como enfisema, fibrose pulmonar e outras condições que afetam a capacidade pulmonar.
                </p>

            </div>

            <div className="bg-white cursor-pointer scale-1 hover:scale-110 border-3 rounded-lg border-black shadow-md">

                <img src={card4} alt="" />
                <h3 className="p-3 text-xl">
                    Titulação de Oxigenioterapia Domiciliar
                </h3>
                <p className="p-3 ">
                    Oxigenioterapia Determina a quantidade adequada de oxigênio suplementar necessário para um paciente em tratamento domiciliar. Fundamental para pacientes com insuficiência respiratória crônica, garantindo que recebam a quantidade correta de oxigênio para manter níveis adequados de saturação no sangue.
                </p>

            </div>

            <div className="bg-white cursor-pointer scale-1 hover:scale-110 border-3 rounded-lg border-black shadow-md">

                <img src={card6} alt="" />
                <h3 className="p-3 text-xl">
                    Ressonância Magnética (RM)
                </h3>
                <p className="p-3 ">
                    Utiliza campos magnéticos e ondas de rádio para produzir imagens detalhadas dos órgãos e tecidos internos. Ideal para avaliar tecidos moles, como cérebro, músculos, ligamentos e órgãos internos, sendo útil no diagnóstico de tumores, lesões esportivas, doenças do sistema nervoso central e outras condições.
                </p>

            </div>


        </section>

        <Footer />
        
        </>
    )

}

export default Exames