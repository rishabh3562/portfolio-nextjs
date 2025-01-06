"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { urls } from "@/app/(v1)/data/myData"; // Import the urls object
import CustomToast from "./CustomToast"; // Import your CustomToast component
import { Oval } from "react-loader-spinner"; // Import the loader

const FooterLinks = () => (
  <div className="flex justify-center sm:justify-center space-x-6 mt-4 sm:mt-0">
    {["privacy", "terms", "contact"].map((link, index) => (
      <Link
        key={index}
        href={`/${link}`}
        className="text-tertiaryColor hover:text-primaryColor transition duration-200 text-sm sm:text-base"
      >
        {link.charAt(0).toUpperCase() + link.slice(1).replace("_", " ")}
      </Link>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center sm:justify-center space-x-6 mt-4 sm:mt-0">
    {Object.keys(urls).map((key) => (
      <Link
        key={key}
        href={urls[key].href}
        target="_blank"
        className="text-primaryColor hover:text-primaryDark transition duration-300 text-2xl sm:text-3xl"
      >
        <span>{urls[key].icon}</span>
      </Link>
    ))}
  </div>
);

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const [toastMessage, setToastMessage] = useState(""); // State for toast message
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: email,
    to_name: "Rishabh", // Recipient name (you)
    message: "A new user has joined the newsletter. Their email is: ", // Admin notification message
  });
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader

    // Prepare the email parameters to notify admin (you)
    const emailParams = {
      from_name: "Rishabh Dubey", // Set sender's name
      from_email: "dubeyrishabh108@gmail.com", // Set sender's email
      to_name: formData.to_name, // Recipient name (you)
      user_email: formData.user_email, // The subscriber's email
      message: formData.message + formData.user_email, // Send user email to admin
    };

    // Send an email to you (admin) about the new subscription
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_SERVICE_ID, // Use env variable
        process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_TEMPLATE_ID, // Use the one template ID
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_PUBLIC_KEY // Use env variable
      )
      .then(() => {
        // Send confirmation to subscriber (user_email)
        const confirmationParams = {
          from_name: "Rishabh Dubey", // Sender's name
          from_email: "dubeyrishabh108@gmail.com", // Sender's email
          to_name: formData.user_name, // Subscriber's name
          user_email: formData.user_email, // The subscriber's email (recipient)
          message: "Thank you for subscribing to our newsletter!", // Confirmation message
        };

        // Send confirmation to the subscriber
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_TEMPLATE_ID,
            confirmationParams,
            process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBER_PUBLIC_KEY
          )
          .then(() => {
            setToastMessage("Subscription successful. You will be notified.");
            setShowToast(true); // Show toast on success
            setStatus("Successfully subscribed!");

            // Clear the form after successful submission
            setEmail(""); // Reset email input
            setFormData({
              user_name: "",
              user_email: "",
              to_name: "Rishabh",
              message: "A new user has joined the newsletter. Their email is: ",
            }); // Reset form data
          })
          .catch((error) => {
            setToastMessage("Subscription failed. Please try again.");
            setShowToast(true); // Show toast on error
            setStatus("Subscription failed. Please try again.");
          });
      })
      .catch((error) => {
        setToastMessage("Subscription failed. Please try again.");
        setShowToast(true); // Show toast on error
        setStatus("Subscription failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false); // Hide loader once done
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-10">
      <p className="text-primaryColor text-xl sm:text-2xl font-semibold text-center">
        Stay Updated!
        <span className="block text-sm sm:text-md text-tertiaryColor">
          Subscribe to our newsletter
        </span>
      </p>

      {/* Email Input Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4 w-full sm:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setFormData({
              ...formData,
              user_email: e.target.value,
            });
          }}
          className="px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor w-full sm:w-80"
        />
      </div>

      {/* Subscribe Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 text-lightDark text-md font-semibold bg-primaryColor rounded-full hover:bg-primaryDark transition duration-300"
      >
        {isLoading ? (
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
        ) : (
          "Subscribe"
        )}
      </button>

      {/* Subscription Status */}
      {status && (
        <p className="mt-4 text-primaryColor text-sm sm:text-md">{status}</p>
      )}

      {/* Custom Toast Notification */}
      <CustomToast
        message={toastMessage} // Pass the dynamic toast message
        show={showToast} // Control toast visibility
        onClose={() => setShowToast(false)} // Close the toast
      />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-darkDark py-6 sm:py-8 mt-10 rounded-t-md border-t border-gray-600">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Social Links */}
      <div className="flex justify-center sm:justify-start sm:col-span-1">
        <SocialLinks />
      </div>

      {/* Email Subscription */}
      <div className="flex justify-center sm:justify-center sm:col-span-1">
        <EmailSubscription />
      </div>

      {/* Footer Links */}
      <div className="flex justify-center sm:justify-end sm:col-span-1">
        <FooterLinks />
      </div>
    </div>

    {/* Bottom Text */}
    <div className="text-center mt-6 text-tertiaryColor text-xs sm:text-sm opacity-70">
      Made with ❤️ by Rishabh
    </div>
  </footer>
);

export default Footer;
