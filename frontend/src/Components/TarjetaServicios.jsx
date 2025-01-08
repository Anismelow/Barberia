import React from 'react';

function TarjetaServicios({ img, titulo, texto, precio }) {
  return (
    <div className="card border border-gray-300 mx-auto bg-slate-800">
      <img className="w-full h-48 object-cover" src={img} alt={titulo} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold ">{titulo}</h3>
        <p className=" text-sm mt-2">{texto}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold ">{precio}</span>
        </div>
      </div>
    </div>
  );
}

export default TarjetaServicios;
