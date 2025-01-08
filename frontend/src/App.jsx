import React from "react";
import FooterComponent from "./Components/FooterComponent";
import NavbarComponent from "./Components/NavbarComponent";
import NosotrosComponent from "./Components/Views/NosotrosVista";
import ServicioComponent from "./Components/Views/ServicioVista";
import ContactoComponent from "./Components/Views/ContactoVista";

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-40">
      <NavbarComponent />
      <NosotrosComponent />
      <ServicioComponent />
      <ContactoComponent/>
      <FooterComponent />
    </div>
  );
}

export default App;
