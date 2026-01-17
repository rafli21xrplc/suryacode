// components/MobileBlocker.tsx
'use client';

import { useEffect, useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function MobileBlocker({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!mounted) return <>{children}</>;

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 text-center font-satoshi">
        <div className="relative mb-6">
          <Smartphone size={64} className="text-red-500" />
          <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
            <Monitor size={24} className="text-[#003C61]" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Not yet available</h1>
        <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
          Sorry, this application is designed for desktop screens to maximize user experience.
        </p>

        <div className="mt-6 bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm font-medium border border-red-100">
          It is not recommended to use a mobile device
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Please switch to Laptop or PC (screen &ge; 1000px)
        </p>
      </div>
    );
  }

  return <>{children}</>;
}