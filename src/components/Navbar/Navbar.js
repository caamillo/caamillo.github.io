// React
import { useState } from 'react'

// Icons
import { ReactComponent as Bars } from '../../icons/bars.svg'

// Components
import { Options, openOptions, closeOptions } from './Options'

// Hooks
import useNight from '../../hooks/useNight'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isNight, setIsNight] = useNight(false)

    return (
        <div className = "md:sticky md:top-0 text-black dark:text-white z-10">
            <nav className = 'fixed md:static w-screen bg-menuLight dark:bg-menuDark backdrop-blur-md font-roboto z-10'>
                <div className = 'flex md:block w-full max-w-xl mx-auto p-4 items-center md:items-end justify-around text-center'>
                    <div className="logo md:hidden w-screen font-roboto z-10">
                        <a href = "#" className = 'text-xl md:text-5xl'>Camillo <span className = "font-thin">Portfolio</span></a>
                    </div>
                    <div className="pages space-x-10 child:transition child:ease-in-out child:delay-50 font-normal font-radiocanada">
                        <button onClick = { () => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }) } className = "md:inline hidden hover:text-black/50 dark:hover:text-white/80">Home</button>
                        <button onClick = { () => document.getElementById('works').scrollIntoView({ behavior: 'smooth' }) } className = "md:inline hidden hover:text-black/50 dark:hover:text-white/80">Works</button>
                        <button onClick = { () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) } className = "md:inline hidden hover:text-black/50 dark:hover:text-white/80">Contact</button>
                    </div>
                    <button id = 'btnMenu' onClick = { async () => isOpen ? await closeOptions() : await openOptions() } className = "absolute right-0 mr-4 sm:block md:hidden w-[25px] h-[25px] z-10">
                        <Bars fill = { isNight ? '#ffffff90' :' #00000090' } />
                    </button>
                </div>
            </nav>
            <Options isOpen = { isOpen } setIsOpen = { setIsOpen } />
        </div>
    )
}

export default Navbar