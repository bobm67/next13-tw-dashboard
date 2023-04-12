import { data } from '../data/data.js'
import { FaShoppingBag } from 'react-icons/fa'

const RecentOrders = () => {
	return (
		<div className='relative w-full col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white  overflow-scroll'>
			<h1>Recent Orders</h1>
			<ul>
				{data?.map((order, id) => (
					<li
						key={id}
						className='flex items-center p-2 my-3 rounded-lg bg-gray-50 hover:bg-gray-100'>
						<div className="p-3 bg-purple-100 rounded-lg"><FaShoppingBag className='text-purple-800'/></div>
            <div className="pl-4">
              <p className='font-bold text-gray-800'>${order.total}</p>
              <p className='text-sm text-gray-400'>{order.name.first}</p>
            </div>
            <p className='absolute text-sm lg:flex md:hidden right-6'>{order.date}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RecentOrders
