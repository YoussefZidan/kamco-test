import { useEffect, useState } from "react";

interface Tab {
  id: number;
  label: string;
  tab: JSX.Element | JSX.Element[];
}

interface AppTabsProps {
  tabs: Tab[];
  onTabChange?: (tab: Tab) => void;
}

function AppTabs({ tabs, onTabChange }: AppTabsProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [componentTabs, setComponentTabs] = useState<{ [key: number]: Tab }>(
    {}
  );
  const activeClass = "font-bold text-gray-800 border-gray-800";
  const inActiveClass =
    "border-transparent hover:border-gray-300 hover:text-gray-600";

  useEffect(() => {
    if (tabs.length) {
      const updatedTabs: { [key: number]: Tab } = {};
      tabs.forEach((ele, i) => {
        updatedTabs[i] = { ...ele, id: i };
      });
      setComponentTabs(updatedTabs);
    }
  }, [tabs]);

  return (
    <>
      {/* Tabs Header */}
      <div className="overflow-x-auto border-gray-200 text-center text-sm font-medium text-gray-500">
        <ul className="relative z-20 flex flex-col sm:flex-row">
          {Object.values(componentTabs).map((ele) => (
            <li
              key={ele.id}
              className={`inline-block flex-grow cursor-pointer rounded-t-lg border-b-[3px] p-4 text-sm ${
                ele.id === activeTabIdx ? activeClass : inActiveClass
              }`}
              onClick={() => {
                setActiveTabIdx(ele.id);
                if (onTabChange) onTabChange(ele);
              }}
            >
              {ele.label}
            </li>
          ))}
        </ul>
        <hr className="relative top-[-2.5px] z-10 border" />
      </div>
      {/* Tabs Body */}
      <div className="overflow-x-auto p-3">
        {componentTabs[activeTabIdx]?.tab}
      </div>
    </>
  );
}

export default AppTabs;
