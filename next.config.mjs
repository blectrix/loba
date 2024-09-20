/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: {
  //       ignoreBuildErrors: true,
  //   },
  //   eslint: {
  //       ignoreDuringBuilds: true,
  //   },
    experimental: {
        serverActions: true,
      },
      images: {
        domains: ['fmliqecnrxgzwvucipeu.supabase.co', 'bwfqtuujagjvzpfpjyfl.supabase.co'],
      },
};

export default nextConfig;
