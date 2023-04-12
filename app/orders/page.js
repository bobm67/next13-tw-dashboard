import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '../../data/data.js'

const OrdersPage = () => {
	return (
		<div className='min-h-screen bg-gray-100'>
			<div className='p-4'>
				<div className='w-full p-4 m-auto overflow-y-auto bg-white border rounded-lg'>
					<div className='grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-4 sm:grid-cols-3'>
						<span className=''>Order</span>
						<span className='text-right sm:text-left'>Status</span>
						<span className='hidden md:grid'>Last Order</span>
						<span className='hidden sm:grid'>Method</span>
					</div>
					<ul>
						{data?.map((order, id) => (
							<li
								key={id}
								className='grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3'>
								<div className='flex'>
									<div className='p-3 bg-purple-100 rounded-lg'>
										<FaShoppingBag className='text-purple-800' />
									</div>
									<div className='pl-4'>
										<p className='font-bold text-gray-800'>
											${order.total.toLocaleString()}
										</p>
										<p className='text-sm text-gray-800 y'>
											{order.name.first}
										</p>
									</div>
								</div>
								<p className='text-right text-gray-600 sm:text-left'>
									<span
										className={
											order.status === 'Processing'
												? 'bg-green-200 p-2 rounded-lg'
												: order.status === 'Completed'
												? 'bg-blue-200 rounded-lg p-2'
												: 'bg-yellow-200 rounded-lg p-2'
										}>
										{order.status}
									</span>
								</p>
								<p className='hidden md:flex'>{order.date}</p>
								<div className='items-center justify-between hidden sm:flex'>
									<p className=''>{order.method}</p>
									<BsThreeDotsVertical />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default OrdersPage
