"use client";
import { useState } from "react";
import { IconMenu } from "../../../public/icons";
import Button from "../atoms/Button";
import HeaderNavbar from "../molecules/HeaderNavbar";
import HeaderNavbarMobile from "../molecules/HeaderNavbarMobile";
import Image from "next/image";

export default function Header() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[var(--color-black-02)] p-4 md:pl-[120px] md:pr-[120px] text-white flex items-center justify-between">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/imagotipo.svg"
          alt="imagotipo saja"
          width={75}
          height={75}
        />
        <HeaderNavbar />
        {isActiveMenuMobile && <HeaderNavbarMobile />}
      </div>
      <div className="flex items-center gap-6">
        <Button variant="default">Start</Button>
        <IconMenu
          className="md:hidden text-[1.8rem]"
          onClick={() => setIsActiveMenuMobile(!isActiveMenuMobile)}
        />
      </div>
    </header>
  );
}
