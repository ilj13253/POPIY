import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from './content/LanguageContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
