/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)", //muted gold
        // secondaryColor: 'var(--secondaryColor)',//dusty rose
        tertiaryColor: "var(--tertiaryColor)", //muted brown
        bgColor: "var(--bgColor)",
        lightDark: "var(--lightDark)",
        darkDark: "var(--darkDark)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        bodoni: ["Bodoni Moda", "serif"],
        beathney: ["Breathney", "serif"],
      },
      screens: {
        xs: { min: "375px" },
        // => @media (min-width: 375px) { ... }
      }, fontSize: {
        'heading-xl': '3rem',   // Large heading font size
        'heading-lg': '2rem',    // Medium heading font size
        'body': '1rem',          // Body text font size
      },
      letterSpacing: {
        'heading': '0.05em',     // Slight letter spacing for headings
      },
      gridTemplateColumns: {
        // Custom column definition for 16 equal columns
        16: "repeat(16, 1fr)",
      },
      gridTemplateRows: {
        // Custom row definition for 16 equal rows
        16: "repeat(16, 1fr)",
      },
    },
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    slideIn: {
      "0%": { transform: "translateX(100%)", opacity: "0" }, // Start off-screen and transparent
      "100%": { transform: "translateX(0)", opacity: "1" }, // Slide into view and become fully visible
    },
  },
  animation: {
    fadeIn: "fadeIn 0.5s ease-in-out",
    slideIn: 'slideIn 0.5s ease-out',// Smooth sliding animation
  },
  plugins: [],
};

//   colors: {
//     background: "var(--background)",
//     foreground: "var(--foreground)",
//     gridBackground: "var(--grid-background)",
//     gridBlocksBackground: "#D0BCA0",
//     gridBlocksBackground2: "#e6ddd1",
//     textDarkYellow: "var(--text-dark-yellow)",
//     textLightYellow: "var(--text-light-yellow)",
//     textDarkRed: "var(--text-dark-red)",
//     textSecondary: "var(--text-secondary)",
//     textTertiary: "var(--text-tertiary)",
//     primary: "var(--primary)",
//     secondary: "var(--secondary)",
//     accent: "var(--accent)",
//     font: "var(--font)",
//     lightBackground: "var(--lightBackground)",
//     lightText: "var(--lightText)",
//     darkText: "var(--darkText)",
//     primaryBackground: "var(--primaryBackground)",
//     secondaryBackground: "var(--secondaryBackground)",
//     // New custom colors
//     slateDark: "#121212",      // Dark background
//     slateLight: "#1c1c1c",     // Lighter background
//     beige: "#e6ddd1",          // Beige text background
//     blueBorder: "#4A90E2",     // Blue border color
//     greenBorder: "#2ECC71",    // Green border color
//     redBorder: "#E74C3C",      // Red border color
//   },
//   keyframes: {
//     fadeIn: {
//       '0%': { opacity: '0' },
//       '100%': { opacity: '1' },
//     },
//     wiggle: {
//       '0%, 100%': { transform: 'rotate(-3deg)' },
//       '50%': { transform: 'rotate(3deg)' },
//     },
//   },
//   animation: {
//     fadeIn: 'fadeIn 2s ease-in-out',
//     wiggle: 'wiggle 1s ease-in-out infinite',
//   },
//   gridTemplateRows: {
//     '8': 'repeat(8, minmax(0, 1fr))'
//   },
//   gridTemplateColumns: {
//     '12': 'repeat(12, minmax(0, 1fr))'
//   },
//   fontFamily: {
//     breathney: ['Breathney'],
//   },
//   screens: {
//     'xs': '320px'
//   }
// },
