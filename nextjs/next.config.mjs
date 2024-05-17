/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cloudflare-ipfs.com"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
