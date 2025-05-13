"use client";
import { useState } from "react";
import { IconMenu } from "../../../public/icons";
import Button from "../atoms/Button";
import HeaderNavbar from "../molecules/HeaderNavbar";
import HeaderNavbarMobile from "../molecules/HeaderNavbarMobile";
import Image from "next/image";
import Link from "next/link";
import SwitchLanguage from "../molecules/SwitchLanguage";

export default function Header() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[var(--color-black-02)] p-4 md:pl-[120px] md:pr-[120px] text-white flex items-center justify-between">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Link href={"/"}>
          <Image
            src="/imagotipo.svg"
            alt="imagotipo saja"
            width={75}
            height={75}
          />
        </Link>
        <HeaderNavbar />
        {isActiveMenuMobile && <HeaderNavbarMobile />}
      </div>
      <div className="flex items-center gap-6">
        <SwitchLanguage />
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default">Start</Button>
        </div>
        <IconMenu
          className="md:hidden w-[50px] h-[50px] text-[1.4rem] cursor-pointer rounded-[var(--border-radius-small)] p-2 hover:bg-[var(--color-black-hover)]"
          onClick={() => setIsActiveMenuMobile(!isActiveMenuMobile)}
        />
      </div>
    </header>
  );
}
