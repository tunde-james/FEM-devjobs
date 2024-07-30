"use client";

import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-[url('/images/mobile/bg-pattern-header.svg')] bg-cover bg-no-repeat tablet:bg-[url('/images/tablet/bg-pattern-header.svg')] laptop:bg-[url('/images/desktop/bg-pattern-header.svg')]">
      <div className="mx-auto flex h-[136px] items-center justify-between pb-10 phone:container tablet:container laptop:container tablet:h-[165px]">
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
            <input type="checkbox" id="switch" className="hidden" />
            <label
              htmlFor="switch"
              className="absolute left-[5px] top-[5px] h-[14px] w-[14px] cursor-pointer rounded-full bg-violet-normal"
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
      </div>
    </nav>
  );
}

export default Navbar;
