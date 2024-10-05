// components/MyComponent.js

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import './style.css'; // Import your CSS file here

const MyComponent = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rishabh Dubey</title>
        <link rel="icon" href="/images/logo_circle.png" type="image/png" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <Link href="#">Rishabh<span>Dubey</span></Link>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Projects</Link></li>
            <li><Link href="#">Contact</Link></li>
            <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
          </span>
          <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
        </ul>
      </nav>

      <div className="container">
        <div className="item item1">
          <Image src="/images/circle_two.png" alt="circle image here" width={500} height={500} />
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
                <p id="reveal" className="phone-block">Hover/Tap to reveal</p>
                <p id="reveal-not-phone" className="not-phone">Hover/Tap to reveal</p>
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
            <Image className="arrow" src="/images/arrow_black_one.png" alt="black arrow here" width={30} height={30} />
          </Link>
          <Image className="bharat_chauhan_img" src="/images/bharat_chauhan_brown.jpg" alt="bharat chauhan photo here" width={500} height={500} />
          <hr className="line" />

          <div className="project-wrapper">
            <p className="music">
              <Link href="https://www.youtube.com/watch?v=3KY8jwrQ6vM" target="_blank">One Stream</Link>
            </p>
            <div className="project-link-wrapper">
              <Link href="https://github.com/username/OneStream" target="_blank">
                <i className="fab fa-github"></i> GitHub
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
            <Link href="https://www.youtube.com/watch?v=ENVW3uZ3a-4" target="_blank">Unihub</Link>
            <span> | <Link href="https://github.com/username/Unihub" target="_blank"><i className="fab fa-github"></i> GitHub</Link></span>
          </p>
          <hr className="line" />

          <p className="music">
            <Link href="https://www.youtube.com/watch?v=PfHHm6k2Bv4" target="_blank">CodeNote</Link>
            <span> | <Link href="https://github.com/username/CodeNote" target="_blank"><i className="fab fa-github"></i> GitHub</Link></span>
          </p>
        </div>

        <div className="item item4">
          <Image src="/images/another_circle_one.png" alt="another circle here" width={500} height={500} />
          <p>
            I am a dedicated web developer currently pursuing a B.Tech in Computer
            Science, certified as an AWS Cloud Practitioner. My experience
            includes optimizing web performance, implementing RESTful APIs, and
            delivering cloud solutions for various projects. I am passionate about
            continuous learning and apply creative solutions to complex problems.
          </p>
        </div>

        <div className="item item5">
          <Image src="/images/arrow_white_one.png" alt="arrow image" width={30} height={30} />
          <p className="questions">Have some <br /> Questions?</p>
          <p className="contact_me">Contact <span>me</span></p>
        </div>

        <div className="item item6">
          <p><Link href="https://x.com/dubeyrishabh108" target="_blank">X.com</Link></p>
          <p><Link href="https://www.linkedin.com/in/rishabh108/" target="_blank">LINKEDIN</Link></p>
          <p><Link href="https://github.com/rishabh3562" target="_blank">GITHUB</Link></p>
        </div>
      </div>

      {/* JS for navbar hamburger (optional, consider using React state) */}
      <script src="https://kit.fontawesome.com/ae61999827.js" crossOrigin="anonymous"></script>
      <script src="/index.js"></script>
    </>
  );
};

export default MyComponent;
