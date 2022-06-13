// React
import { useState, useEffect } from 'react'

// Icons
import { ReactComponent as Bars } from '../icons/bars.svg'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const option = document.getElementById('options')
        if (isOpen) option.style.display = 'flex'
        else option.style.display = 'none'
    }, [isOpen])

    return(
        <nav className='fixed w-full bg-menuLight dark:bg-menuDark backdrop-blur-sm font-roboto z-10'>
          <div className='flex w-full max-w-xl mx-auto py-3 items-center md:items-end justify-around'>
            <div className="logo">
              <a href="#" className='text-xl'>Camillo <span className="font-thin">Portfolio</span></a>
            </div>
            <div className="pages font-thin space-x-6">
              <a href='#' className='md:inline hidden hover:text-black/50 dark:hover:text-white/80'>Home</a>
              <a href='#' className="md:inline hidden hover:text-black/50 dark:hover:text-white/80">Works</a>
            </div>
            <button onClick={ () => setIsOpen(!isOpen) } className="sm:block md:hidden w-[25px] h-[25px]">
              <Bars fill = { true ? '#ffffff90' :' #ffffff90' } />
            </button>
          </div>
          <ul id='options' className="hidden flex-col font-thin text-center child:p-4 child:w-full child:h-full">
            <li className='hover:bg-menuDark'>Home</li>
            <li className='hover:bg-menuDark'>Works</li>
          </ul>
        </nav>
    )
}

export default Navbar;