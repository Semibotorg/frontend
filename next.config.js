/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: "http://localhost:5000/api/v1",
    BACKEND_API_ORIGIN: "http://localhost:5000",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'cdn.discordapp.com',
            port: '',
            pathname:'/**'
        }
    ]
  }
};

module.exports = nextConfig;
