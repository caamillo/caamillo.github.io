// React
import { useState, useEffect } from 'react'

function useNight(defaultNight = false) {
    const [isNight, setIsNight] = useState(localStorage.getItem('darkmode') != null ? localStorage.getItem('darkmode') === 'true' : (window.matchMedia != null ? window.matchMedia('(prefers-color-scheme: dark)').matches : defaultNight)) // defaultNight is the 'default'

    useEffect(() => {
        if (isNight) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')

        localStorage.setItem('darkmode', isNight)
    }, [isNight])

    return [
        isNight,
        setIsNight
    ]
}

export default useNight