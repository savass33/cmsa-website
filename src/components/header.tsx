import React from "react";
import logo from "../assets/images/logo-min.png";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="bg-primary-800 shadow-md px-6 w-full">
      <div className="flex items-center justify-between w-full">

        <div className="font-heading flex items-center align-items gap-3">
          <img src={logo} alt="CMSA Logo" className="h-20 w-auto rounded-lg" />

          <div className="flex flex-col justify-center">
            <h1
              className="text-text-primary font-heading text-lg 
      leading-tight tracking-tight"
            >
              Comunidade Mariana
            </h1>
            <span className="text-text-primary font-body text-sm font-semibold leading-tight">
              Sagrado Amor
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-2">
          <Button variant="primary" className="text-white hover:bg-white/10">
            Sobre nós
          </Button>
          <Button variant="primary" className="text-white hover:bg-white/10">
            Carisma
          </Button>
          <Button variant="primary" className="text-white hover:bg-white/10">
            Ministérios
          </Button>
          <Button variant="primary" className="text-white hover:bg-white/10">
            Eventos
          </Button>
          <Button variant="primary" className="text-white hover:bg-white/10">
            Contato
          </Button>
          <Button className="bg-red-600 text-white hover:bg-white/10">
            Contribuir
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;