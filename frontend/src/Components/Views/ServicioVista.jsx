import React from "react";
import TarjetaServicios from "../TarjetaServicios";

function ServicioComponent() {
  return (
    <div id="servicios" className="flex flex-col box-content">
      <div className="text-center text-2xl  py-4">
        <h4>Nuestros Servicios</h4>
      </div>

      <div className="flex flex-wrap gap-5  justify-center">

        <div className=" w-96 ">
          <TarjetaServicios
            img={"src/assets/pexels-thgusstavo-2040189.jpg"}
            titulo={"Corte Cabello"}
            texto={"Este servicio incluye un corte de cabello personalizado, adaptado a tu estilo y tipo de rostro. Además, incluye un lavado completo para limpiar y revitalizar tu cabello, seguido de un peinado que resalte tu nuevo corte, dejándote listo para el día."}
            precio={"$150"}
          />
        </div>

        <div className=" w-96">
          <TarjetaServicios
            img={"src/assets/pexels-cottonbro-3998414.jpg"}
            titulo={"Corte de Barba"}
            texto={"Disfruta de un arreglo profesional para tu barba, con un recorte y modelado que definirá tu estilo único. Usamos técnicas precisas para darle forma a tu barba y mejorar su apariencia, manteniéndola saludable y bien cuidada."}
            precio={"$100"}
          />
        </div>

        <div className=" w-96">
          <TarjetaServicios
            img={"src/assets/pexels-thgusstavo-2014808.jpg"}
            titulo={"Corte y Barba"}
            texto={"Este servicio combinado te ofrece un corte de cabello personalizado junto con un arreglo completo de barba. Ideal para quienes buscan un look fresco y bien equilibrado, perfecto para un estilo moderno o clásico, con atención a cada detalle."}
            precio={"$230"}
          />
        </div>

        <div className=" w-96">
          <TarjetaServicios
            img={"src/assets/pexels-rdne-7697350.jpg"}
            titulo={"Corte para Niños"}
            texto={"Nuestros cortes para niños están pensados para ser rápidos y cómodos, con un enfoque amigable que hace que el niño se sienta relajado. Realizamos cortes modernos y clásicos con un estilo que se adapta a su personalidad, asegurando una experiencia divertida y agradable."}
            precio={"$60"}
          />
        </div>

        <div className=" w-96">
          <TarjetaServicios
            img={"src/assets/pexels-omarmedinaoficial-16131208.jpg"}
            titulo={"Tratamiento Facial"}
            texto={"Este tratamiento incluye una limpieza profunda del rostro, eliminando impurezas y revitalizando la piel. También se incluyen mascarillas hidratantes y tratamientos relajantes que dejan la piel suave, fresca y rejuvenecida, ideal para mantener una apariencia saludable."}
            precio={"$250"}
          />
        </div>

        <div className=" w-96">
          <TarjetaServicios
            img={"src/assets/istockphoto-1075627496-1024x1024.jpg"}
            titulo={"Manicure"}
            texto={"Cuida tus manos con un servicio de manicure que incluye el corte y modelado de uñas, seguido de una hidratación profunda para mantener la piel suave. Puedes elegir entre una amplia gama de esmaltes para darle un toque especial a tus manos, dejándolas listas para cualquier ocasión."}
            precio={"$230"}
          />
        </div>

        <div className=" w-96">
          <TarjetaServicios
            img={"src/assets/istockphoto-842213846-1024x1024.jpg"}
            titulo={"Pedicure"}
            texto={"Nuestro pedicure incluye un tratamiento completo para tus pies, desde el corte de uñas y la eliminación de callos hasta una exfoliación e hidratación profunda. Este servicio no solo mejora la apariencia de tus pies, sino que también los mantiene saludables y cómodos."}
            precio={"$270"}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicioComponent;
