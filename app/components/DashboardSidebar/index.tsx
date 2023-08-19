"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { BsFlag, BsGear } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { PiUserSquare } from "react-icons/pi";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import AppTabs from "../AppTabs";
import SearchInput from "./SearchInput";

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();

  const iconSize = 20;

  const standardNavItems = useMemo(() => {
    return [
      {
        title: <p className="text-sm">Dashboard</p>,
        icon: <HiOutlineChartSquareBar size={iconSize} />,
        route: "/",
      },
      {
        title: (
          <div className="flex justify-between items-center">
            <p className="text-sm">Customers</p>
            <CiSquarePlus size={28} />
          </div>
        ),
        icon: <FiUsers size={iconSize} />,
        route: "/customers",
      },
      {
        title: (
          <div className="flex justify-between items-center">
            <p className="text-sm">Backend Users</p>
            <CiSquarePlus size={28} />
          </div>
        ),
        icon: <PiUserSquare size={24} />,
        route: "/backend-users",
      },
      {
        title: (
          <div className="flex justify-between items-center">
            <p className="text-sm">Master Data</p>
            <CiSquarePlus size={28} />
          </div>
        ),
        icon: <BsFlag size={iconSize} />,
        route: "/master-data",
      },
      {
        title: <p className="text-sm">Configuration</p>,
        icon: <BsGear size={iconSize} />,
        route: "/configuration",
      },
    ];
  }, []);

  const favoriteNavItems = useMemo(() => {
    return [
      {
        title: <p className="text-sm">Configuration</p>,
        icon: <BsGear size={iconSize} />,
        route: "/configuration",
      },
    ];
  }, []);

  const tabs = useMemo(() => {
    return [
      {
        id: 1,
        label: "Standard",
        tab: standardNavItems.map((ele, i) => (
          <MenuItem key={i} icon={ele.icon} component={"div"}>
            <Link
              className={pathname == ele.route ? "active" : ""}
              href={ele.route}
            >
              {ele.title}
            </Link>
          </MenuItem>
        )),
      },
      {
        id: 2,
        label: "Favorite",
        tab: favoriteNavItems.map((ele, i) => (
          <MenuItem key={i} icon={ele.icon} component={"div"}>
            <Link
              className={pathname == ele.route ? "active" : ""}
              href={ele.route}
            >
              {ele.title}
            </Link>
          </MenuItem>
        )),
      },
    ];
  }, [pathname]);

  const listenScreenResize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    });
  };

  useEffect(() => {
    listenScreenResize();
  }, []);

  return (
    <Sidebar
      collapsed={collapsed}
      className="border shadow-sm"
      backgroundColor="#EBEBEB"
      width="auto"
    >
      <Menu className="border-b py-2">
        <SearchInput />
      </Menu>
      <Menu>
        <AppTabs onTabChange={() => {}} tabs={tabs} />
      </Menu>
    </Sidebar>
  );
};

export default React.memo(DashboardSidebar);
