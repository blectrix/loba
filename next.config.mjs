/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        domains: ['fmliqecnrxgzwvucipeu.supabase.co', 'bwfqtuujagjvzpfpjyfl.supabase.co'],
      },
};

export default nextConfig;
