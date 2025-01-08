import React from "react";

function NosotrosComponent() {
  return (
    <div id="acerca" className="box-content border bg-slate-800">

      <section id="about" className="py-16 ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Sobre Nosotros
          </h2>
          <p className="text-lg  leading-relaxed">
            En **[Nombre de la Barbería]**, nos apasiona ofrecer cortes de
            cabello excepcionales en un ambiente acogedor. Fundada por [Nombre
            del fundador], nuestra barbería ha crecido con el compromiso de
            brindar un servicio de calidad, donde cada cliente se sienta
            especial. Desde cortes clásicos hasta los más modernos, nos
            aseguramos de que cada visita sea una experiencia única.
          </p>
          <h3 className="text-3xl font-semibold mt-8 mb-4">
            Lo que nos hace destacar
          </h3>
          <ul className="list-disc pl-5 text-lg ">
            <li>Barberos expertos y apasionados.</li>
            <li>Ambiente único y acogedor.</li>
            <li>Atención personalizada.</li>
            <li>Productos de alta calidad.</li>
          </ul>
          <h3 className="text-3xl font-semibold mt-8 mb-4">
            ¿Por qué cortarte con nosotros?
          </h3>
          <p className="text-lg  leading-relaxed">
            Elegir **[Nombre de la Barbería]** es optar por un servicio
            excepcional, calidad y un equipo dedicado a ofrecer lo mejor. Ven y
            vive la experiencia de un corte de cabello único.
          </p>
        </div>
      </section>
    </div>
  );
}

export default NosotrosComponent;
