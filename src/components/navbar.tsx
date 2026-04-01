import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const navLinks = [
  { title: "Sobre nós", path: "/about" },
  { title: "Carisma", path: "/charisma" },
  { title: "Ministérios", path: "/ministries" },
  { title: "Eventos", path: "/events" },
  { title: "Contato", path: "/contact" },
];

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <button
              key={link.title}
              onClick={() => handleNavigate(link.path)}
              className={`relative text-sm font-medium transition-colors duration-300 py-2
                ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-secondary-400 after:transition-all after:duration-300
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {link.title}
            </button>
          );
        })}
        <Button
          className="bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6 ml-2"
          onClick={() => handleNavigate("/donate")}
        >
          Contribuir
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className="lg:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="text-white/90 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Abrir menu"
            >
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              sideOffset={8}
              align="end"
              className="w-56 bg-white p-2 shadow-2xl rounded-xl border border-neutral-100
                         data-[state=open]:animate-in data-[state=closed]:animate-out 
                         data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
                         data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
                         data-[side=bottom]:slide-in-from-top-2 origin-top-right z-50"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <DropdownMenu.Item
                    key={link.title}
                    onSelect={() => handleNavigate(link.path)}
                    className={`px-4 py-2.5 text-sm rounded-lg cursor-pointer outline-none transition-colors mb-1
                      ${
                        isActive
                          ? "bg-primary-50 text-primary-800 font-semibold"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-primary-700 focus:bg-neutral-50"
                      }
                    `}
                  >
                    {link.title}
                  </DropdownMenu.Item>
                );
              })}
              <DropdownMenu.Separator className="h-px bg-neutral-100 my-2" />
              <DropdownMenu.Item
                onSelect={() => handleNavigate("/donate")}
                className="px-4 py-2.5 text-sm font-medium rounded-lg cursor-pointer outline-none transition-colors bg-red-50 text-red-700 hover:bg-red-100 focus:bg-red-100"
              >
                Contribuir
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
}
