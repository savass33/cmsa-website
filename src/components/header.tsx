import logo from "../assets/images/logo-min.png";
import NavBar from "./navbar";

function Header() {
  return (
    <header className="bg-primary-800 shadow-md px-6 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="font-heading flex items-center align-items gap-3">
          <a href="/">
            <img
              src={logo}
              alt="CMSA Logo"
              className="h-20 w-auto rounded-lg"
            />
          </a>

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

        <NavBar />
      </div>
    </header>
  );
}

export default Header;
