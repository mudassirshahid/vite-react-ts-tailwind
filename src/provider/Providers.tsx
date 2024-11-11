// Providers.tsx
import React from 'react';
import { CounterProvider } from '../provider/Counter';
import { FormProvider } from '../provider/FormData'; // Example of another provider

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <CounterProvider>
      <FormProvider>
        {children}
      </FormProvider>
    </CounterProvider>
  );
};

export default Providers;
