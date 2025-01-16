import React from "react";
import CitasComponent from "../CItasComponent";

function IntranetView() {
  return (
    <>
      <div className="container border border-white mx-auto">
        <div className="border border-white">
          <h2 className="text-2xl font-semibold text-center mb-4">
            El Barbero
          </h2>
        </div>
        <div>
            <ul className="flex justify-around">
                <li className="cursor-pointer py-4 font-sans text-xl hover:underline ">Citas</li>
                <li className="cursor-pointer py-4 font-sans text-xl hover:underline">Empleados</li>
            </ul>
        </div>
      </div>

      <div>
        <CitasComponent />
      </div>
    </>
  );
}

export default IntranetView;
