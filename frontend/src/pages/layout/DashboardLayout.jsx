import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function DashboardLayout() {
	return (
		<>
			<div className='mx-40 my-10'>
				<Header />
				<Outlet />
			</div>
		</>
	)
}
