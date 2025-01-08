import React from 'react';

function FooterComponent() {
  return (
    <div className='border rounded-md '>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <footer className="relative  pt-8 pb-6 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold ">
                ¡Mantente en contacto con nosotros!
              </h4>
              <h5 className="text-lg mt-0 mb-2 ">
                Encuéntranos en nuestras redes sociales. Responderemos en 1-2 días hábiles.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Enlaces útiles
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#about"
                      >
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#services"
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#gallery"
                      >
                        Galería
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#contact"
                      >
                        Contáctanos
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Más información
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#faq"
                      >
                        Preguntas frecuentes
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#privacy"
                      >
                        Política de privacidad
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#terms"
                      >
                        Términos y condiciones
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                © {new Date().getFullYear()} Barbería Clásica. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
