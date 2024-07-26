"use client";

import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <nav className="pb-[32px] flex h-[136px] items-center justify-between bg-[url('/images/mobile/bg-pattern-header.svg')] bg-cover bg-no-repeat px-6 tablet:h-[165px] tablet:bg-[url('/images/tablet/bg-pattern-header.svg')] tablet:px-10 laptop:bg-[url('/images/desktop/bg-pattern-header.svg')] laptop:px-[165px]">
      <h1 className="text-white">devjobs</h1>
      <div className="flex justify-between">
        <Image
          src="/images/desktop/icon-sun.svg"
          alt="sun icon"
          width={20}
          height={18.6}
          className="self-center"
        />

        <div className="relative mx-4 h-6 w-12 rounded-xl bg-white">
          <input
            type="checkbox"
            id="switch"
            className="hidden"
            checked={darkMode}
            onClick={toggleDarkMode}
          />
          <label
            htmlFor="switch"
            className="bg-violet-normal absolute left-[5px] top-[5px] h-[14px] w-[14px] cursor-pointer rounded-full"
          ></label>
        </div>

        <Image
          src="/images/desktop/icon-moon.svg"
          alt="sun icon"
          width={12}
          height={12}
          className="self-center"
        />
      </div>
    </nav>
  );
}

export default Navbar;
