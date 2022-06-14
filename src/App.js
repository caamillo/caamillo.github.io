// React
import { useState, useEffect } from 'react'

// Tailwind
import './tailwind/tailwind.css'

// Components
import Navbar from './components/Navbar/Navbar'
import ThemeToggler from './components/ThemeToggler'

// CSS
import './css/scrollbar.css'

function App() {

    const [isNight, setIsNight] = useState(localStorage.getItem('darkmode') != null ? localStorage.getItem('darkmode') === 'true' : (window.matchMedia != null ? window.matchMedia('(prefers-color-scheme: dark)').matches : false)) // false is the 'default'

    useEffect(() => {
        if (isNight) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        
        localStorage.setItem('darkmode', isNight)
    }, [isNight])

    return (
        <div className="container w-screen h-full text-black dark:text-white">
            <div className="logo md:block hidden text-center pt-4 w-screen dark:bg-menuDark backdrop-blur-sm font-roboto z-10">
                <a href = "#" className = 'text-xl md:text-5xl'>Camillo <span className = "font-thin">Portfolio</span></a>
            </div>
            <Navbar isNight = { isNight } />
            <ThemeToggler isNight = { isNight } setIsNight = { setIsNight } />
            <div className="divider h-[60px]">&nbsp;</div>
            <section id='home' className='bg-bgLight dark:bg-bgDark w-screen h-screen'>
                ciao
            </section>
            <section id='works' className='bg-bgLight dark:bg-bgDark w-screen h-screen'>
                Ciao
            </section>
            <section id='contact' className='bg-bgLight dark:bg-bgDark w-screen h-screen'>
                Ciao
            </section>
        </div>
    );
}

export default App
