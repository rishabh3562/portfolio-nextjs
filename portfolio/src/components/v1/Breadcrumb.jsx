import React from "react";
import Link from "next/link";

const Breadcrumb = ({ items }) => {
  const disabledPaths = ["/article", "/articles"]; // Paths to disable

  const handleClick = (e, href) => {
    if (disabledPaths.includes(href)) {
      e.preventDefault();
    }
  };

  return (
    <nav className="text-lg font-poppins mb-2">
      <ol className="list-reset flex text-tertiaryColor">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <span className="mx-3 text-primaryColor opacity-75 text-hover:text-primaryColor">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`hover:opacity-85 font-semibold transition-all duration-300 text-primaryColor ${
                  disabledPaths.includes(item.href) ? "pointer-events-none" : ""
                }`}
                title={
                  disabledPaths.includes(item.href)
                    ? "This link is disabled for now. Please try again later."
                    : ""
                }
                style={{
                  cursor: disabledPaths.includes(item.href)
                    ? "default"
                    : "pointer",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primaryColor font-semibold">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
