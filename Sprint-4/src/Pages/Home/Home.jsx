import Carrossel_Home from "../../Components/Carrossel_Home/Carrossel_Home"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"


function Home() {
    return (
        <>
        <Header />
        <NavBar />

        
        <h1 className="text-8xl p-5 m-0 flex justify-center font-sans pt-10"> Nosso Hospital</h1>
        <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
        
        <Carrossel_Home />
        
        <div>
            <h1>Sobre Nos</h1>
        </div>
        <Footer />
        
        </>
    )
}

export default Home