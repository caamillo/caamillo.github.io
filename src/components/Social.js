// React
import { useState, useEffect } from 'react'

// Icons
import { ReactComponent as Instagram } from '../icons/social/instagram.svg'
import { ReactComponent as Github } from '../icons/social/github.svg'
import { ReactComponent as Twitter } from '../icons/social/twitter.svg'

// Utils
import getNight from '../utils/getNight'

function Social() {
    const [isNight, setIsNight] = useState(getNight())

    window.addEventListener('storage', () => {
        setIsNight(getNight())
    })
    
    return (
        <div className="social-container relative">
            <div className="social-media-icons mx-auto w-[100px]">
                <div className="socials flex items-center justify-center child:w-[40px] h-[70px] mt-12 md:mt-5 space-x-3">
                    <a href='https://www.instagram.com/caaamillo/'>
                        <Instagram className='dark:hover:fill-white/60 hover:fill-black/60 transition ease-in-out delay-50' fill = { isNight ? '#fff' : '#000' }/>
                    </a>
                    <a href='https://github.com/caamillo'>
                        <Github className='dark:hover:fill-white/60 hover:fill-black/60 transition ease-in-out delay-50' fill = { isNight ? '#fff' : '#000' }/>
                    </a>
                    <a href='https://twitter.com/camillodev'>
                        <Twitter className='dark:hover:fill-white/60 hover:fill-black/60 transition ease-in-out delay-50' fill = { isNight ? '#fff' : '#000' }/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social