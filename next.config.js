/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "icons.iconarchive.com",
      "blog.codepen.io",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
