import ono from "../../img/ona.png"
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




function Footer () {
    return (
        <>
            <div className="bg-indigo-950 w-full ">
                <div className="flex justify-around text-white font-sans">
                    <img src={ono} alt="Ono" />
                    <div className="content-center	">
                        <span className="text-2xl"> Contatos </span>
                        <div className="border-t border-white w-48"></div>
                        <samp>(11) 2661-8500</samp>
                        <samp>AV. DR. ENÉAS CARVALHO DE AGUIAR, 647, SÃO PAULO - SP</samp>
                    </div>
                    <div className="content-center">
                        <span className="text-2xl"> Redes </span>
                        <div className="border-t border-white w-48"></div>
                        <div className="text-3xl flex gap-px">
                            <FaSquareYoutube />
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-400 flex justify-center font-sans">
                ® TODOS OS DIREITOS RESERVADOS. INSTITUTO DA CRIANÇA E DO ADOLESCENTE
            </div>
        </>
    )
}

export default Footer