import React, { useState } from "react";
import axios from "axios";

function ReservaVista() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);  // Evitar envíos duplicados

    const reservaData = {
      nombre,
      apellido,
      email,
      telefono,
      fecha,
      hora,
      servicio,
    };

    axios
      .post("http://127.0.0.1:8000/api/reservas/", reservaData)
      .then((response) => {
        setMensaje("Reserva realizada con éxito!");  // Mensaje de éxito
        setIsSubmitting(false);  // Resetear el estado de envío
        window.location.reload();  // Recargar la página
      })
      .catch((error) => {
        setMensaje("Hubo un problema al realizar la reserva.");  // Manejo de errores
        setIsSubmitting(false);  // Resetear el estado de envío
        console.error("Error al enviar la reserva:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <div id="reserva" className="w-full md:w-1/2 mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Formulario */}
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Nombre:</label>
          <input
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Apellido:</label>
          <input
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            type="text"
            name="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Email:</label>
          <input
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Teléfono:</label>
          <h4 className="ms-5 mb-4 text-red-400 ">Porfavor agregar el prefijo +34</h4>
          <input
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            type="tel"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Fecha:</label>
          <input
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            type="date"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Hora:</label>
          <input
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            type="time"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="ml-5 text-lg font-semibold text-black">Servicio:</label>
          <select
            name="servicio"
            className="w-11/12 ml-5 p-2 border rounded-md text-black"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="">Selecciona un servicio</option>
            <option value="corte">Corte</option>
            <option value="barba">Barba</option>
            <option value="corte_barba">Corte y Barba</option>
            <option value="ninos">Corte para Niños</option>
            <option value="tratamiento">Tratamiento Facial</option>
            <option value="manicure">Manicure</option>
            <option value="pedicure">Pedicure</option>
          </select>
        </div>
        <button className="border rounded-md border-gray-500 bg-stone-500 text-white py-2 px-4 w-1/2 mx-auto hover:bg-stone-600 transition-all">
          Realizar reserva
        </button>
      </form>
      {mensaje && (
        <div className="mt-5 text-center text-lg text-green-600 font-semibold">
          {mensaje}
        </div>
      )}
    </div>
  );
}

export default ReservaVista;
