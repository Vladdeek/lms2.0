import { BlackButton } from './Buttons'

export const ProductCard = ({ color, children, title, subtitle, namebtn }) => {
	return (
		<>
			<div
				className={`${
					color === 1
						? 'bg-[#f4d1e8] text-black'
						: color === 2
						? 'bg-[#f8ebeb] text-black'
						: 'bg-[#820000] text-white'
				} rounded-xl p-10 inline-flex flex-col gap-3 hover:-translate-y-1 transition-all`}
			>
				{children}
				<p className='text-xl font-medium mt-5'>{title}</p>
				<p className='text-xl font-normal mb-5'>{subtitle}</p>
				<div className='w-fit'>
					<BlackButton namebtn={namebtn} />
				</div>
			</div>
		</>
	)
}
