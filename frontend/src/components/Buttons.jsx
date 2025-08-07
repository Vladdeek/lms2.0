export const RoundButton = ({
	size,
	color,
	outline = false,
	children,
	text,
}) => {
	return (
		<button
			className='rounded-full uppercase unbounded text-base font-medium'
			style={{
				width: size,
				height: size,
				backgroundColor: !outline && color,
				border: `1px solid ${color}`,
				color: !outline ? text : color,
			}}
		>
			{children}
		</button>
	)
}
export const Button = ({ children, width = 'fit' }) => {
	return (
		<>
			<button
				className={`bg-[var(--text)] hover:brightness-80 active:scale-97 transition-all inline-flex gap-4 text-[20px] text-[var(--black)] unbounded font-normal p-4 px-10 text-lg justify-between items-center rounded-lg z-10 `}
				style={{ width: width }}
			>
				{children}
			</button>
		</>
	)
}
export const GrayButton = ({ namebtn }) => {
	return (
		<>
			<button
				className={`bg-[var(--gray)] unbounded hover:brightness-90 transition-all inline-flex gap-4 text-[var(--text)] font-medium p-4 px-10 text-lg justify-between items-center rounded-md `}
			>
				{namebtn}
			</button>
		</>
	)
}
export const BlackButton = ({ namebtn }) => {
	return (
		<>
			<button
				className={`bg-[var(--text)] unbounded transition-all inline-flex gap-4 text-[var(--black)] font-medium p-4 px-10 text-lg justify-between items-center rounded-md `}
			>
				{namebtn}
			</button>
		</>
	)
}
