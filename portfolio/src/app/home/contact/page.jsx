"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message.");
      }
    } catch (error) {
      setSuccess("An error occurred.");
    }
  };

  return (
    <div className="bg-bgColor min-h-screen flex items-center justify-center p-5">
      <div className="bg-lightDark p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-primaryColor text-3xl font-playfair mb-4">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-darkDark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
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
              className="w-full p-3 h-32 bg-darkDark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primaryColor text-darkDark font-bold rounded-md hover:bg-secondaryColor transition duration-300"
          >
            Send Message
          </button>
        </form>
        {success && (
          <p className="mt-4 text-secondaryColor text-center">{success}</p>
        )}
      </div>
    </div>
  );
}
