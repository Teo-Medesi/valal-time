import './globals.css'
import { Inter } from 'next/font/google'
import { DashboardMenu, Navbar } from '@/components'
import SessionProvider from '@/context/SessionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Valal Time',
  description: 'Time tracking software brought to you by Valal!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body className={`${inter.className} max-h-screen overflow-hidden`}>
        <SessionProvider>
          <div className='flex min-h-screen'>
            <DashboardMenu />
            <section className='w-full'>
              <Navbar />
              {children}
            </section>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
