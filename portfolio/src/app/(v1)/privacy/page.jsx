"use client";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="bg-darkDark min-h-screen py-10 px-6 md:px-20 rounded-md shadow-xl border border-gray-600">
      <h1 className="text-primaryColor text-4xl font-bold mb-6">
        Privacy Policy
      </h1>
      <p className="text-tertiaryColor leading-7 mb-6">
        At <span className="text-primaryColor">Rishabh Dubey</span>, we value
        your privacy. This policy outlines how we collect, use, and protect your
        personal information when using our website and services.
      </p>

      <h2 className="text-primaryColor text-2xl font-semibold mt-8 mb-4">
        Information We Collect
      </h2>
      <p className="text-tertiaryColor leading-7">
        - Personal data such as name, email, and phone number. - Cookies and
        usage data to improve website performance. - Information you voluntarily
        provide through forms.
      </p>

      <h2 className="text-primaryColor text-2xl font-semibold mt-8 mb-4">
        How We Use Your Information
      </h2>
      <p className="text-tertiaryColor leading-7">
        - To provide and maintain services. - To improve and personalize user
        experience. - To communicate with you regarding updates and offers.
      </p>

      <h2 className="text-primaryColor text-2xl font-semibold mt-8 mb-4">
        Security of Data
      </h2>
      <p className="text-tertiaryColor leading-7">
        We implement industry-standard measures to protect your data. However,
        no method of transmission over the internet is 100% secure.
      </p>

      <p className="text-tertiaryColor mt-10">
        If you have any questions about our Privacy Policy, please{" "}
        <Link
          href="/contact"
          className="text-primaryColor hover:underline transition duration-200"
        >
          contact us
        </Link>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
