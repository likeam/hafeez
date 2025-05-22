import { APP_NAME } from "../../../../lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./menu";

const Header = () => {
  return (
    <header className=" w-full border-b">
      <div className=" wrapper flex-between">
        <div className=" flex-start">
          <Link href="/" className=" flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
