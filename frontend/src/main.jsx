import { createRoot } from 'react-dom/client'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom'
import { Suspense } from 'react'
import './index.css'
import './themes.css'
import Authorization from './pages/Authorization'
import DashboardLayout from './pages/layout/DashboardLayout'
import MainPage from './pages/MainPage'
import CustomCursor from './components/Cursor'

import CalendarPage from './pages/Calendar'

import AllCourses from './pages/AllCourses'
import Courses from './pages/Courses'

function MainApp() {
	const navigate = useNavigate()
	return (
		<Suspense
			fallback={
				<>
					<p>Загрузка</p>
				</>
			}
		>
			<Routes>
				<Route path='/auth' element={<Authorization />} />
				<Route path='/' element={<DashboardLayout />}>
					<Route path='/main' element={<MainPage />} />
					<Route path='/calendar' element={<CalendarPage />} />
					<Route path='/course' element={<Courses />} />
					<Route path='/all' element={<AllCourses />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

createRoot(document.getElementById('root')).render(
	<Router>
		<CustomCursor />
		<MainApp />
	</Router>
)
