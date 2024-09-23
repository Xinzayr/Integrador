'use client';

import { useSession } from 'next-auth/react';
import ClientWrapper from '@/components/ClientWrapper'; // Ensure the file name matches exactly, including case sensitivity

const Home = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>No estás autenticado</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Bienvenido, {session?.user?.name}</h1>
    </div>
  );
};

const App = () => (
  <ClientWrapper baseURL={''}>
    <Home />
  </ClientWrapper>
);

export default App;