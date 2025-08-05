import { useEffect } from 'react'
import { Input } from '../components/Inputs'
import { Link } from '../components/Links'

const Authorization = () => {
	useEffect(() => {
		document.body.style.backgroundColor = 'var(--first-bg)'
	}, [])
	return (
		<>
			<div className='h-screen w-fit mx-40 grid grid-cols-3 gap-3'>
				<div className='col-span-1'>
					<div className='h-25 w-25 rounded-[20px] bg-[var(--black)] mt-10 mb-25'></div>
					<div className='border-r-1 border-[var(--deepdark-yellow)] h-1/2'>
						<div className='flex items-center gap-6 mb-10 w-1/2'>
							<img
								className='h-[30px] w-auto'
								src='./assets/icons/arrow.svg'
								alt=''
							/>
							<p className='text-black font-medium text-4xl'>Главная</p>
						</div>
						<p className='font-bold text-[var(--deepdark-yellow)] text-[64px] leading-20'>
							Твои курсы под рукой
						</p>
					</div>
				</div>
				<div className='col-span-2 grid grid-cols-8 gap-3 mt-60'>
					<div className='col-span-1'></div>
					<div className='col-span-7 flex flex-col'>
						<div className='w-full h-fit py-4 px-8 bg-white rounded-[20px] flex flex-col font-medium text-2xl text-[var(--black)] mb-[53px]'>
							<p>Hi there!</p>
							<p>Use demo account to check how this theme works.</p>
							<p>Login: student, password: Demo123#</p>
						</div>
						<div className='flex flex-col gap-10'>
							<Input type={'text'} placeholder={'Логин'} />
							<Input type={'password'} placeholder={'Пароль'} />
							<Link to={''} title={'Забыли логин или пароль?'} />
						</div>
						<div className='flex justify-between'>
							<p className='text-[var(--ghost-orange)] text-2xl font-medium'></p>
							<div className='flex gap-3'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Authorization
