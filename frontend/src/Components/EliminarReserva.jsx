import React, { useState } from "react";
import axios from "axios";

function EliminarReserva() {
  const [eliminarReserva, setEliminarReserva] = useState(false);
  const [confirmacion, setConfirmacion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const toggleEliminarReserva = () => {
    setEliminarReserva(!eliminarReserva);
  };

  const handleEliminarReserva = async (e) => {
    e.preventDefault();

    if (!confirmacion) {
      setMensaje("Por favor, ingresa el número de reserva.");
      return;
    }

    try {
      // Realiza la solicitud para eliminar la reserva
      const response = await axios.delete(`http://127.0.0.1:8000/api/reservas/${confirmacion}/`);
      setMensaje("Reserva eliminada con éxito.");
      window.location.reload();  // Recargar la página
    } catch (error) {
      // Manejo de errores con try-catch
      if (error.response) {
        setMensaje(error.response.data.detail || "Hubo un problema al eliminar la reserva.");
      } else {
        setMensaje("Hubo un problema de conexión.");
      }
      console.error("Error al eliminar la reserva:", error.response ? error.response.data : error.message);
    }

    // Limpiar el mensaje después de 5 segundos
    setTimeout(() => setMensaje(""), 5000);
  };

  return (
    <div>
      <p>Si tienes una reserva y la quieres eliminar, haz clic {" "}</p>
      <button onClick={toggleEliminarReserva} className="text-blue-500">
        aquí
      </button>

      {eliminarReserva && (
        <form className="mt-10" onSubmit={handleEliminarReserva}>
          <div>
            <label className="mb-5">Confirma tu número de reserva para eliminarla:</label>
            <input
              className="text-black"
              type="text"
              name="confirmacion"
              value={confirmacion}
              onChange={(e) => setConfirmacion(e.target.value)}
            />
          </div>
          <div>
            <button
              className="mt-10 border rounded py-2 px-4 bg-stone-500 text-white"
              type="submit"
            >
              Eliminar Reserva
            </button>
          </div>
        </form>
      )}

      {mensaje && (
        <div className="mt-5 text-center text-lg font-semibold">
          {mensaje}
        </div>
      )}
    </div>
  );
}

export default EliminarReserva;
