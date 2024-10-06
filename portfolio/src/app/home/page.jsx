// components/MyComponent.js

import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import "./style.css"; // Import your CSS file here
import MobileImage from "@/assets/ecell2.jpg";
import tableImage from "@/assets/ecell2.jpg";
import circleImage from "@/assets/circle_two.png"; // Correctly import the image
import projectImage from "@/assets/bharat_chauhan_brown.jpg";
import anotherCircleImage from "@/assets/another_circle_one.png";
import BlackArrowImage from "@/assets/arrow_black_one.png";
import WhiteArrowImage from "@/assets/arrow_white_one.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const MyComponent = () => {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <Link href="#">
              Rishabh<span>Dubey</span>
            </Link>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <label htmlFor="check" className="close-menu">
              <FaTimes />
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <FaBars />
          </label>
        </ul>
      </nav>

      <div className="v1-container">
        <div className="item item1">
          <Image
            src={circleImage}
            alt="circle image here"
            width={500}
            height={500}
          />
          <p className="main_slogan">
            AWS Certified <span> Cloud </span>Practitioner and
            <span>web </span> developer, crafting scalable web solutions that
            optimize performance and user experience.
          </p>
        </div>

        <div className="container-card item item2">
          <div className="card" id="jokeCard">
            <div className="card-inner">
              <div className="card-front">
                <p id="jokeQuestion">Click to reveal the joke!</p>
                <p id="reveal" className="phone-block">
                  Hover/Tap to reveal
                </p>
                <p id="reveal-not-phone" className="not-phone">
                  Hover/Tap to reveal
                </p>
              </div>
              <div className="card-back">
                <p id="jokeAnswer"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="item item3">
          <p className="title">Projects</p>
          <Link href="your-target-page.html" className="arrow-btn">
            <Image
              className="arrow"
              src={BlackArrowImage}
              alt="black arrow here"
              width={30}
              height={30}
            />
          </Link>
          <Image
            className="bharat_chauhan_img"
            src={projectImage}
            alt="bharat chauhan photo here"
            width={500}
            height={500}
          />
          <hr className="line" />

          <div className="project-wrapper">
            <p className="music">
              <Link
                href="https://www.youtube.com/watch?v=3KY8jwrQ6vM"
                target="_blank"
              >
                One Stream
              </Link>
            </p>
            <div className="project-link-wrapper">
              <Link
                href="https://github.com/username/OneStream"
                target="_blank"
              >
                <FaGithub /> GitHub
              </Link>
              <Link href="your-target-page.html">
                <div className="arrow-btn">
                  <p>ᐅ</p>
                </div>
              </Link>
            </div>
          </div>
          <hr className="line" />

          <p className="music">
            <Link
              href="https://www.youtube.com/watch?v=ENVW3uZ3a-4"
              target="_blank"
            >
              Unihub
            </Link>
            <span>
              {" "}
              |{" "}
              <Link href="https://github.com/username/Unihub" target="_blank">
                <FaGithub /> GitHub
              </Link>
            </span>
          </p>
          <hr className="line" />

          <p className="music">
            <Link
              href="https://www.youtube.com/watch?v=PfHHm6k2Bv4"
              target="_blank"
            >
              CodeNote
            </Link>
            <span>
              {" "}
              |{" "}
              <Link href="https://github.com/username/CodeNote" target="_blank">
                <FaGithub /> GitHub
              </Link>
            </span>
          </p>
        </div>

        <div className="item item4">
          <Image
            src={anotherCircleImage}
            alt="another circle here"
            width={500}
            height={500}
          />
          <p>
            I am a dedicated web developer currently pursuing a B.Tech in
            Computer Science, certified as an AWS Cloud Practitioner. My
            experience includes optimizing web performance, implementing RESTful
            APIs, and delivering cloud solutions for various projects. I am
            passionate about continuous learning and apply creative solutions to
            complex problems.
          </p>
        </div>

        <div className="item item5">
          <Image
            src={WhiteArrowImage}
            alt="arrow image"
            width={30}
            height={30}
          />
          <p className="questions">
            Have some <br /> Questions?
          </p>
          <p className="contact_me">
            Contact <span>me</span>
          </p>
        </div>

        <div className="item item6">
          <p>
            <Link href="https://x.com/dubeyrishabh108" target="_blank">
              X.com
            </Link>
          </p>
          <p>
            <Link
              href="https://www.linkedin.com/in/rishabh108/"
              target="_blank"
            >
              <FaLinkedin /> LINKEDIN
            </Link>
          </p>
          <p>
            <Link href="https://github.com/rishabh3562" target="_blank">
              <FaGithub /> GITHUB
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
