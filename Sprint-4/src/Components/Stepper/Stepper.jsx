import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = () => {
  const steps = ["Agendamento", "Consuta", "Exames", "Tratamento"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-black">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-8 ">
      {!complete && (
        <button
          className="border-4	rounded-lg bg-indigo-950 text-white w-32 h-12"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finalizar" : "Proximo"}
        </button>
      )}
      </div>
    </>
  );
};

export default Stepper;