"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./contactme.module.scss";

const ContactForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    timeline: "",
    projectDetails: "",
  };

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{7,14}$/, "Invalid phone number")
      .required("Phone number is required"),
    service: Yup.string().required("Service of interest is required"),
    timeline: Yup.string().required("Timeline is required"),
    projectDetails: Yup.string().required("Project details are required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log("Form data:", values);
    alert("Form submitted successfully!");
  };

  return (
    <section className={`${styles.contact_form}  text-white py-16`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4">Contact me</h2>
        <p className="text-gray-400 text-center mb-12">
          Cultivating Connections: Reach Out And Connect With Me
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className={`${styles.form_field} w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:ring focus:ring-orange-500 outline-none`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={`${styles.form_field} w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:ring focus:ring-orange-500 outline-none`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                className={`${styles.form_field} w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:ring focus:ring-orange-500 outline-none`}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="service"
                as="select"
                className={`${styles.form_field} w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:ring focus:ring-orange-500 outline-none`}
              >
                <option value="" disabled>
                  Service Of Interest
                </option>
                <option value="webDesign">Web Design</option>
                <option value="uiux">UI/UX Design</option>
                <option value="development">Development</option>
              </Field>
              <ErrorMessage
                name="service"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="timeline"
                type="text"
                placeholder="Timeline"
                className={`${styles.form_field} w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:ring focus:ring-orange-500 outline-none`}
              />
              <ErrorMessage
                name="timeline"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <Field
                name="projectDetails"
                as="textarea"
                placeholder="Project Details"
                className={`${styles.form_field} w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:ring focus:ring-orange-500 outline-none h-28`}
              />
              <ErrorMessage
                name="projectDetails"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div
              className={`${styles.submit_button} col-span-1 md:col-span-2 text-end`}
            >
              <button
                type="submit"
                className="px-6 py-2 text-white font-semibold rounded-md hover:bg-orange-600 transition"
              >
                Send
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
