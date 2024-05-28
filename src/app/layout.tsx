import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/Header/Header';
import { MockProvider } from '@/mocks/MockProvider';
import QueryProvider from '@/store/QueryProvider';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  adjustFontFallback: false,
});

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
    <html lang="ko" className={nunitoSans.className}>
      <body className="h-dvh">
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
