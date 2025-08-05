export const RoundButton = ({ size, color, outline = false, children }) => {
	return (
		<button
			className={`${outline ? 'border-1 ' : ''} rounded-full`}
			style={{ width: size, height: size, backgroundColor: color }}
		>
			{children}
		</button>
	)
}
