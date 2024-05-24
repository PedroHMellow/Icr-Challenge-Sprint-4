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

                <div className="flex flex-col justify-around items-start gap-5 md:flex-row md:items-center text-white font-sans">
                    <img src={ono} alt="Ono" className="hidden lg:flex max-w-28"/>

                    <div className="content-center">
                        <div className="flex items-center">
                            <div className="text-2xl p-3"> <MdContactPhone /></div>
                            <span className="text-2xl flex justify-center"> Contatos </span>
                        </div>

                        <div className="border-t border-white w-48"></div>

                    <samp className="text-base	md:text-sm"> (11) 2661-8500 | </samp>
                    <samp className="text-base md:text-sm">
                        AV. DR. ENÉAS CARVALHO DE AGUIAR, 647, SÃO PAULO - SP
                    </samp>
                    </div>

                        <div className="content-center">

                            <div className="flex items-center">
                                <div className="text-2xl p-3"> <IoMdContact /> </div>
                                <span className="text-2xl"> Redes </span>
                            </div>

                            <div className="border-t border-white w-48 mb-3"></div>

                            <div className="text-xl flex gap-px md:text-3xl">
                                <FaSquareYoutube />
                                <FaFacebookSquare />
                                <FaInstagramSquare />
                            </div>

                    </div>
                </div>
                
            </section>

            <div className="bg-footer_p2 text-white text-xs flex justify-center font-sans p-5 text-center">
                ® TODOS OS DIREITOS RESERVADOS. INSTITUTO DA CRIANÇA E DO ADOLESCENTE
            </div>
        </>
    )
}

export default Footer