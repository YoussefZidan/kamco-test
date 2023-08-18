"use client";
import { BsFlag, BsGear } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { PiUserSquare } from "react-icons/pi";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import AppTabs from "../AppTabs";
import SearchInput from "./SearchInput";

const DashboardSidebar = () => {
  const iconSize = 20;

  const standardNavItems = [
    {
      title: <p className="text-sm">Dashboard</p>,
      icon: <HiOutlineChartSquareBar size={iconSize} />,
    },
    {
      title: (
        <div className="flex justify-between items-center">
          <p className="text-sm text-neutral-900 font-bold">Customers</p>
          <CiSquarePlus size={28} className="text-neutral-900 font-bold" />
        </div>
      ),
      icon: <FiUsers size={iconSize} />,
    },
    {
      title: (
        <div className="flex justify-between items-center">
          <p className="text-sm">Backend Users</p>
          <CiSquarePlus size={28} />
        </div>
      ),
      icon: <PiUserSquare size={24} />,
    },
    {
      title: (
        <div className="flex justify-between items-center">
          <p className="text-sm">Master Data</p>
          <CiSquarePlus size={28} />
        </div>
      ),
      icon: <BsFlag size={iconSize} />,
    },
    {
      title: <p className="text-sm">Configuration</p>,
      icon: <BsGear size={iconSize} />,
    },
  ];

  const favoriteNavItems = [
    {
      title: <p className="text-sm">Configuration</p>,
      icon: <BsGear size={iconSize} />,
    },
  ];

  const tabs = [
    {
      id: 1,
      label: "Standard",
      tab: standardNavItems.map((ele, i) => (
        <MenuItem key={i} icon={ele.icon}>
          {ele.title}
        </MenuItem>
      )),
    },
    {
      id: 2,
      label: "Favorite",
      tab: favoriteNavItems.map((ele, i) => (
        <MenuItem key={i} icon={ele.icon}>
          {ele.title}
        </MenuItem>
      )),
    },
  ];

  return (
    <Sidebar
      className="border shadow-sm"
      backgroundColor="#EBEBEB"
      width="auto"
    >
      <Menu className="border-b py-2">
        <SearchInput />
      </Menu>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              color: "black",
              fontWeight: "600",
            },
          },
        }}
      >
        <AppTabs onTabChange={() => {}} tabs={tabs} />
      </Menu>
    </Sidebar>
  );
};

export default DashboardSidebar;
