"use client";
import { countries } from "constants-js";
import { useFormik } from "formik";
import * as yup from "yup";
import AppFormPhone from "../components/forms/AppFormPhone";
import AppFormRadio from "../components/forms/AppFormRadio";
import AppFormSelect from "../components/forms/AppFormSelect";
import AppFormText from "../components/forms/AppFormText";
import AppFormToggle from "../components/forms/AppFormToggle";

const CreateCustomer = () => {
  const initialValues = {
    fName: "",
    lName: "",
    mobileCode: "+965",
    mobileNumber: "",
    title: "",
    gender: "",
    status: false,
  };

  const validationSchema = yup.object({
    fName: yup.string().required("This field is required"),
    lName: yup.string().required("This field is required"),
    mobileNumber: yup.string().required("This field is required"),
    mobileCode: yup.string().required("This field is required"),
    title: yup.string().required("This field is required"),
    gender: yup.string().required("This field is required"),
    status: yup.string(),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="app-card">
      <h2 className="text-lg font-bold">Create a customer</h2>
      <hr className="my-2" />
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-3 my-4 gap-5">
          <AppFormText
            label="First Name"
            placeholder="Enter customer first name"
            name="fName"
            value={formik.values.fName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={!!(formik.touched.fName && formik.errors.fName)}
            errorMessage={formik.errors.fName || ""}
          />

          <AppFormText
            label="Last Name"
            placeholder="Enter customer last name"
            name="lName"
            value={formik.values.lName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={!!(formik.touched.lName && formik.errors.lName)}
            errorMessage={formik.errors.lName || ""}
          />

          <AppFormPhone
            label="Mobile Number"
            placeholder="| Enter customer mobile number"
            inputName="mobileNumber"
            selectName="mobileCode"
            inputValue={formik.values.mobileNumber}
            selectValue={formik.values.mobileCode}
            onInputChange={(e) => {
              formik.setFieldValue("mobileNumber", e.target.value);
            }}
            onInputBlur={() => {
              formik.setFieldTouched("mobileNumber");
            }}
            onSelectChange={(e) => {
              formik.setFieldValue("mobileCode", e.target.value);
            }}
            onSelectBlur={() => {
              formik.setFieldTouched("mobileCode");
            }}
            invalid={
              !!(formik.touched.mobileNumber && formik.errors.mobileNumber)
            }
            errorMessage={formik.errors.mobileNumber || ""}
          />

          <AppFormSelect
            label="Title"
            placeholder="Select account type"
            name="title"
            options={countries}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={!!(formik.touched.title && formik.errors.title)}
            errorMessage={formik.errors.title || ""}
          />

          <AppFormRadio
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            label="Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            invalid={!!(formik.touched.gender && formik.errors.gender)}
            errorMessage={formik.errors.gender || ""}
          />

          <AppFormToggle
            label="Status"
            disabledText="Inactive"
            enabledText="Active"
            {...formik.getFieldProps("status")}
            onChange={(value: boolean) => {
              formik.setFieldValue("status", value);
            }}
          />
        </div>

        <div className="text-right mt-5">
          <button type="submit" className="app-btn-primary">
            Create account
          </button>
        </div>
      </form>

      <pre>{JSON.stringify(formik, null, 4)}</pre>
    </div>
  );
};

export default CreateCustomer;
