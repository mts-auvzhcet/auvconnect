import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


export const metadata = {
	title: "AUV-ZHCET",
	description: "MTS Autonomous Underwater Vehicle Club",
	icons: {
		icon: [
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: '/apple-touch-icon.png',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='hide-scrollbar'>
			<head>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Protest+Riot&display=swap" rel="stylesheet" />
			</head>
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
