import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
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

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <Button
            key={link.title}
            onClick={() => handleNavigate(link.path)}
            variant="primary"
            className="text-white hover:bg-white/10"
          >
            {link.title}
          </Button>
        ))}
        <Button
          className="bg-red-600 text-white hover:bg-white/10"
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
              className="text-white p-2 focus:outline-none"
              aria-label="Abrir menu"
            >
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              sideOffset={5}
              align="end"
              className="w-56 bg-primary-800 p-2 shadow-lg rounded-md
                         data-[state=open]:animate-menu-in
                         data-[state=closed]:animate-menu-out"
            >
              {navLinks.map((link) => (
                <DropdownMenu.Item
                  key={link.title}
                  onSelect={() => handleNavigate(link.path)}
                  className="px-3 py-2 text-white text-sm rounded-md cursor-pointer hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                >
                  {link.title}
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Separator className="h-px bg-white/10 my-1" />
              <DropdownMenu.Item
                onSelect={() => handleNavigate("/donate")}
                className="px-3 py-2 text-sm rounded-md cursor-pointer text-white bg-red-600 hover:bg-red-700 focus:bg-red-700 focus:outline-none"
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
