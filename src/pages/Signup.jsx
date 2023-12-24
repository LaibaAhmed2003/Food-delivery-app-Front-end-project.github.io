import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setSubmitting(true);
        const res = await axios.post(
          "http://localhost:3000/users/signup",
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.data;
        console.log(data);
        if (data.success === false) {
          setSubmitting(false);
          setErrors({ general: data.message });
          return;
        }
        setSubmitting(false);
        navigate("/signin");
      } catch (error) {
        setSubmitting(false);
        setErrors({ general: error.message });
      }
    },
  });

  return (
    <div style={{ marginTop: "6%" }} className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 " onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={`border p-3 rounded-lg ${
            formik.touched.username && formik.errors.username
              ? "border-red-500"
              : ""
          }`}
          id="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          required
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-500">{formik.errors.username}</div>
        ) : null}
        <input
          type="email"
          placeholder="Email"
          className={`border p-3 rounded-lg ${
            formik.touched.email && formik.errors.email ? "border-red-500" : ""
          }`}
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          className={`border p-3 rounded-lg ${
            formik.touched.password && formik.errors.password
              ? "border-red-500"
              : ""
          }`}
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          style={{ backgroundColor: "#fac031" }}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {formik.isSubmitting ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-blue-700" style={{ color: "#fac031" }}>
            Sign in
          </span>
        </Link>
      </div>
      {formik.errors.general && (
        <p className="text-red-500 mt-5">{formik.errors.general}</p>
      )}
    </div>
  );
};

export default SignUp;
