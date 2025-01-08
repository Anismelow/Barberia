import React, { useState } from "react";
import { Link } from "react-scroll";
import Reserva from "./Views/ReservaVista.jsx";

function BotonReserva() {
  const [mostrarReserva, setMostrarReserva] = useState(false);



  const toggleReserva = () => {
    setMostrarReserva(!mostrarReserva);
  };

  return (
    <>
      <div
        className="cursor-pointer border rounded-md border-gray-500 bg-stone-500 text-white text-xl py-2 px-4 mb-10 text-center hover:bg-stone-600 transition-all"
        onClick={toggleReserva}
      >
        <h3>Agendar Cita</h3>
      </div>

    
      {mostrarReserva && (
        <div className="mt-6">
          <Reserva mostrarReserva={mostrarReserva} />
        </div>
      )}
    </>
  );
}

export default BotonReserva;
