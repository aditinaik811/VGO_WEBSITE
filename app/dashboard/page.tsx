'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push('/');
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome </h1>
    </div>
  );
}
