import { Tajawal } from 'next/font/google'
import  './globals.css'
import Footer from '@/compnante/Footer'
import Navbar from './navbar'

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'زاجل للحلول اللوجستية',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <link rel="icon" href="../../public/icon.svg" />
      <body className={tajawal.className}>
      <Navbar/>
      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}
        
        <Footer />
        
        
        </body>
    </html>
  )
}
