import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"

function Home() {
    return (
        <>
        <Header />
        <NavBar />
            <div className="text-8xl">Page Home</div>
            <div className="p-10"></div>
        <Footer />
        
        </>
    )
}

export default Home