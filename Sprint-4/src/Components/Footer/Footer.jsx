import ono from "../../img/ona.png"
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";




function Footer () {
    return (
        <>
            <section className="bg-footer_p1 w-full p-5">

                <div className="flex justify-around text-white font-sans text-sm">
                    <img src={ono} alt="Ono" />
                    <div className="content-center	">
                        <div className="flex items-center">
                            <div className="text-2xl"> <MdContactPhone /></div>
                            <span className="text-2xl pl-3"> Contatos </span>
                        </div>
                        <div className="border-t border-white w-48 mb-3"></div>
                        <samp> (11) 2661-8500 | </samp>
                        <samp>AV. DR. ENÉAS CARVALHO DE AGUIAR, 647, SÃO PAULO - SP</samp>
                    </div>
                    <div className="content-center">
                        <div className="flex items-center">
                            <div className="text-2xl"> <IoMdContact /> </div>
                            <span className="text-2xl pl-3"> Redes </span>
                        </div>
                        <div className="border-t border-white w-48 mb-3"></div>
                        <div className="text-3xl flex gap-px">
                            <a href=""></a>
                            <FaSquareYoutube />
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                        </div>
                    </div>
                </div>
                
            </section>

            <div className="bg-footer_p2 text-white text-xs flex justify-center font-sans p-5">
                ® TODOS OS DIREITOS RESERVADOS. INSTITUTO DA CRIANÇA E DO ADOLESCENTE
            </div>
        </>
    )
}

export default Footer