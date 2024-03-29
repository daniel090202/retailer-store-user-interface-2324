"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import icons from "@/assets/Icons";
import images from "@/assets/Images";
import { appRoutes } from "@/config/pathConfig";

import UserTippy from "./UserTippy";

const NavBar = () => {
  const session = useSession();
  const currentPage = usePathname();

  const [state, setState] = useState(false);
  const [profileButtonClicked, setProfileButtonClicked] = useState(false);

  const renderNavBarElements = (): React.ReactNode => {
    if (
      !currentPage?.startsWith("/auth/login") &&
      session.status === "authenticated"
    ) {
      const navBarElements = [];

      navBarElements.push(
        <Link
          key={0}
          href={appRoutes.home}
          className={`p-4 text-gray-600 font-medium rounded-lg md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 hover:text-gray-800 hover:bg-gray-200 ${
            currentPage === "/" ? "bg-gray-100" : ""
          }`}
        >
          Home
        </Link>
      );

      navBarElements.push(
        <Link
          key={1}
          href={`${appRoutes.products.all}?page=1`}
          className={`text-gray-600 font-medium p-4 rounded-lg md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 hover:text-gray-800 hover:bg-gray-200 ${
            currentPage?.startsWith("/user") ||
            currentPage?.startsWith("/customer") ||
            currentPage?.startsWith("/product") ||
            currentPage?.startsWith("/notification") ||
            currentPage?.startsWith("/services") ||
            currentPage?.startsWith("/notifications")
              ? "bg-gray-100"
              : ""
          }`}
        >
          Services
        </Link>
      );

      navBarElements.push(
        <Link
          key={2}
          href={appRoutes.checkout.inStore.checkout}
          className={`text-gray-600 font-medium p-4 rounded-lg md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 hover:text-gray-800 hover:bg-gray-200 ${
            currentPage?.startsWith("/checkout-in-store") ? "bg-gray-100" : ""
          }`}
        >
          Counter
        </Link>
      );

      return navBarElements;
    }
  };

  return (
    <nav
      className={`mt-2 mx-2 bg-white rounded-xl md:text-sm ${
        state ? "shadow-lg border md:shadow-none md:border-none" : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href={appRoutes.home}
            className="font-bold hidden md:text-2xl md:flex md:items-center lg:text-4xl"
          >
            <Image
              src={images.logo}
              width={84}
              height={28}
              alt="Website application logo."
            />
            <span>No Brand</span>
          </a>
          <a
            href={appRoutes.home}
            className="shadow-lg border rounded-xl p-2 block md:hidden"
          >
            <Image
              src={images.maleDefaultProfilePicture}
              width={36}
              height={36}
              alt="User's profile picture."
            />
          </a>
          <div className="text-xl text-gray-400 md:hidden">
            <button onClick={() => setState(!state)}>
              {state ? (
                <div>{icons.caretDown}</div>
              ) : (
                <div>{icons.menuBars}</div>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-end items-center md:flex ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-4 text-sm md:text-lg md:flex md:space-x-6 md:space-y-0 lg:text-xl">
            {renderNavBarElements()}
            <li className="relative shadow-lg border rounded-xl p-3 hidden cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 md:block">
              <UserTippy
                profileButtonClicked={profileButtonClicked}
                setProfileButtonClicked={setProfileButtonClicked}
              >
                <Image
                  src={images.maleDefaultProfilePicture}
                  width={40}
                  height={40}
                  alt="User's profile picture."
                  onClick={() => setProfileButtonClicked(!profileButtonClicked)}
                />
              </UserTippy>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
