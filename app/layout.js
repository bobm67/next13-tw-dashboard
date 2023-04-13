import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const metadata = {
	title: 'Next.js 13 Dashboard',
	description: 'Dashboard',
	keywords: 'nextjs, dashboard, react, tailwindcss',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<main
					className={`min-h-screen text-black bg-gray-100 min-w-screen  ${
						process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
					}`}>
					<div className='flex w-full'>
						<Sidebar className='min-h-screen' />
						<div className='flex flex-col w-full'>
							<Header className='w-full' pageName={'Dashboard'}/>
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	)
}
