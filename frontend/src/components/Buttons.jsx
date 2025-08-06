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
export const Button = ({ img, namebtn, children, scale }) => {
	return (
		<>
			<button
				className={`bg-[var(--color1)] hover:brightness-80 active:scale-97 transition-all inline-flex gap-4 text-white font-medium p-4 px-10 text-lg justify-between items-center rounded-md ${
					!scale ? 'w-full justify-center' : scale
				}`}
			>
				{img === 'right' ? (
					<>
						<p>{namebtn}</p>
						<ArrowRight />
					</>
				) : img === 'left' ? (
					<>
						<ArrowLeft />
						<p>{namebtn}</p>
					</>
				) : (
					children
				)}
			</button>
		</>
	)
}
export const GrayButton = ({ namebtn }) => {
	return (
		<>
			<button
				className={`bg-[var(--gray)] hover:brightness-90 active:scale-99 transition-all inline-flex gap-4 text-[var(--text)] font-medium p-4 px-10 text-lg justify-between items-center rounded-md `}
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
				className={`bg-black hover:bg-[rgba(0,0,0,0.75)] active:scale-99 transition-all inline-flex gap-4 text-white font-medium p-4 px-10 text-lg justify-between items-center rounded-md `}
			>
				{namebtn}
			</button>
		</>
	)
}
