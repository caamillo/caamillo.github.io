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

// Icons
import { ReactComponent as Download } from './icons/download.svg'
import { ReactComponent as Plane } from './icons/plane.svg'

// CVS
import darkcv from './imgs/cvs/darkcv.png'
import lightcv from './imgs/cvs/lightcv.png'

function App() {

    const [isNight, setIsNight] = useNight()

    return (
        <div className="container w-screen h-full">
            <ThemeToggler isNight = { isNight } setIsNight = { setIsNight } />
            <div className="mobile-divider h-[60px] md:hidden"></div>
            <section id='home' className='bg-bgLight dark:bg-bgDark w-screen h-screen'>
                <div className="plane-animation absolute top-[450px] right-[350px] hidden">
                    <Plane fill = { isNight ? '#fff' : '#000' } className = '-rotate-45 w-[30px]'/>
                </div>
                <section className='h-[calc(100vh-60px)] md:h-[calc(100vh-120px)] flex items-center justify-center'>
                    <div className='text-3xl md:text-5xl font-roboto font-thin text-center mb-10 space-y-5'>
                        <div className="welcome">
                            <p>Hello, I'm Camillo.</p>
                            <p>I'm a <a className='font-normal'>Dream Aviator</a>.</p>
                        </div>
                        <a download = { isNight ? 'camillo-darkcv' : 'camillo-lightcv' } href = { isNight ? darkcv : lightcv } className="block text-xl p-2 text-white font-normal bg-blurple border-2 border-bgLight dark:border-bgDark rounded-md shadow-[0_0_0_2px_var(--blurple)]">
                            <div className="btnContent flex justify-center items-center">
                                <div className="download-icon w-[25px] mr-2">
                                    <Download fill = '#fff' />
                                </div>
                                Download CV
                            </div>
                        </a>
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