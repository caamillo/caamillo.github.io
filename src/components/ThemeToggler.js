// React
import { useState, useEffect } from 'react'

// Icons
import { ReactComponent as Sun } from '../icons/sun.svg'
import { ReactComponent as Moon } from '../icons/moon.svg'

function ThemeToggler({ isNight, setIsNight }) {

    const [IconTheme, setIconTheme] = useState(isNight ? Sun : Moon)

    useEffect(() => {
        setIconTheme(isNight ? Sun : Moon)
    }, [isNight])

    return(
        <div className="theme-toggler fixed right-0 bottom-0 m-5">
            <button type='button' onClick={ () => setIsNight(!isNight) } className="w-[50px] h-[50px] flex items-center justify-center text-bgDark bg-white border-2 border-bgDark rounded-md outline outline-2 outline-white">
                <IconTheme fill="#000" className="w-6" />
            </button>
        </div>
    )
}

export default ThemeToggler;