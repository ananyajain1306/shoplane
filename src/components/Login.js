import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial values for the form
  const initialValues = {
    email: "",
    password: "",
  };

  // Form submission handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data", values);
    resetForm(); // Optional: Reset form after submission
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2 className="text-center mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email Field */}
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

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-100"
              style={{ padding: "0.5rem", fontSize: "1rem" }}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
