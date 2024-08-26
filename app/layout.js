'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Check if the current route is the root, and redirect to the login page
    if (router.pathname === '/') {
      router.push('/landingpage'); // Redirect to the login page
    }
  }, [router]);

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}