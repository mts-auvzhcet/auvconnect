import './globals.css';
import Head from 'next/head';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


export const metadata = {
  title: "AUV-ZHCET",
  description: "MTS Autonomous Underwater Vehicle Club",
  image: "/public/auv1.png"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" src={metadata.image} />
      </Head>
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
