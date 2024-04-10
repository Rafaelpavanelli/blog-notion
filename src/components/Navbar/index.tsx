import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

export function NavbarHome() {
  const Tags = ["Next", "Expo", "Tailwind"];

  return (
    <Navbar className="h-28 bg-gray-950 ">
      <NavbarBrand className="justify-start">
        <p className="font-bold text-inherit text-4xl">Pavanelli Dev</p>
      </NavbarBrand>
      <Dropdown className="p-0">
        <NavbarItem>
          <DropdownTrigger className="">
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
            >
              Tecnologias
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          className="bg-gray-600  rounded-xl"
          itemClasses={{
            base: "gap-4",
          }}
        >
          {Tags.map((item) => (
            <DropdownItem className="text-white" key={item}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <NavbarItem>
        <Link href={"/Sobre"}>Sobre</Link>
      </NavbarItem>
      <NavbarContent></NavbarContent>
    </Navbar>
  );
}
