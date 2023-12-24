import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/users/signin",
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = res.data;
        console.log(data);
        if (data.success === false) {
          console.log(data.message);
          return;
        }
        localStorage.setItem("authToken", data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } catch (error) {
        console.log("SignIn", error);
      }
    },
  });

  return (
    <div style={{ marginTop: "6%" }} className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
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
          style={{ backgroundColor: "#fac031" }}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700" style={{ color: "#fac031" }}>
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
