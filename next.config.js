/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "upload.wikimedia.org",
      "stephenblandino.com",
      "cdn-icons-png.flaticon.com",
      "static.thenounproject.com",
      "codeforces.com"
    ],
  },
  output: "export",
};

module.exports = nextConfig
