import BarChart from '@/components/BarChart';
import RecentOrders from '@/components/RecentOrders';
import TopCards from '@/components/TopCards';

export default function Home() {
	return (
		<main className='w-full h-full'>
			<TopCards />
			<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
				<BarChart />
				<RecentOrders />
			</div>
		</main>
	)
}
