import React from 'react';
import ReduxProvider from '@/redux/ReduxProvider';
import { getServerSession } from 'next-auth';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function ReservationLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    const session= await getServerSession(authOptions);
  
  
    return (
        <div>
          <ReduxProvider>
            <NextAuthProvider session={session}>
              {children}
            </NextAuthProvider>
          </ReduxProvider>
        </div>
    );
  }
  