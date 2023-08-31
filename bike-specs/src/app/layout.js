import './globals.scss'
import { Blinker } from 'next/font/google'
import Navbar from "../components/navbar.js"
import Footer from '@/components/footer'

const blinker = Blinker({ subsets: ['latin'], weight:'400' })

export const metadata = {
  title: 'Bike Specs',
  description: 'Website about specifications of motorcycles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={blinker.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
