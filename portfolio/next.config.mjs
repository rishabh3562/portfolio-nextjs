/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.hashnode.com', "github.com", "res.cloudinary.com","collection.cloudinary.com"], // Specify the allowed domains here
    },
};

export default nextConfig; // Use module.exports instead of export default
