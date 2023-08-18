"use client";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { LuBell } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-primary text-white flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <button className="text-left">
          <h1 className="text-3xl font-bold tracking-[.2rem]">KAMCO</h1>
          <p className="text-base font-bold tracking-[.4rem]">INVEST</p>
        </button>
        <div className="flex items-center gap-4">
          <span className="block h-10 w-[1px] bg-neutral-50"></span>
          <p className="font-semibold">Customers</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="rounded-full pl-8 text-sm w-full bg-white/20 ring-transparent focus:ring-neutral-400 focus:bg-white/25 text-white placeholder:text-white"
            placeholder="Search"
          />
        </div>

        <button>
          <BsGear size={25} />
        </button>
        <button>
          <LuBell size={25} />
        </button>

        <span className="block h-10 w-[1px] bg-neutral-50"></span>

        <Dropdown
          label="Jacob Gillespie"
          renderTrigger={() => {
            return (
              <button className="flex items-center gap-2">
                <Image
                  src={"/user.jpeg"}
                  alt="User Pic"
                  className="rounded-full object-cover"
                  height={"36"}
                  width={"36"}
                />

                <p>Jacob Gillespie</p>

                <BiSolidDownArrow />
              </button>
            );
          }}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
