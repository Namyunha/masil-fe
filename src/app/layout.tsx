import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { Slide, ToastContainer } from 'react-toastify';
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
      <body className="flex items-center h-dvh bg-primary bg-opacity-80">
        <QueryProvider>
          <MockProvider>
            <div className="relative max-w-screen_max w-full h-full mx-auto my-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary scrollbar-track-bg_white bg-bg_white shadow-2xl main-screen">
              {children}
            </div>
          </MockProvider>
          <ReactQueryDevtools
            buttonPosition="bottom-left"
            initialIsOpen={false}
          />
          <ToastContainer
            position="bottom-center"
            limit={3}
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            transition={Slide}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
