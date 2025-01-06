"use client";
import React from "react";

const ArticleContent = ({ content }) => (
  <section className="space-y-6 mt-8">
    {content.map((block, index) => {
      switch (block.type) {
        case "heading":
          return (
            <h2 key={index} className="text-xl font-bold text-primaryColor">
              {block.text}
            </h2>
          );
        case "paragraph":
          return (
            <p key={index} className="text-lg text-tertiaryColor leading-relaxed">
              {block.text}
            </p>
          );
        case "image":
          return (
            <div key={index} className="my-4">
              <img
                className="w-full rounded-lg shadow-lg"
                src={block.src}
                alt={block.alt}
              />
            </div>
          );
        default:
          return null;
      }
    })}
  </section>
);

export default ArticleContent;
