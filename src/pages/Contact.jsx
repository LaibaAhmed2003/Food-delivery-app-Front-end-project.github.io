import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setSubmitted(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    },
  });

  return (
    <div style={{ marginTop: "6%" }}>
      <h1 className="heading contact-heading">Contact Us</h1>
      {!submitted ? (
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <input
            className={`input-form ${
              formik.touched.name && formik.errors.name ? "error" : ""
            }`}
            id="name"
            name="name"
            placeholder="Enter your name here"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <input
            className={`input-form ${
              formik.touched.email && formik.errors.email ? "error" : ""
            }`}
            id="email"
            name="email"
            placeholder="Enter your email here"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <textarea
            className={`input-form ${
              formik.touched.message && formik.errors.message ? "error" : ""
            }`}
            id="message"
            name="message"
            placeholder="Enter your message here"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <p>Thank you for your submission!</p>
          <p>Redirecting to Home page...</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
