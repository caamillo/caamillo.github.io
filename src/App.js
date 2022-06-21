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
                <section className='h-[calc(100vh-60px)] md:h-[calc(100vh-120px)] flex items-center justify-center'>
                    <div className='text-3xl md:text-5xl font-roboto font-thin text-center'>
                        <p>Hello, I'm Camillo.</p>
                        <p>I'm a <a className='font-normal'>Dream Aviator</a>.</p>
                    </div>
                </section>
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