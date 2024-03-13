/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
        {
            protocol:'https',
            hostname: 'res.cloudinary.com',
        },
        {
            protocol:'https',
            hostname: 'hamronepalcoop.com.np',
            port:'',
            pathname:'/wp-content/**'
        },
        {
            protocol:'https',
            hostname: 'www.jyotipunja.coop.np',
            port:'',
            pathname:'/wp-content/**'
        },
    ]
  }
};

export default nextConfig;
