import { countries } from "constants-js";
import { preventNonNumericalInput } from "javascript-functions";

export default function App() {
  return (
    <div className="p-5">
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

              <div className="flex-[5]">
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
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
              <span className="font-semibold">Inactive</span>
            </div>
          </label>
        </div>

        <div className="text-right mt-5">
          <button className="app-btn-primary">Create account</button>
        </div>
      </div>
    </div>
  );
}
