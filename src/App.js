// React
import { useState, useEffect } from 'react'

// Tailwind
import './tailwind/tailwind.css'

// Components
import ThemeToggler from './components/ThemeToggler'

// Hooks
import useNight from './hooks/useNight'

// CSS
import './css/scrollbar.css'

function App() {

    const [isNight, setIsNight] = useNight()

    return (
        <div className="container w-screen h-full">
            <ThemeToggler isNight = { isNight } setIsNight = { setIsNight } />
            <div className="mobile-divider h-[60px] md:hidden"></div>
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