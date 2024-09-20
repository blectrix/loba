import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import AppStateProvider from '@/lib/providers/state-provider';
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { Toaster } from '@/components/ui/toaster';
import { SocketProvider } from '@/lib/providers/socket-provider';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Loba",
  description: "All-In-One Notes Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${twMerge('bg-background')} antialiased`}>
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ThemeProvider>
            <AppStateProvider>
              <SupabaseUserProvider>
                <SocketProvider>
                  {children}
                  <Toaster />
                </SocketProvider>
              </SupabaseUserProvider>
            </AppStateProvider>
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
