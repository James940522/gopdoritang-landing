import '@application/styles/globals.css';
import { fontVariables, siteMetadata, siteStructuredData, siteViewport } from '@application/index';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={fontVariables}>
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
