// React
import { useState, useEffect } from 'react'

// Tailwind
import './tailwind/tailwind.css'

// Components
import { ThemeToggler } from './components/ThemeToggler'

// CSS
import './css/scrollbar.css'

// Icons
import { ReactComponent as Download } from './icons/download.svg'
import { ReactComponent as Plane } from './icons/plane.svg'
import { ReactComponent as Phone } from './icons/phone.svg'
import { ReactComponent as React } from './icons/react.svg'
import { ReactComponent as Instagram } from './icons/social/instagram.svg'
import { ReactComponent as Github } from './icons/social/github.svg'
import { ReactComponent as Twitter } from './icons/social/twitter.svg'

// CVS
import darkcv from './imgs/cvs/darkcv.png'
import lightcv from './imgs/cvs/lightcv.png'

// Utils
import getNight from './utils/getNight'

function App() {
    const [isNight, setIsNight] = useState(getNight())
    const [isFlying, setIsFlying] = useState(false)

    window.addEventListener('storage', () => {
        setIsNight(getNight())
    })

    useEffect(() => {
        const plane = document.getElementById('plane')
        const animatePlane = () => {
            if (isFlying) return null
            setIsFlying(true)
            plane.animate([
                { transform: 'translate(0, 0)' },
                { transform: 'translate(30px, -30px)' }
            ], { duration: 1E3 })
            plane.animate([
                { opacity: 0 },
                { opacity: 1 },
            ], { duration: 500 })
            plane.style.opacity = 1
            setTimeout(
                () => {
                    plane.animate([
                        { opacity: 1 },
                        { opacity: 0 },
                    ], { duration: 200 })
                    setTimeout(() => {
                        plane.style.opacity = 0
                        setTimeout(() => setIsFlying(false), 300)
                    }, 200)
                },
                800
            )
        }
        const dreamAviator = document.getElementById('dreamaviator')
        dreamAviator.addEventListener('mouseenter', animatePlane)
        return () => dreamAviator.removeEventListener('mouseenter', animatePlane)
    })

    return (
        <div className="container w-screen h-full">
            <ThemeToggler/>
            <div className="mobile-divider h-[60px] md:hidden"></div>
            <section id='home' className='bg-bgLight dark:bg-bgDark w-screen h-screen'>
                <section className='h-[calc(100vh-60px)] md:h-[calc(100vh-120px)] flex items-center justify-center'>
                    <div className='text-3xl md:text-5xl font-roboto font-thin text-center mb-10 space-y-5'>
                        <div className="welcome relative cursor-default z-0">
                            <p>Hello, I'm Camillo.</p>
                            <p>I'm a <a id='dreamaviator' className='font-normal'>Dream Aviator</a>.</p>
                            <div id='plane' className="plane-animation absolute top-[10px] md:top-[20px] right-0 opacity-0">
                                <Plane fill = { isNight ? '#fff' : '#000' } className = '-rotate-45 w-[30px]'/>
                            </div>
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
            <section id='works' className='bg-bgLight dark:bg-bgDark w-screen h-full md:h-screen'>
                <h1 className='text-center text-3xl p-10'>Latest Works</h1>
                <div className="wrapper flex flex-row justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-3 md:space-y-0 child:w-[250px] child:h-[250px] child:md:w-[300px] child:md:h-[300px]">
                        <div className='border-2 border-blurple rounded-md'>
                            <div className="context m-5 space-y-4">
                                <div className="header flex justify-between">
                                    <React fill='var(--blurple)' className='w-[50px] md:w-[50px]' />
                                    <div className="project-name w-[75%] md:w-[80%] flex justify-center items-center text-center font-radiocanada font-bold md:text-xl text-blurple text-lg">
                                        Skinalette
                                    </div>
                                </div>
                                <div className="desc text-sm md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tincidunt eros. Etiam sit amet laoreet dui. Praesent molestie sem et nunc ultrices, et molestie nibh laoreet.
                                </div>
                            </div>
                        </div>
                        <div className='border-2 border-blurple rounded-md'>
                            <div className="context m-5 space-y-4">
                                <div className="header flex justify-between">
                                    <React fill='var(--blurple)' className='w-[50px] md:w-[50px]' />
                                    <div className="project-name w-[75%] md:w-[80%] flex justify-center items-center text-center font-radiocanada font-bold md:text-xl text-blurple text-lg">
                                        Skinalette
                                    </div>
                                </div>
                                <div className="desc text-sm md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tincidunt eros. Etiam sit amet laoreet dui. Praesent molestie sem et nunc ultrices, et molestie nibh laoreet.
                                </div>
                            </div>
                        </div>
                        <div className='border-2 border-blurple rounded-md'>
                            <div className="context m-5 space-y-4">
                                <div className="header flex justify-between">
                                    <React fill='var(--blurple)' className='w-[50px] md:w-[50px]' />
                                    <div className="project-name w-[75%] md:w-[80%] flex justify-center items-center text-center font-radiocanada font-bold md:text-xl text-blurple text-lg">
                                        Skinalette
                                    </div>
                                </div>
                                <div className="desc text-sm md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tincidunt eros. Etiam sit amet laoreet dui. Praesent molestie sem et nunc ultrices, et molestie nibh laoreet.
                                </div>
                            </div>
                        </div>
                        <div className='border-2 border-blurple rounded-md'>
                            <div className="context m-5 space-y-4">
                                <div className="header flex justify-between">
                                    <React fill='var(--blurple)' className='w-[50px] md:w-[50px]' />
                                    <div className="project-name w-[75%] md:w-[80%] flex justify-center items-center text-center font-radiocanada font-bold md:text-xl text-blurple text-lg">
                                        Skinalette
                                    </div>
                                </div>
                                <div className="desc text-sm md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tincidunt eros. Etiam sit amet laoreet dui. Praesent molestie sem et nunc ultrices, et molestie nibh laoreet.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact' className='bg-bgLight dark:bg-bgDark w-screen h-full'>
                <div className="contact-container flex flex-col justify-center items-center h-[calc(100vh-2.5rem)]">
                    <h1 className='text-2xl md:text-3xl mb-3'>Feel free to contact me</h1>
                    <div className="mobile-container flex justify-center items-center h-[50px] rounded-md shadow-[0_0_0_2px_var(--blurple)]">
                        <div className="icon w-[50px] h-[50px] flex items-center justify-center text-bgDark bg-blurple border-2 border-bgLight dark:border-bgDark rounded-md shadow-[0_0_0_2px_var(--blurple)]">
                            <div className="icon w-[20px]">
                                <Phone fill='#fff' />
                            </div>
                        </div>
                        <div className="contact-id px-3">+39 329 634 0655</div>
                    </div>
                    <div className="text text-sm mt-4">or send me an <a href="mailto:mcamillolud@gmail.com" className='text-blurple hover:text-darkBlurple transition ease-in-out delay-50'>email</a></div>
                </div>
                <div className="social-container relative">
                        <div className="social-media-icons absolute left-0 right-0 mx-auto bottom-[25px] w-[100px]">
                            <div className="socials flex items-center justify-center child:w-[40px] space-x-3">
                                <a href='https://www.instagram.com/caaamillo/'>
                                    <Instagram className='dark:hover:fill-white/60 transition ease-in-out delay-50' fill = { isNight ? '#fff' : '#000' }/>
                                </a>
                                <a href='https://github.com/Diasky'>
                                    <Github className='dark:hover:fill-white/60 transition ease-in-out delay-50' fill = { isNight ? '#fff' : '#000' }/>
                                </a>
                                <a href='https://twitter.com/camillodev'>
                                    <Twitter className='dark:hover:fill-white/60 transition ease-in-out delay-50' fill = { isNight ? '#fff' : '#000' }/>
                                </a>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default App