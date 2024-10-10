"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "", // This will be used as from_name
    user_email: "", // This will be sent as user_email
    message: "",
    to_name: "Rishabh", // Recipient name (static or dynamic)
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting to send email

    const emailParams = {
      from_name: formData.user_name, // Sender's name
      to_name: formData.to_name, // Recipient's name
      user_email: formData.user_email, // Sender's email
      message: formData.message, // Message content
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Use env variable
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Use env variable
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Use env variable
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Message sent successfully!"); // Show success toast
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form
        },
        (error) => {
          // console.log(error.text);
          toast.error("Failed to send message.");
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  return (
    <div className="bg-bgColor min-h-screen flex items-center justify-center sm::p-5">
      <div className="bg-lightDark p-4 sm:p-8 rounded-lg w-full md:max-w-2xl shadow-2xl">
        <h1 className="text-primaryColor text-3xl font-playfair mb-4 text-center">
          Contact Us
        </h1>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-darkDark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 bg-darkDark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 h-64 bg-darkDark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor" // Increased height to h-64
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primaryColor text-darkDark font-bold rounded-md hover:bg-secondaryColor transition duration-300"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <div className="flex w-full items-center justify-center">
                <Oval
                  visible={true}
                  height="30"
                  width="30"
                  color="#1e201e"
                  ariaLabel="oval-loading"
                  secondaryColor="#1e201e"
                  wrapperStyle={{}}
                  wrapperClass="transition duration-300 ease-in-out"
                  strokeWidth={5}
                  strokeWidthSecondary={6}
                />
              </div>
            ) : (
              <div className="flex w-full items-center justify-center">
                Send Message
              </div>
            )}
          </button>
        </form>
        <ToastContainer /> {/* Toast container for notifications */}
      </div>
    </div>
  );
};

export default ContactForm;
