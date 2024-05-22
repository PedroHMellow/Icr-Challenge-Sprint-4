import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";

function Preparo_Exames() {
  return (
    <>
      <Header />
      <NavBar />

      <div>
        <h1 className="p-5 m-0 flex justify-center font-sans text-center text-4xl lg:text-5xl xl:text-7xl">
          {" "}
          Como Se Preparar para um Exame Médico{" "}
        </h1>
        <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
      </div>

      <section className="bg-gray-200 px-36 p-3 flex flex-col flex-wrap gap-6">
        <h1 className="text-xl text-indigo-950"> 1. Seguir as Instruções do Médico: </h1>
        <p className="text-justify	">
          Leia as instruções: Leia atentamente qualquer material ou folheto
          informativo que seu médico ou o laboratório tenha fornecido. Questione
          dúvidas: Se houver algo que você não entenda, entre em contato com seu
          médico para esclarecer.
        </p>

        <h1 className="text-xl  text-indigo-950"> 2. Jejum e Alimentação: </h1>
        <p className="text-justify ">
          Jejum: Alguns exames requerem que você esteja em jejum. Se for o caso,
          não coma nem beba nada (exceto água) por um período específico antes
          do exame, geralmente 8 a 12 horas. Alimentação leve: Se não for
          necessário jejum, coma algo leve e evite alimentos pesados ou
          gordurosos antes do exame.
        </p>

        <h1 className="text-xl  text-indigo-950"> 3. Medicamentos: </h1>
        <p className="text-justify">
          Consultar o médico: Pergunte ao seu médico se deve continuar tomando
          seus medicamentos habituais antes do exame. Listar medicamentos: Leve
          uma lista dos medicamentos que você está tomando, incluindo
          suplementos e vitaminas.
        </p>

        <h1 className="text-xl  text-indigo-950"> 4. Hidratação: </h1>
        <p className="text-justify">
          Beber água: A menos que tenha sido instruído a não beber, mantenha-se
          bem hidratado antes do exame. Urina para exames específicos: Alguns
          exames de urina podem exigir que você beba uma quantidade específica
          de água antes do procedimento.
        </p>

        
        <h1 className="text-xl text-indigo-950"> 5. Preparação Específica para Exames: </h1>
        <p className="justify-center">
            Lembrese que a miorias dos exames precisão de preparo especificos
            então sempre pergunte para o seu medico como se preparar
        </p>
       
      </section>

      <Footer />
    </>
  );
}

export default Preparo_Exames;
