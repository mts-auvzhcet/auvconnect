import './globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


export const metadata = {
	title: "AUV-ZHCET",
	description: "MTS Autonomous Underwater Vehicle Club",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='hide-scrollbar'>
			<Head>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
			</Head>
			<body>
				<div className='overflow-y-auto overflow-x-hidden'>
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
