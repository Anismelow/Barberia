import axios from "axios";
import React, { useEffect, useState } from "react";

function CitasComponent() {
  const [citas, setCitas] = useState([]); // Estado para almacenar las citas
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const fetchCitas = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/reservas/");
      setCitas(response.data); // Actualiza el estado con las citas obtenidas
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching citas:", error);
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  const updateCitaEstado = async (numero_reserva, nuevoEstado) => {
    try {
      // Opcional: Actualizar en el backend
      await axios.patch(`http://127.0.0.1:8000/api/reservas/${numero_reserva}/`, {
        estado: nuevoEstado,
      });

      // Opcional: Actualizar en el backend
      window.location.reload();

      // Actualizar el estado localmente
      setCitas((prevCitas) =>
        prevCitas.map((cita) =>
          cita.numero_reserva === numero_reserva ? { ...cita, estado: nuevoEstado } : cita
      
        )


      );

    } catch (error) {
      console.error("Error al actualizar el estado de la cita:", error);
    }

  };
  useEffect(() => {
    fetchCitas();
  }, []);

  return (
    <div className="container mx-auto border border-white ">
      <h2 className="text-2xl font-semibold text-center mb-4 text-white">Citas</h2>
      {loading ? (
        <p className="text-center text-white">Cargando...</p>
      ) : citas.length === 0 ? (
        <p className="text-center text-white">No hay citas disponibles.</p>
      ) : (
        citas.map((cita) => (
          <div key={cita.id} className="border-b border-gray-300 p-4">
       
            <p className="text-white">
              <strong className="text-white" >Nombre:</strong> {cita.nombre}
            </p>
            <p className="text-white">
              <strong className="text-white" >Servicio:</strong> {cita.servicio}
            </p>
            <p className="text-white">
              <strong className="text-white" >Teléfono:</strong> {cita.telefono}
            </p>
            <p className="text-white">
              <strong className="text-white" >Fecha:</strong> {cita.fecha}
            </p>
            <p className="text-white">
              <strong className="text-white" >Hora:</strong> {cita.hora}
            </p>
            <p className="text-white">
              <strong className="text-white" >Estado:</strong> {cita.estado}
            </p>
            <div className="flex gap-4 mt-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() =>{
                console.log("Actualizando estado de:", cita.numero_reserva);

                 updateCitaEstado(cita.numero_reserva, "realizada")}}
              >
                Realizada
              </button>
              
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CitasComponent;
