"use client";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { NavbarHome } from "@/components/Navbar";
type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <div className="dark bg-gray-800 min-h-screen font-serif">
        <NavbarHome/>
        <div className="p-10">
        {children}
        </div>
        </div>
    </NextUIProvider>
  );
}
