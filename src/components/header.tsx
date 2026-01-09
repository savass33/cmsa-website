import React from "react";
import logo from "../assets/images/logo.jpg";
import { Button } from "./ui/button";

function Header() {
  return (
    <>
      <div className="bg-primary-500 p-4">
        <img
          src={logo}
          alt="CMSA Logo"
          className="size-1/16 mr-auto rounded-2xl"
        />

        <Button variant="primary">Sobre nós</Button>
      </div>
    </>
  );
}

export default Header;

// Logo + name                             Sobre nós | Carisma | Atividades/Ministério/Grupos | Eventos | Contato |                                 Contribuir
