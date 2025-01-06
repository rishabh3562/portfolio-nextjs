"use client";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <div className="bg-darkDark min-h-screen py-10 px-6 md:px-20 rounded-md shadow-xl border border-gray-600">
      <h1 className="text-primaryColor text-4xl font-bold mb-6">
        Terms of Service
      </h1>
      <p className="text-tertiaryColor leading-7 mb-6">
        Welcome to <span className="text-primaryColor">Rishabh Dubey</span>. By
        accessing our website, you agree to comply with the following terms and
        conditions. Please read them carefully.
      </p>

      <h2 className="text-primaryColor text-2xl font-semibold mt-8 mb-4">
        Use of Service
      </h2>
      <p className="text-tertiaryColor leading-7">
        - You must not misuse our services. - Do not attempt to harm or disrupt
        the site. - Use our services in compliance with applicable laws.
      </p>

      <h2 className="text-primaryColor text-2xl font-semibold mt-8 mb-4">
        Intellectual Property
      </h2>
      <p className="text-tertiaryColor leading-7">
        All content on this site, including text, graphics, and logos, is the
        property of <span className="text-primaryColor">Rishabh Dubey</span> and
        is protected by intellectual property laws.
      </p>

      <h2 className="text-primaryColor text-2xl font-semibold mt-8 mb-4">
        Limitation of Liability
      </h2>
      <p className="text-tertiaryColor leading-7">
        We are not responsible for any direct or indirect damages resulting from
        the use of our services.
      </p>

      <p className="text-tertiaryColor mt-10">
        If you have any questions about our Terms of Service, please{" "}
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

export default TermsOfService;
