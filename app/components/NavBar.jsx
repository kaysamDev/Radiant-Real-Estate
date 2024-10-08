"use client";

import Image from "next/image";
import Logo from "./logo.png";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function NavBar() {
  const [istoggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!istoggled);
  };
  return (
    <>
      <header className="bg-foundation-primary">
        <nav className="container py-4 flex flex-wrap items-center justify-between relative z-40">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo of PrimeNest Consultants property"
                width={150}
                quality={100}
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="hidden lg:inline-flex gap-8 items-center">
              <li className="nav-link">
                <Link href="/">home</Link>
              </li>
              <li className="nav-link">
                <Link href="about-us">about us</Link>
              </li>
              <li className="nav-link">
                <Link href="/services">services</Link>
              </li>
              <li className="nav-link">
                <Link href="/newsroom">newsroom</Link>
              </li>
              <li className="nav-link">
                <Link href="/portfolio">portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            {/* Contact us */}
            <div className="nav-link border border-blue py-4 px-6 text-blue rounded-lg btnAnimation">
              <Link href="/contact-us">contact us</Link>
            </div>
          </div>
          {/* Mobile view */}
          {!istoggled ? (
            <MenuIcon
              onClick={handleToggle}
              size={30}
              className="block lg:hidden"
            />
          ) : (
            <X onClick={handleToggle} size={30} className="block lg:hidden" />
          )}
          {istoggled && (
            <div
              className={`block lg:hidden absolute bg-[#111857] w-full ${
                istoggled ? "left-0" : "-left-[100%]"
              } top-[70px] z-30`}
            >
              <ul className="grid place-items-center gap-8 py-8 z-40">
                <li className="nav-link text-white">
                  <Link href="/">home</Link>
                </li>
                <li className="nav-link text-white">
                  <Link href="about-us">about us</Link>
                </li>
                <li className="nav-link text-white">
                  <Link href="/services">services</Link>
                </li>
                <li className="nav-link text-white">
                  <Link href="/newsroom">newsroom</Link>
                </li>
                <li className="nav-link text-white">
                  <Link href="/portfolio">portfolio</Link>
                </li>
                {/* Contact us */}
                <li
                  className="
                    nav-link
                    border
                    border-white
                    py-4
                    px-6
                    text-white
                    rounded-lg
                  "
                >
                  <Link href="/contact-us">contact us</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
