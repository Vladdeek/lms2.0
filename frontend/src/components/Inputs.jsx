import { ArrowRight, ChevronsUpDown, SearchIcon } from 'lucide-react'
import { useState } from 'react'

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

export const SearchDefault = ({}) => {
	return (
		<div
			className={` border-1 border-[var(--gray)] bg-[var(--bg-sidebar)] text-[var(--secondary-text)] focus-within:outline-3 outline-[#82000099] rounded-lg pr-2 inline-flex items-center transition-all`}
		>
			<SearchIcon
				className={`h-15 w-15 justify-center items-center rounded-lg p-4`}
				size={28}
			/>

			<input
				type='text'
				placeholder='Поиск'
				className='outline-0 text-xl bg-transparent'
			/>

			<ArrowRight
				className='hover:bg-[var(--secondary)]  hover:text-[var(--primary)] rounded-full p-3 transition-all'
				size={48}
			/>
		</div>
	)
}

export const Option = ({ options, selectedValue, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false)

	// Находим выбранный элемент для отображения
	const selectedOption = options.find(opt => opt.value === selectedValue)

	return (
		<div className='relative inline-block w-75'>
			<div
				className={`flex items-center gap-3 justify-between p-4 border rounded-lg  transition-colors ${
					isOpen
						? 'border-[var(--white)] ring-3 ring-[var(--color1)]'
						: 'border-[var(--gray)] hover:border-[var(--secondary-text)]'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`text-lg ${
						selectedOption
							? 'text-[var(--primary-text)]'
							: 'text-[var(--secondary-text)]'
					}`}
				>
					{selectedOption?.label || 'Выберите вариант'}
				</span>
				<ChevronsUpDown
					className={`w-5 h-5 transition-transform ${
						isOpen ? 'text-[var(--primary)]' : 'text-gray-400'
					}`}
				/>
			</div>
			{isOpen && (
				<div className='absolute z-10 w-full mt-1 bg-[var(--gray)] text-[var(--primary-text)] border border-[var(--gray)] rounded-lg shadow-lg overflow-hidden'>
					{options.map(option => (
						<div
							key={option.value}
							className={`p-3  transition-colors ${
								option.value === selectedValue
									? 'bg-[var(--secondary)] text-[var(--primary)]'
									: 'hover:bg-[var(--secondary)] hover:text-[var(--primary)]'
							}`}
							onClick={() => {
								onSelect(option.value)
								setIsOpen(false)
							}}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
