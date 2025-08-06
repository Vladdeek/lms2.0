import { useEffect } from 'react'

const CustomCursor = () => {
	useEffect(() => {
		const cursor = document.getElementById('custom-cursor')

		const moveCursor = e => {
			cursor.style.left = `${e.clientX}px`
			cursor.style.top = `${e.clientY}px`
		}

		document.addEventListener('mousemove', moveCursor)

		return () => {
			document.removeEventListener('mousemove', moveCursor)
		}
	}, [])

	return <div id='custom-cursor'></div>
}

export default CustomCursor
