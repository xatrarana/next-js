
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Toaster from 'react-hot-toast'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {
            children
        }
      </body>
    </html>
  );
}
