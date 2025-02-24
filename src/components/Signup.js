import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate =useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values, { resetForm }) => {
    alert("Login success")
    console.log("Form Data", values);
    resetForm();
    navigate("/")
  };
  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2 className="text-center mb-4">Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger mt-1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger mt-1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="input-group">
                <Field
                  type= "password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className="form-control"
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-100"
              style={{ padding: "0.5rem", fontSize: "1rem" }}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUpForm;


