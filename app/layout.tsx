import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lemonade Fizz Tech — Web Development Studio',
  description:
    'Nigerian web development studio building fast, scalable, and beautifully designed digital products. Full-stack development, eCommerce, and UI/UX design.',
  keywords: ['web development', 'Nigeria', 'Next.js', 'React', 'full-stack', 'Lemonade Fizz Tech'],
  authors: [{ name: 'Rejoice Nzeh' }],
  openGraph: {
    title: 'Lemonade Fizz Tech — Web Development Studio',
    description:
      'Nigerian web development studio building fast, scalable, and beautifully designed digital products.',
    type: 'website',
    locale: 'en_NG',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
