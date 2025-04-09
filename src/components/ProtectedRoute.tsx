// components/ProtectedRoute.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("login") === "true";

    console.log(isLoggedIn);

    if (!isLoggedIn) {
      router.push('/platform');
    }
  }, [router]);

  return <>{children}</>;
}