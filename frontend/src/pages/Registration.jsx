
import React from "react";
import { useFormik } from "formik";

const Registration = () => {

  // Form validation using Formik only
  const validate = (values) => {
    const errors = {};

    // Name validation
    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (values.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      errors.email = "Enter a valid email address";
    }

    // Phone validation
    if (!values.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(values.phone)) {
      errors.phone = "Enter a valid 10 digit phone number";
    }

    // Event validation
    if (!values.event) {
      errors.event = "Please select an event";
    }

    // Message validation
    if (!values.message.trim()) {
      errors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      event: "",
      message: "",
    },

    validate,

    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);

      alert("Form submitted successfully!");

      resetForm();
    },
  });

  // Keep your existing JSX and Tailwind classes here.
};

export default Registration;
