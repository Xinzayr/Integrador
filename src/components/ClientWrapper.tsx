import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
  baseURL: string;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children, baseURL }) => {
  return (
    <SessionProvider>
      <div data-base-url={baseURL}>
        {children}
      </div>
    </SessionProvider>
  );
};

export default ClientWrapper;