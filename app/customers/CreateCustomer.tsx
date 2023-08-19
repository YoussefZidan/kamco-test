"use client";
import { useFormik } from "formik";
import { useCallback, useMemo } from "react";
import * as yup from "yup";
import AppFormPhone from "../components/forms/AppFormPhone";
import AppFormRadio from "../components/forms/AppFormRadio";
import AppFormSelect from "../components/forms/AppFormSelect";
import AppFormText from "../components/forms/AppFormText";
import AppFormToggle from "../components/forms/AppFormToggle";

const CreateCustomer = () => {
  const initialValues = useMemo(() => {
    return {
      fName: "",
      lName: "",
      mobileCode: "+965",
      mobileNumber: "",
      title: "",
      gender: "male",
      status: "false",
    };
  }, []);

  const validationSchema = useMemo(() => {
    return yup.object({
      fName: yup.string().required("This field is required"),
      lName: yup.string().required("This field is required"),
      mobileNumber: yup.string().required("This field is required"),
      mobileCode: yup.string().required("This field is required"),
      title: yup.string().required("This field is required"),
      gender: yup.string().required("This field is required"),
      status: yup.string(),
    });
  }, []);

  const onSubmit = useCallback((values: any) => {
    console.log(values);
  }, []);

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
        <div className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-5">
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
            invalid={!!(formik.touched.mobileNumber && formik.errors.mobileNumber)}
            errorMessage={formik.errors.mobileNumber || ""}
          />

          <AppFormSelect
            label="Title"
            name="title"
            placeholder="Select account type"
            options={[
              { label: "Free", value: "Free" },
              { label: "Standard", value: "Standard" },
              { label: "Premium", value: "Premium" },
            ]}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={!!(formik.touched.title && formik.errors.title)}
            errorMessage={formik.errors.title || ""}
          />

          <AppFormRadio
            label="Gender"
            name="gender"
            value={formik.values.gender}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={!!(formik.touched.gender && formik.errors.gender)}
            errorMessage={formik.errors.gender || ""}
          />

          <AppFormToggle
            label="Status"
            name="status"
            value={formik.values.status}
            onChange={(value: boolean) => {
              formik.setFieldValue("status", `${value}`);
            }}
            onBlur={formik.handleBlur}
            enabledText="Active"
            disabledText="Inactive"
          />
        </div>

        <div className="text-right mt-5">
          <button type="submit" className="app-btn-primary" disabled={!formik.isValid}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomer;
