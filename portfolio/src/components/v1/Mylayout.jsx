"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // For the back button icon
import Navbar from "@/components/v1/Navbar"; // Importing Navbar component
import "@/app/(v1)/style.css";
import BackButton from "@/components/v1/Backbutton";
import Breadcrumb from "./Breadcrumb";
import Footer from "@/components/v1/Footer";
const Layout = ({
  children,
  breadcrumbItems ,
  backButtonLink = "/",
  type = "default",
}) => {
  console.log(breadcrumbItems);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <header>
        <Navbar type={type} />{" "}
        {/* You can change the type to "projects" or "articles" */}
      </header>

      {/* Main Content Wrapper */}
      <div className="flex flex-1">
        {/* Back Button (on the left) */}

        {/* Content on the right */}
        <main className="flex-1 bg-gray-100">
          {/* <BackButton /> */}
          {children} {/* This will render the content passed to the Layout */}
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
