// React
import { useState, useEffect } from 'react'

// Icons
import { ReactComponent as Bars } from '../../icons/bars.svg'

// Components
import { Options, openOptions, closeOptions } from './Options'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        ;(async () => {
            if (isOpen) await openOptions()
            else await closeOptions()
        })()
    }, [isOpen])

    return (
        <div className="nav-container">
            <nav className='fixed w-full bg-menuLight dark:bg-menuDark backdrop-blur-sm font-roboto z-10'>
                <div className='flex md:block w-full max-w-xl mx-auto py-3 items-center md:items-end justify-around text-center md:space-y-2'>
                    <div className="logo">
                    <a href="#" className='text-xl md:text-3xl'>Camillo <span className="font-thin">Portfolio</span></a>
                </div>
                <div className="pages font-thin space-x-6 child:transition child:ease-in-out child:delay-50">
                    <a href='#' className='md:inline hidden hover:text-black/50 dark:hover:text-white/80'>Home</a>
                    <a href='#' className="md:inline hidden hover:text-black/50 dark:hover:text-white/80">Works</a>
                </div>
                <button id='btnMenu' onClick={ () => setIsOpen(!isOpen) } className="sm:block md:hidden w-[25px] h-[25px]">
                    <Bars fill = { true ? '#ffffff90' :' #ffffff90' } />
                </button>
                </div>
            </nav>
            <Options btnMenu = { document.getElementById('btnMenu') } />
        </div>
    )
}

export default Navbar