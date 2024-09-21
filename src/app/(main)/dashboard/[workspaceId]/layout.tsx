/* eslint-disable @typescript-eslint/no-explicit-any */
import MobileSidebar from '@/components/sidebar/mobile-sidebar';
import Sidebar from '@/components/sidebar/sidebar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <main
      className="flex overflow-hidden
      h-screen
      w-screen
  "
    >
      <Sidebar params={params} />
      <MobileSidebar>
        <Sidebar
          params={params}
          className="w-screen inline-block sm:hidden"
        />
      </MobileSidebar>
      <div
        className="border-secondary
        border-l-[1px]
        w-full
        relative
        overflow-auto
        shadow-lg shadow-foreground/20 rounded-lg
      "
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
