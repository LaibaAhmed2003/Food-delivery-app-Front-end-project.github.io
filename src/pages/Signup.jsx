import React from "react";
import { Fragment } from "react";
import { Form, Feild, ErrorMessage } from "formik";

const Signup = () => {
  return (
    <Fragment>
      <div className="signup-conatiner">
        <div className="col-md-12 text-center">
          <h1>SignUp</h1>
          <Form>
            <div className="col-md-12">
              <Feild
                type="text"
                name="name"
                palceholder="First Name"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="col-md-12">
              <Feild
                type="text"
                name="email"
                palceholder="Email"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="col-md-12">
              <Feild
                type="text"
                name="contactnumber"
                palceholder="Phone Number"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="contactnumber" />
              </p>
            </div>
            <div className="col-md-12">
              <Feild
                type="password"
                name="password"
                palceholder="First Your Password"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="password" />
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
