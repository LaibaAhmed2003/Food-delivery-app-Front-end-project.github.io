import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const shippingCost = 200;
  const total = subtotal + shippingCost;
  const [amounts, setAmounts] = useState({});

  const dispatch = useDispatch();
  const location = useLocation();
  const totalPrice = new URLSearchParams(location.search).get("totalPrice");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      billingAddress: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      fullName: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      billingAddress: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      setOrderPlaced(true);
    },
  });

  return (
    <div style={{ marginTop: "6%" }}>
      <div style={{ marginTop: "6%", display: "flex", padding: "0px 44px" }}>
        <div className="grid sm:px-10 lg:grid-cols-1 lg:px-10 xl:px-5">
          <div className="px-2 pt-4">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p>
            {cart.map((item, index) => (
              <div key={index}>
                <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                  <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={item.image}
                      alt="Food"
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <h2 className="cart-product-title text-lg sm:text-xl">
                        {item.name} ({amounts[item.id]}x)
                      </h2>

                      <span className="font-semibold">{item.dec}</span>

                      <p className="text-lg font-bold">{item.price}Rs</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="ml-5 px-5 py-8">
              <p className="mt-8 text-lg font-medium">Shipping Method</p>
              <span className="mt-2 font-semibold">Cash on Delivery</span>
              <p className="text-slate-500 text-sm leading-6">
                Delivery: 40min
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0"
          style={{ width: "600px" }}
        >
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full rounded-md border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-200"
                } px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
            <label
              htmlFor="fullName"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={`w-full rounded-md border ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border-red-500"
                    : "border-gray-200"
                } px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.fullName}
              </p>
            )}

            <label
              htmlFor="phoneNumber"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className={`w-full rounded-md border ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border-red-500"
                    : "border-gray-200"
                } px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                placeholder="Your phone number here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.phoneNumber}
              </p>
            )}

            <label
              htmlFor="billingAddress"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <input
              type="text"
              id="billingAddress"
              name="billingAddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.billingAddress}
              className={`w-full rounded-md border ${
                formik.touched.billingAddress && formik.errors.billingAddress
                  ? "border-red-500"
                  : "border-gray-200"
              } px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="Enter billing address here"
            />
            {formik.touched.billingAddress && formik.errors.billingAddress && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.billingAddress}
              </p>
            )}

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">{subtotal}Rs</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">{shippingCost}Rs</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">{total}Rs</p>
            </div>

            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      {orderPlaced && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p className="text-xl font-medium">Thank You!</p>
            <p>Your order is successfully placed!</p>
            <button onClick={() => setOrderPlaced(false)}>
              <Link to="/">Close</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
