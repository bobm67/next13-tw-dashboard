import { data } from '../../data/data.js'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'

const CustomerPage = () => {
	return (
		<div className='min-h-screen bg-gray-100'>
			<div className='p-4'>
				<div className='w-full p-4 m-auto overflow-y-auto bg-white border rounded-lg'>
					<div className='grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-4 sm:grid-cols-3'>
						<span className=''>Name</span>
						<span className='text-right sm:text-left'>Email</span>
						<span className='hidden md:grid'>Last Order</span>
						<span className='hidden sm:grid'>Method</span>
					</div>
					<ul>
						{data?.map((order, id) => (
							<li
								key={id}
								className='grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3'>
								<div className='flex items-center'>
									<div className='p-3 bg-purple-100 rounded-lg'>
										<BsPersonFill className='text-purple-800' />
									</div>
									<p className='pl-4'>{`${order.name.first}  ${order.name.last}`}</p>
								</div>
                <p className="text-right text-gray-600 sm:text-left">{order.name.first}@gmail.com</p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="items-center justify-between hidden sm:flex">
                  <p className="hidden sm:flex">{order.method}</p>
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

export default CustomerPage
