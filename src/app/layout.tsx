import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import { MockProvider } from '@/mocks/MockProvider';
import QueryProvider from '@/store/QueryProvider';

export const metadata: Metadata = {
  title: 'masil',
  description: '음료 마실래? 가볍게 동네 산책하듯 카페 가기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <MockProvider>
            <Header />
            {children}
          </MockProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
