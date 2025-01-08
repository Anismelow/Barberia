import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu"; // Esto es solo el ícono de hamburguesa.
import "../navbar-style.css";
import { Link } from "react-scroll";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="max-w-screen-xl relative">
      {/* Header con la imagen */}
      <header className="relative">
        <img
          className="w-full opacity-85"
          src="src/assets/pexels-orlovamaria-4969838.jpg"
          alt="foto de la barberia por dentro"
        />
        {/* Menú hamburguesa encima de la imagen */}
        <nav className="absolute top-4 left-4 z-10 block md:hidden">
          <div className="navbar-toggle" onClick={toggleMenu}>
            <HamburgerMenu
              isOpen={isMenuOpen}
              menuClicked={toggleMenu}
              width={30} // Aumento del tamaño del ícono
              height={25}
              strokeWidth={2}
              color="white" // Cambié el color para que resalte sobre la imagen
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <ul
            className={`navbar-links ${isMenuOpen ? "open" : ""} absolute  w-20 py-20 px-6`}
          >
            <li>
              <Link href="inicio" smooth={true} duration={500}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="acerca" smooth={true} duration={500}>
                Acerca
              </Link>
            </li>
            <li>
              <Link to="servicios" smooth={true} duration={500}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="contacto" smooth={true} duration={500}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Navbar para pantallas más grandes */}
      <div className="hidden sm:block  border-y-slate-600 mt-5 border-y-8">
        <ul className="flex items-center justify-center  rounded-md container mx-auto gap-10">
          <li>
            <Link className=" cursor-pointer hover:text-2xl  hover:transition-all hover:opacity-85" to="inicio" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>

          <li>
            <Link className=" cursor-pointer hover:text-2xl  hover:transition-all hover:opacity-85" to="acerca" smooth={true} duration={500}>
              Nosotros
            </Link>
          </li>
          <li className="flex justify-center">
            <img
              className="w-40"
              src="src/assets/barbershop_logo_transparent-removebg-preview.png"
              alt="logo barberia"
            />
          </li>
          <li>
            <Link className=" cursor-pointer hover:text-2xl  hover:transition-all hover:opacity-85" to="servicios" smooth={true} duration={500}>
              Servicios
            </Link>
          </li>
          <li>
            <Link className=" cursor-pointer hover:text-2xl  hover:transition-all hover:opacity-85" to="contacto" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarComponent;
