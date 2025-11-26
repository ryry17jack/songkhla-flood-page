import './globals.css';

export const metadata = {
  title: 'วิทยาลัยเทคนิคสงขลา ปิดระบบชั่วคราว',
  description: 'วิทยาลัยเทคนิคสงขลา ปิดระบบชั่วคราว เนื่องจากสถานการณ์น้ำท่วม',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        {children}
      </body>
    </html>
  );
}
