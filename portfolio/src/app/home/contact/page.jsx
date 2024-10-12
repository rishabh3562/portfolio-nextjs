"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Oval } from "react-loader-spinner";

import CustomToast from "@/components/v1/CustomToast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "", // This will be used as from_name
    user_email: "", // This will be sent as user_email
    message: "",
    to_name: "Rishabh", // Recipient name (static or dynamic)
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [showToast, setShowToast] = useState({ show: false, message: "" });

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
          setShowToast({ show: true, message: "Message sent successfully !" }); // Trigger success toast
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form
        },
        (error) => {
          setShowToast({ show: true, message: "Failed to send message." }); // Trigger error toast
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state
        setTimeout(() => setShowToast({ show: false, message: "" }), 3000); // Hide toast after 3 seconds
      });
  };

  return (
    <div className="bg-bgColor min-h-screen flex items-center justify-center sm:p-5">
      <div className="bg-lightDark p-4 sm:p-8 rounded-lg w-full md:max-w-2xl shadow-2xl">
        <h1 className="text-primaryColor text-3xl font-poppins mb-4 text-center">
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
              className="w-full p-3 h-64 bg-darkDark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
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

        {/* Custom Toast */}
        <CustomToast
          message={showToast.message}
          show={showToast.show}
          onClose={() => setShowToast({ show: false, message: "" })}
        />
      </div>
    </div>
  );
};

export default ContactForm;
