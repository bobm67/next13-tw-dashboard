const Header = ({pageName}) => {
	return (
		<div className='flex justify-between w-full px-4 pt-4'>
			<h2>{pageName}</h2>
			<h2>Welcome Back, Bob</h2>
		</div>
	)
}

export default Header
