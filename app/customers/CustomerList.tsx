import { humanFriendlyDate } from "javascript-functions";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { BsCloudUpload, BsFileEarmarkArrowUp } from "react-icons/bs";
import { CiSearch, CiViewTable } from "react-icons/ci";
import { users } from "../db";

const CustomerList = () => {
  return (
    <div className="app-card overflow-x-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Customers list</h2>
        <div className="text-primary flex items-center justify-center gap-2">
          <button>
            <CiSearch size={26} />
          </button>
          <button>
            <CiViewTable size={26} />
          </button>
          <button>
            <BsCloudUpload size={26} />
          </button>
          <button>
            <BsFileEarmarkArrowUp size={26} />
          </button>
        </div>
      </div>
      <hr className="my-2" />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-base text-primary bg-primary-lighter">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Full name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile number
              </th>
              <th scope="col" className="px-6 py-3">
                Account #
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Last login
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((ele, i) => (
              <tr key={i} className="bg-white border-b">
                <td className="px-6 py-4">{i}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {ele.first_name + " " + ele.last_name}
                </th>
                <td className="px-6 py-4">{ele.email}</td>
                <td className="px-6 py-4">{ele.mobile_number}</td>
                <td className="px-6 py-4">{ele.account}</td>
                <td className="px-6 py-4">
                  {ele.status.length % 2 === 1 ? "Verified" : "Not Verified"}
                </td>
                <td className="px-6 py-4">
                  {humanFriendlyDate(new Date(ele.last_login))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav className="text-right mt-5">
          <ul className="inline-flex items-center gap-2 -space-x-px text-sm">
            <li>
              <button className="flex items-center justify-center text-gray-400 hover:text-primary-dark">
                <MdOutlineKeyboardArrowLeft size={28} />
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 rounded-lg leading-tight text-white bg-primary border hover:bg-primary-dark">
                1
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                2
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center text-gray-400 hover:text-primary-dark">
                <MdOutlineKeyboardArrowRight size={28} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomerList;
