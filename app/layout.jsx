import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Radiant Real Estate',
  description: 'Real Estate Development Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
