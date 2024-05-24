import React, { useState } from "react"
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function Carrossel_Home () {
    const slides = [
        {
            url: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2017/04/Foto-Fachada-HC.jpg'
        },
        {
            url: 'https://m.vitoria.es.gov.br/recursos/imagens/banco/2019/10/10/82633/ampliada.jpg'
        },
        {
            url: 'https://jpimg.com.br/uploads/2020/08/hc-fundo-do-mar.jpg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex); 
    };

    const nextSlide = () => {
        const isLastslides = currentIndex === slides.length - 1;
        const newIndex = isLastslides ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex); 
   };

    return (
        <>
        <div className="max-w-[1638px] h-[700px] m-auto py-5  relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded bg-center bg-cover duration-500">
            {/* left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
            {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carrossel_Home 