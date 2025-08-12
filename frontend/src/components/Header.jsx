import { useEffect, useState } from 'react'
import { Sun, Moon, Search, MessagesSquare } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { ArrowR } from '../../public/assets/icons/ArrowsSvg'

const ToggleTheme = ({ onClick }) => {
	const [isLight, setIsLight] = useState(() => {
		return document.documentElement.dataset.theme === 'light'
	})

	const toggleTheme = () => {
		setIsLight(prev => {
			const newTheme = !prev ? 'light' : 'dark'
			document.documentElement.dataset.theme = newTheme
			return !prev
		})
	}
	return (
		<button
			onClick={toggleTheme}
			className=' rounded-lg h-11 w-11 hover:bg-[var(--primary)] hover:text-[var(--black)] text-[var(--text)] transition-all flex items-center justify-center '
		>
			{!isLight ? <Sun size={36} /> : <Moon size={36} />}
		</button>
	)
}
const SearchInHeader = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className=' rounded-lg h-11 w-11 hover:bg-[var(--primary)] hover:text-[var(--black)] text-[var(--text)] transition-all flex items-center justify-center '
		>
			<Search size={36} />
		</button>
	)
}
const MessageBtn = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className=' rounded-lg h-11 w-11 hover:bg-[var(--primary)] hover:text-[var(--black)] text-[var(--text)] transition-all flex items-center justify-center '
		>
			<MessagesSquare size={36} />
		</button>
	)
}

const HeaderDropdown = ({ title, option = false, isOpen, onToggle }) => {
	return (
		<div className='relative select-none ' data-clickable>
			<div className='flex items-center'>
				<p
					onClick={onToggle}
					className={`font-bold transition-all text-2xl ${
						!option
							? 'hover:text-[var(--primary)] text-[var(--text)] '
							: isOpen
							? 'text-[var(--primary)]'
							: 'hover:text-[var(--primary)] text-[var(--text)]'
					}`}
				>
					{title}
				</p>
			</div>
			{option && isOpen && (
				<div className='bg-[var(--first-bg)] min-w-full absolute left-0 rounded-lg flex flex-col gap-6 py-8 px-10 mt-4 text-[#101010] z-50 '>
					{option.map((item, index) => (
						<NavLink
							to={item.to}
							onClick={() => {
								setIsOpen(prev => !prev)
							}}
							date-clickable
							key={index}
							className='flex gap-3 items-center group cursor-none'
						>
							<ArrowR
								color={'var(--black)'}
								size={36}
								className='group-hover:w-9 w-0 transition-all '
							/>
							<p className='select-none  text-[32px] whitespace-nowrap'>
								{item.title}
							</p>
						</NavLink>
					))}
				</div>
			)}
		</div>
	)
}

const HeaderMenu = ({ title, option }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className='relative select-none z-10'>
				<div className='flex justify-between items-center'>
					<p className='font-bold text-[40px] text-[var(--text)] uppercase'>
						{title}
					</p>
					<div
						onClick={() => {
							setIsOpen(prev => !prev)
						}}
						data-clickable
						className='relative h-9 w-9 p-1 flex flex-col justify-center items-center '
					>
						<div
							className={`h-1 w-[27px] bg-[var(--text)] absolute transition-all ${
								isOpen ? 'rotate-45' : 'top-2'
							}`}
						></div>
						<div
							className={`h-1 w-[27px] bg-[var(--text)] absolute transition-all ${
								isOpen ? '-rotate-45' : 'bottom-2'
							}`}
						></div>
					</div>
				</div>
				{isOpen && (
					<div className='bg-[var(--first-bg)] w-full absolute rounded-lg flex flex-col gap-8 py-15 px-10 text-[#101010]'>
						{option.map(item => {
							return (
								<NavLink
									to={item.to}
									onClick={() => {
										setIsOpen(prev => !prev)
									}}
									data-clickable
									className='flex gap-3 items-center group cursor-none'
								>
									<ArrowR
										color={'var(--black)'}
										size={36}
										className='group-hover:w-9 w-0 transition-all '
									/>

									<p className='select-none  text-[32px] whitespace-nowrap'>
										{item.title}
									</p>
								</NavLink>
							)
						})}
					</div>
				)}
			</div>
		</>
	)
}
const Header = () => {
	const HeaderDropdownInfo = [
		{
			title: 'Курсы',
			option: [
				{ title: 'Все курсы', to: '/all' },
				{ title: 'Поиск курсов', to: '' },
				{ title: 'Темы документаций', to: '' },
			],
		},
		{
			title: 'RU',
			option: [
				{ title: 'RU', to: '' },
				{ title: 'ENG', to: '' },
			],
		},
	]

	const FullName = 'Иванов Иван Иванович'

	const [openIndex, setOpenIndex] = useState(null)
	return (
		<>
			<div className='grid grid-cols-[1fr_3fr] fixed w-full px-40 bg-[var(--black)] pt-10 pb-5 z-100 left-0'>
				<HeaderMenu
					title={'МЕЛГУ СУО'}
					option={[
						{ title: 'Главная', to: '/main' },
						{ title: 'Дашборд', to: '/dashboard' },
						{ title: 'Календарь', to: '/calendar' },
						{ title: 'Личные файлы', to: '/files' },
					]}
				/>
				<div className='flex justify-end z-10'>
					<div className='flex items-center gap-9'>
						{HeaderDropdownInfo.map((item, index) => (
							<HeaderDropdown
								key={index}
								title={item.title}
								option={item.option}
								isOpen={openIndex === index}
								onToggle={() =>
									setOpenIndex(prev => (prev === index ? null : index))
								}
							/>
						))}
						<div className='flex items-center gap-6'>
							<SearchInHeader />
							<ToggleTheme />
							<MessageBtn />
						</div>

						<p className='text-2xl font-bold text-[var(--text)] mix-blend-difference'>
							{`${FullName.split(' ')[0]} ${FullName.split(' ')[1][0]}.`}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header
