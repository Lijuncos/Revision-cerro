import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import FooterComponent from '@/components/FooterComponent/FooterComponent'
import NavbarContainer from '@/containers/NavbarContainer/NavbarContainer'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-roboto',
  weight: ['400', '700'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Cerro group',
  description: 'Cerro group',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavbarContainer />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}