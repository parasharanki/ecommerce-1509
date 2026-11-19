      
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      event: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),

      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10 digit phone number")
        .required("Phone number is required"),

      event: Yup.string()
        .required("Please select an event"),

      message: Yup.string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });

  return (
    <div className="w-full lg:w-[563px] h-auto lg:h-[543px] backgroundgradient rounded-2xl py-5 px-6 sm:px-8">

    

      <form onSubmit={formik.handleSubmit} className="py-6">

        <div className="flex flex-col">

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-4 rounded-full border border-black bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black focus:outline-none focus:ring-0"
              />

              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600 text-sm mt-1 ml-3">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-4 rounded-full border border-black bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black focus:outline-none focus:ring-0"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-sm mt-1 ml-3">
                  {formik.errors.email}
                </p>
              )}
            </div>

          </div>

          {/* Phone & Event */}
          

  
         

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
            >
              <span className="font-medium font-gordita text-[18px] sm:text-[20px] text-center">
                Login
              </span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default LoginForm;
