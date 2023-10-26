'use client';

import { Provider } from 'jotai';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
