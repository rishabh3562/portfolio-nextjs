/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.hashnode.com', "github.com", "res.cloudinary.com", "collection.cloudinary.com", "source.unsplash.com", "detroitseocompany.com", "miro.medium.com"], // Specify the allowed domains here
    },
    eslint:{
        ignoreDuringBuilds:true
    }
};

export default nextConfig; // Use module.exports instead of export default
