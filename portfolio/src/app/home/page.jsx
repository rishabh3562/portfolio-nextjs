// components/MyComponent.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import gsap from "gsap";
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

export const jokes = [
  {
    question: `How many programmers does it take to change a light bulb?`,
    answer: `None. It’s a "hardware" problem!`,
  },
  // ... (other jokes)
];

const MyComponent = () => {
  const [jokeIndex, setJokeIndex] = useState(0);

  // Function to handle joke change
  const handleNextJoke = () => {
    setJokeIndex((jokeIndex + 1) % jokes.length);
  };

  const [jokemessage, setJokeMessage] = useState(
    jokes[jokeIndex].question ? jokes[jokeIndex].question : jokes[0].question
  );

  const [jokeanswer, setJokeAnswer] = useState(
    jokes[jokeIndex].answer ? jokes[jokeIndex].answer : jokes[0].answer
  );

  useEffect(() => {
    // Set up the timeline and animate elements
    const tl = gsap.timeline();

    // Animate navigation bar
    tl.fromTo(
      ".nav-bar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.2 }
    )
      .fromTo(
        "#jokeCard",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        ".item",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.2, duration: 0.5 }
      )
      .fromTo(
        ".title",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ".music",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
      )
      .fromTo(
        ".questions",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );

    // Additional effects on joke card hover
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");

    cardFront.addEventListener("mouseenter", () => {
      gsap.to(cardFront, { scale: 1.05, duration: 0.3 });
      gsap.to(cardBack, { scale: 1.05, duration: 0.3 });
    });

    cardFront.addEventListener("mouseleave", () => {
      gsap.to(cardFront, { scale: 1, duration: 0.3 });
      gsap.to(cardBack, { scale: 1, duration: 0.3 });
    });

    return () => tl.kill(); // Cleanup the timeline on unmount
  }, [jokeIndex]);

  return (
    <div className="">
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <Link href="/home" className="flex">
              <p>Rishabh</p>
              <span>Dubey</span>
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
            width={110}
            height={110}
          />
          <p className="main_slogan">
            AWS Certified <span> Cloud </span>Practitioner and
            <span>&nbsp;web </span> developer, crafting scalable web solutions
            that optimize performance and user experience.
          </p>
        </div>

        <div className="container-card item item2">
          <div className="card" id="jokeCard">
            <div className="card-inner">
              <div className="card-front">
                <p id="jokeQuestion" className="joketext">
                  {jokemessage}
                </p>
                <p id="reveal" className="phone-block joketext">
                  Hover/Tap to reveal
                </p>
                <p id="reveal-not-phone" className="not-phone">
                  Hover/Tap to reveal
                </p>
              </div>
              <div className="card-back">
                <p id="jokeAnswer">{jokeanswer}</p>
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
          <p className="music">
            <Link href="/home/projects/onestream" target="_blank">
              One Stream
            </Link>
          </p>
          <hr className="line" />
          <p className="music">
            <Link href="/home/projects/unihub" target="_blank">
              Unihub
            </Link>
          </p>
          <hr className="line" />
          <p className="music">
            <Link href="/home/projects/codenote" target="_blank">
              CodeNote
            </Link>
          </p>
        </div>

        <div className="item item4">
          <Image
            src={anotherCircleImage}
            alt="another circle here"
            className="float-end"
            width={50}
            height={50}
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

        <Link href="/home/contact" className="item item5">
          <div>
            <Image
              src={WhiteArrowImage}
              alt="arrow image"
              className="float-end"
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
        </Link>

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
              LINKEDIN
            </Link>
          </p>
          <p>
            <Link href="https://github.com/rishabh3562" target="_blank">
              GITHUB
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
