// utils/breadcrumbUtils.js
export const generateBreadcrumbs = (article) => {
    return [
        { label: "Home", href: "/" },
        { label: "Articles", href: "/articles" },
        { label: article.title, href: "#" }, // Current page doesn't need a link
    ];
};

// // utils/generateBreadcrumbs.js
// export const generateBreadcrumbs = (pathArray) => {
//     const breadcrumbs = pathArray.map((item, index) => {
//         return {
//             label: item.label,
//             href: item.href || "#", // If no href, just display the label
//         };
//     });

//     return breadcrumbs;
// };
