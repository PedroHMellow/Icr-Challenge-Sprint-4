import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"



function Portal () {
    return (
        <>
            <Header />
            <NavBar />
            <div className="text-8xl pt-10">Page Portal do Paciente</div>
            <div className="p-8"></div>
            <Footer />
        </>
    )
}

export default Portal