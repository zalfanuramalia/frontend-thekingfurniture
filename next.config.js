/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:5000',
  },
  images: {
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com",
    domains: ['res.cloudinary.com']
=======
  // reactStrictMode: true,
  images: {
    // louder:"cloudinary",
    // path:"https://res.cloudinary.com",
    domains:['res.cloudinary.com'],
>>>>>>> 6117b64bd840cbf915f51672c7e6eeb298517fe5
  }
}

module.exports = nextConfig

