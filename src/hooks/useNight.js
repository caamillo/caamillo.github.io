// React
import { useState, useEffect } from 'react'

// Utils
import getNight from '../utils/getNight'

function useNight(defaultNight = false) {
    const [isNight, setIsNight] = useState(getNight(defaultNight))
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