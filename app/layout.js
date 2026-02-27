import './globals.css';

export const metadata = {
  title: 'Fun Founders Admin',
  description: 'Static exported Next.js admin panel'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
