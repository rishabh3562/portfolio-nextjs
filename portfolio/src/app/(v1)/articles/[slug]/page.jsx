// ArticlePage.jsx
"use client";
import React, { useState } from "react";
import { articles } from "@/app/(v1)/data/article";
import ArticleHeader from "@/components/v1/ArticleHeader";
import Breadcrumb from "@/components/v1/Breadcrumb";

import ArticleContent from "@/components/v1/ArticleContent";
import { generateBreadcrumbs } from "@/utils/generateBreadcrumb"; // import utility
import Mylayout from "@/components/v1/Mylayout";

import "@/app/(v1)/style.css";
const ArticlePage = ({ params }) => {
  const id = params.slug;
  const article = articles.find((art) => art.id === id);
  if (!article)
    return <div className="text-center text-red-500">Article not found</div>;

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likeCount || 0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleLike = () => {
    setLikeCount((prev) => prev + (like ? -1 : 1));
    setLike(!like);
  };

  // Dynamically generate breadcrumbs using the utility
  const breadcrumbItems = generateBreadcrumbs(article);

  return (
    <>
      <Mylayout type="projects">
        <div className="bg-darkDark">
          <article className="max-w-4xl mx-auto px-6 py-8 bg-darkDark shadow-lg rounded-lg">
            <Breadcrumb items={breadcrumbItems} />
            {/* <BackButton style="filled" /> */}
            <ArticleHeader
              article={article}
              like={like}
              toggleLike={toggleLike}
              likeCount={likeCount}
              toggleDropdown={() => setIsDropdownVisible(!isDropdownVisible)}
              isDropdownVisible={isDropdownVisible}
            />
            <ArticleContent content={article.content} />
          </article>
        </div>
      </Mylayout>
    </>
  );
};

export default ArticlePage;

/*
<div className="article-content">
        <div className="floating-share-buttons">
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on Facebook
          </a>
        
        </div>
     
      </div>
       <div>
        <section className="comments-section">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Leave a comment"
          />
          <button onClick={handleCommentSubmit}>Post Comment</button>

          <div className="comments">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                {comment.text}
              </div>
            ))}
          </div>
        </section>
      </div> 
 <section className="comments-section">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Leave a comment"
        />
        <button onClick={handleCommentSubmit}>Post Comment</button>
        <h3>Comments ({comments.length})</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment.text}
          </div>
        ))}
      </section>
      <section className="related-articles mt-8">
        <h3>Related Articles</h3>
        <ul>
          {relatedArticles.map((art) => (
            <li key={art.id}>
              <a href={`/articles/${art.id}`}>{art.title}</a>
            </li>
          ))}
        </ul>
      </section> 
       <footer className="mt-8">
        <p className="text-base text-gray-600">
          <strong>Published on:</strong>{" "}
          {new Date(article.createdAt).toLocaleDateString()}
          <br />
          <strong>Last Updated:</strong>{" "}
          {new Date(article.updatedAt).toLocaleDateString()}
        </p>
      </footer> 
*/
