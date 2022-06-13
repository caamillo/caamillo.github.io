// React
import { useState, useEffect } from 'react'

// Tailwind
import './tailwind/tailwind.css'

// Components
import Navbar from './components/Navbar'
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
        <div className="container">
        <Navbar />
        <ThemeToggler isNight = { isNight } setIsNight = { setIsNight } />
        <section id='home' className='bg-bgDark w-screen h-screen'>
            Ciao
        </section>
        <section id='home' className='bg-bgDark w-screen h-screen'>
            Ciao
        </section>
        <section id='home' className='bg-bgDark w-screen h-screen'>
            Ciao
        </section>
        </div>
    );
}

export default App;
