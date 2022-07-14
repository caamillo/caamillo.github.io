// React
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Icons
import { ReactComponent as Bars } from '../../icons/bars.svg'

// Components
import { Options, openOptions, closeOptions } from './Options'

// Utils
import getNight from '../../utils/getNight'

function Navbar() {
    const [isNight, setIsNight] = useState(getNight())
    const [isOpen, setIsOpen] = useState(false)

    window.addEventListener('storage', () => {
        setIsNight(getNight())
    })

    return (
        <div className = "md:sticky md:top-0 text-black dark:text-white z-10">
            <nav className = 'fixed md:static w-screen bg-menuLight dark:bg-menuDark backdrop-blur-md font-roboto top-0 z-10'>
                <div className = 'flex md:block w-full max-w-xl mx-auto p-4 items-center md:items-end justify-around text-center'>
                    <div className="logo md:hidden w-screen font-roboto z-10">
                        <a href = "#" className = 'text-xl md:text-5xl'>Camillo <span className = "font-thin">Portfolio</span></a>
                    </div>
                    <div className="pages space-x-10 child:transition child:ease-in-out child:delay-50 font-normal font-radiocanada">
                        <Link onClick={() => localStorage.setItem('isGone', false)} to = "/home" className = "md:inline hidden hover:text-black/50 dark:hover:text-white/80">Home</Link>
                        <Link onClick={() => localStorage.setItem('isGone', false)} to = "/works" className = "md:inline hidden hover:text-black/50 dark:hover:text-white/80">Works</Link>
                        <Link onClick={() => localStorage.setItem('isGone', false)} to = "/contact" className = "md:inline hidden hover:text-black/50 dark:hover:text-white/80">Contact</Link>
                    </div>
                    <button id = 'btnMenu' onClick = { async () => isOpen ? await closeOptions() : await openOptions() } className = "absolute right-0 mr-4 sm:block md:hidden w-[25px] h-[25px] z-10">
                        <Bars fill = { isNight ? '#ffffff90' : '#00000090' } />
                    </button>
                </div>
            </nav>
            <Options isOpen = { isOpen } setIsOpen = { setIsOpen } />
        </div>
    )
}

export default Navbar