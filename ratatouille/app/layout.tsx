import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { NavbarClientWrapper } from '@/components/navbar-client-wrapper';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'Ratatouille',
  description: 'A Next.js project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavbarClientWrapper />
        <div className="absolute top-4 right-8 z-10">
          <Link href="/profile">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <main className="p-8 pt-24">{children}</main>
      </body>
    </html>
  );
}
