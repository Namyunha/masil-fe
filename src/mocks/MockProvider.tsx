'use client';

import { useEffect, useRef, useState } from 'react';

export function MockProvider({ children }: { children: React.ReactNode }) {
  const [isMocking, setIsMocking] = useState(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    async function enableMocking() {
      if (isWorkerStarted.current) {
        return;
      }

      isWorkerStarted.current = true;

      if (typeof window !== 'undefined') {
        const { worker } = await import('../mocks/browser');
        await worker.start({
          onUnhandledRequest: 'bypass',
        });
      } else {
        const { server } = await import('../mocks/server');
        server.listen({ onUnhandledRequest: 'bypass' });
      }
    }

    setIsMocking(true);
    enableMocking();
  }, []);

  return <>{isMocking && children}</>;
}
