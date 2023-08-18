import { countries } from "constants-js";
import {
  humanFriendlyDate,
  preventNonNumericalInput,
} from "javascript-functions";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { BsCloudUpload, BsFileEarmarkArrowUp } from "react-icons/bs";
import { CiSearch, CiViewTable } from "react-icons/ci";
import { users } from "../db";

export default function Customers() {
  return (
    <div className="p-5 grid gap-5 grid-cols-1">
      <div className="app-card">
        <h2 className="text-lg font-bold">Create a customer</h2>
        <hr className="my-2" />

        <div className="grid grid-cols-3 my-4 gap-5">
          <label className="block">
            <span className="text-neutral-600 font-semibold mb-2 text-base block">
              First Name
            </span>
            <input
              className="app-input"
              type="text"
              placeholder="Enter customer first name"
            />
          </label>

          <label className="block">
            <span className="text-neutral-600 font-semibold mb-2 text-base block">
              Last Name
            </span>
            <input
              className="app-input"
              type="text"
              placeholder="Enter customer last name"
            />
          </label>

          <label className="block">
            <span className="text-neutral-600 font-semibold mb-2 text-base block">
              Mobile Number
            </span>
            <div className="flex items-start">
              <select
                className="app-input flex-[1] bg-white border-r-0 rounded-r-none focus:ring-0"
                defaultValue={"+965"}
              >
                {countries.map((ele: any) => (
                  <option
                    key={ele.code}
                    value={ele.dial_code}
                  >{`${ele.dial_code}   ${ele.flag}`}</option>
                ))}
              </select>

              <div className="flex-[4]">
                <input
                  type="text"
                  className="app-input border-l-0 rounded-l-none focus:ring-0 pl-0"
                  onKeyPress={preventNonNumericalInput}
                  placeholder="| Enter customer mobile number"
                />
              </div>
            </div>
          </label>

          <label className="block">
            <span className="text-neutral-600 font-semibold mb-2 text-base block">
              Title
            </span>
            <select className="app-input bg-white">
              {countries.map((ele: any, i: number) => (
                <option key={ele.code} value={ele.dial_code}>
                  {i}
                </option>
              ))}
            </select>
          </label>

          <div>
            <span className="text-neutral-600 font-semibold mb-3 text-base block">
              Gender
            </span>
            <div className="flex gap-10">
              <label>
                <input type="radio" name="gender" value="male" />
                <span className="text-base ms-2">Male</span>
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                <span className="text-base ms-2">Female</span>
              </label>
            </div>
          </div>

          <label>
            <span className="text-neutral-600 font-semibold mb-3 text-base block">
              Status
            </span>
            <div className="flex items-center gap-3">
              <span className="opacity-50">Active</span>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 -blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
              <span className="font-semibold">Inactive</span>
            </div>
          </label>
        </div>

        <div className="text-right mt-5">
          <button className="app-btn-primary">Create account</button>
        </div>
      </div>

      <div className="app-card">
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
    </div>
  );
}
