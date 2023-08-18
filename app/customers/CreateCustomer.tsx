import { countries } from "constants-js";
import AppFormPhone from "../components/forms/AppFormPhone";
import AppFormRadio from "../components/forms/AppFormRadio";
import AppFormSelect from "../components/forms/AppFormSelect";
import AppFormText from "../components/forms/AppFormText";
import AppFormToggle from "../components/forms/AppFormToggle";

const CreateCustomer = () => {
  return (
    <div className="app-card">
      <h2 className="text-lg font-bold">Create a customer</h2>
      <hr className="my-2" />
      <div className="grid grid-cols-3 my-4 gap-5">
        <AppFormText
          label="First Name"
          placeholder="Enter customer first name"
        />
        <AppFormText label="Last Name" placeholder="Enter customer last name" />
        <AppFormPhone
          label="Mobile Number"
          placeholder="| Enter customer mobile number"
        />

        <AppFormSelect
          label="Title"
          options={countries}
          placeholder="Select account type"
        />

        <AppFormRadio
          label="Gender"
          name="gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />

        <AppFormToggle
          label="Status"
          disabledText="Inactive"
          enabledText="Active"
        />
      </div>

      <div className="text-right mt-5">
        <button className="app-btn-primary">Create account</button>
      </div>
    </div>
  );
};

export default CreateCustomer;
