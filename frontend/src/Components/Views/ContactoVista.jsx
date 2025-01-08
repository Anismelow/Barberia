import React from "react";
import BotonReserva from "../BotonReserva";
import EliminarReserva from "../EliminarReserva";

function ContactoComponent() {
  return (
    <div
      id="contacto"
      className="container border my-10 p-6 bg-slate-800  shadow-md rounded-md text-center w-1/2 mx-auto"
    >
      <h4 className="text-2xl font-semibold  mb-4">
        ¡Reserva tu Cita!
      </h4>
      <p className=" text-lg mb-6">
        Puedes realizar tu cita a través del número{" "}
        <span className="font-bold text-blue-400">642-316-527</span> o hacerlo
        directamente desde nuestra página web. ¡Estaremos encantados de
        atenderte!
      </p>
      <BotonReserva />
      <EliminarReserva />
    </div>
  );
}

export default ContactoComponent;
