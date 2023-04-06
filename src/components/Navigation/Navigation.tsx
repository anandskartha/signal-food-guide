import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import { Page } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
    currentPage: Page,
    setCurrentPage: (page: Page) => void,
    isTop: boolean
}

const Navigation = ({ currentPage, setCurrentPage, isTop }: Props) => {
    const [isToggled, setToggled] = useState<boolean>(false)
    const flexBetween = 'flex items-center justify-between'
    const isDesktop = useMediaQuery('(min-width: 1060px)')
    const bg1Color = !isTop ? 'bg-p-100 drop-shadow' : ''
    
    const toggleMenu = () => setToggled(!isToggled)
    return (
        <nav>
            <div className={`${flexBetween} ${bg1Color} w-full z-30 py-6 fixed`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    <div className={`${flexBetween} w-full gap-8`}>
                        <img alt='Smart Plate' src={Logo} />
                        {isDesktop? (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link text='Home' currentPage={currentPage} setCurrentPage={setCurrentPage} />
                                <Link text='Why Should I Eat Clean' currentPage={currentPage} setCurrentPage={setCurrentPage} />
                                <Link text='Get My Menu' currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>) : (
                        <button className='rounded-full bg-s-500 p-2'
                        onClick={ toggleMenu }>
                            <Bars3Icon className='w-6 h-6 text-white' />
                        </button>
                        )}
                    </div>
                </div>
            </div>

            {!isDesktop && isToggled && (
                <div className='fixed right-0 bottom-0 z-50 h-full w-[350px] bg-p-100 drop-shadow-xl'>
                    <div className='flex justify-end p-10'>
                        <button onClick={toggleMenu}>
                            <XMarkIcon className="w-6 h-6 text-red-900" />
                        </button>
                    </div>
                    <div className={`ml-[20%] flex flex-col gap-12 text-xl`}>
                        <Link text='Home' currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        <Link text='Why Should I Eat Clean' currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        <Link text='Get My Menu' currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation