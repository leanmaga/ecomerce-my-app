import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tienda Online  - Productos Premium ',
  description: 'Descubre una amplia selección de productos en XXX. Encuentra lo que necesitas y disfruta de la mejor experiencia de compra en línea.',
  keywords: 'ecommerce, tienda online, productos de calidad, compras en línea, Magallanes',
  author: 'PatagoniaScript',
  url: 'ecomerce-my-o30rcuh1b-leanmaga.vercel.app',
  //image: 'URL de la imagen representativa de tu tienda',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
