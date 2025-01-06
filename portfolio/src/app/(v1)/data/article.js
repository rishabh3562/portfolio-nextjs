// data/articles.js
export const articles = [
    {
        "id": "seo-nextjs-14-guide",
        "banner_img": "https://detroitseocompany.com/wp-content/uploads/2019/04/seo-diagram.jpg",
        "title": "How to Do SEO in Next.js 14",
        "description": "Learn how to implement Search Engine Optimization (SEO) in Next.js 14 to enhance your website's visibility and performance on search engines.",
        "tags": ["SEO", "Next.js", "Next.js 14", "Web Development", "React", "SEO Optimization"],
        "likeCount": 12,
        "githubUrl": null,
        "liveLink": null,
        "urlData": [
            {
                "label": "Project Source Code",
                "url": null
            },
            {
                "label": "Live Demo",
                "url": null
            }
        ],
        "content": [
            {
                "type": "heading",
                "level": 1,
                "text": "Introduction to SEO in Next.js 14"
            },
            {
                "type": "paragraph",
                "text": "Search Engine Optimization (SEO) is crucial for making your website visible to search engines like Google. Next.js 14 provides powerful features for optimizing websites for SEO with built-in tools and best practices."
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Why SEO Matters for Next.js Applications"
            },
            {
                "type": "paragraph",
                "text": "SEO helps increase the visibility of your website on search engines, leading to more traffic and potential customers. With Next.js 14, you can leverage its server-side rendering (SSR) and static site generation (SSG) features to improve SEO performance."
            },
            {
                "type": "heading",
                "level": 3,
                "text": "Key SEO Features in Next.js 14"
            },
            {
                "type": "paragraph",
                "text": "Next.js 14 introduces features like the `next/head` component, automatic static optimization, and better handling of dynamic content to enhance your SEO capabilities."
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Using the `next/head` Component for SEO"
            },
            {
                "type": "paragraph",
                "text": "The `next/head` component allows you to add metadata like the title, description, and social sharing tags (Open Graph, Twitter cards) to each page in your Next.js app."
            },
            {
                "type": "code",
                "text": "<Head>\n  <title>How to Do SEO in Next.js 14</title>\n  <meta name='description' content='A guide to SEO in Next.js 14' />\n  <meta property='og:title' content='How to Do SEO in Next.js 14' />\n  <meta property='og:description' content='Learn SEO strategies for Next.js 14 applications' />\n</Head>"
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Optimizing Images and Content for SEO"
            },
            {
                "type": "paragraph",
                "text": "Using Next.js 14's `next/image` component, you can optimize images for better loading speeds, which is a key factor for SEO. Additionally, dynamic content like blogs or articles can be optimized for search engines using the `getStaticProps` or `getServerSideProps` functions."
            },
            {
                "type": "image",
                "src": "https://miro.medium.com/v2/resize:fit:3580/format:webp/1*TtZ1bAE8DF-RNvBYYXQHgA.jpeg",
                "alt": "Next.js SEO Optimization Diagram"
            },
            {
                "type": "heading",
                "level": 3,
                "text": "Static Site Generation (SSG) for SEO"
            },
            {
                "type": "paragraph",
                "text": "Static Site Generation (SSG) allows Next.js to pre-render pages at build time, making them SEO-friendly. Using `getStaticProps`, you can fetch data and generate static HTML for better performance and faster indexing by search engines."
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Additional SEO Best Practices"
            },
            {
                "type": "paragraph",
                "text": "Other SEO strategies include using proper URL structures, optimizing for mobile devices, and ensuring that your website loads quickly. Next.js provides tools and optimizations that automatically handle many of these aspects."
            }
        ],
        "keywords": ["Next.js SEO", "Next.js 14", "SEO Best Practices", "Web Optimization", "React SEO"]
    }
    ,
    // Other articles
];
