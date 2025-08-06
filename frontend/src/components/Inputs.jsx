export const Input = ({ type, placeholder }) => {
	return (
		<>
			<div className='flex flex-col items-center group'>
				<input
					type={type}
					placeholder={placeholder}
					className='w-full outline-0 pb-4 pt-1 px-8 text-2xl placeholder:text-[var(--ghost-orange)]'
				/>
				<div className='bg-[var(--deepdark-yellow)] group-focus-within:w-full w-0 h-[2px] transition-all'></div>
				<div className='bg-[var(--deepdark-yellow)] w-full h-[1px]'></div>
			</div>
		</>
	)
}
