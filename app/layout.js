import './globals.css'
import { Inter } from 'next/font/google'
import { DashboardMenu } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Valal Time',
  description: 'Time tracking software brought to you by Valal!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <div className='flex'>
          <DashboardMenu />
          {children}
        </div>
      </body>
    </html>
  )
}
