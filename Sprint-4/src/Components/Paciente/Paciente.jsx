import Perfil from "../../img/Perfil_profile (1).png"
import { FaCamera } from "react-icons/fa";
import FullCalendar from "../Calendario/Calendario";
import dayGridPlugin from '@fullcalendar/daygrid' 

function Paciente () {
    return (
        <>
        
        <section className="flex flex-wrap">

            
            <div className="flex justify-center pl-10"> 
                <div className="flex flex-col justify-center grow-1 ">
                    <img src={Perfil} alt="" className="w-60 h-60"/>
                </div>
            </div>

            <div className="border-l-2 border-blue-400 h-90 content-center m-5"> </div>

            <div className="flex flex-col w-3/4 p-5">

                <div className="pt-12 w-3/4	">
                    <h2 className="text-4xl p-3  bg-slate-400 rounded-lg border-2	border-indigo-950 "> 
                        Informações Paciente:
                     </h2>
                    <input type="text" className="w-full h-32 rounded-lg  border-indigo-950" />
                </div>

                <div className="pt-12 w-3/4	">
                    <h2 className="text-4xl p-3  bg-slate-400 rounded-lg border-2	border-indigo-950 "> 
                        Diagnósticos: 
                    </h2>
                    <input type="text" className="w-full h-32" />
                </div>
                
            </div>                    

            <div className="flex flex-col pt-8 m-5 w-full">
                <h2 className="text-4xl flex justify-center  bg-slate-400	rounded-lg border-2	border-indigo-950"> 
                    Histórico Médico: 
                </h2>
                <input type="text" className="w-full h-32" />
            </div>


        </section>
        <div className="h-fit cont p-8  ">
            <div className="w-8/12 p-3 bg-verde_icr bg-opacity-80 border-4 rounded-md">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                { title: 'event 1', date: '2024-05-23' },
                { title: 'event 2', date: '2024-05-24' }
                ]}
            />
            </div>
        </div>

        </>
    )
} 

export default Paciente 