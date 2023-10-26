import './global.scss';
import { Providers } from '../components/providers';

export const metadata = {
  title: 'Welcome to furry-family-fe',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
