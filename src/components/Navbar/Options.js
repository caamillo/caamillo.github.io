// React
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

let isOpenOutside, setIsOpenOutside

function openOptions() {
    return new Promise((resolve, reject) => {
        const options = document.getElementById('options')
        const btnMenu = document.getElementById('btnMenu')

        if (isOpenOutside || btnMenu.disabled) return reject(null)

        options.style.display = 'flex'
        options.style.backdropFilter = 'blur(12px)'
        btnMenu.disabled = true

        options.animate(
            [
                { transform: 'translateY(-100%)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ], { duration: 500 }
        )

        setTimeout(() => {
            setIsOpenOutside(true)
            resolve(btnMenu.disabled = false)
        }, 500)
    }).catch(() => {}) // Silent rejection
}

function closeOptions() {
    return new Promise((resolve, reject) => {
        const options = document.getElementById('options')
        const btnMenu = document.getElementById('btnMenu')

        if (!isOpenOutside || btnMenu.disabled) return reject(null)

        btnMenu.disabled = true

        options.animate(
            [
                { transform: 'translateY(0)', opacity: 1 },
                { transform: 'translateY(-100%)', opacity: 0 }
            ], { duration: 500 }
        )
    
        setTimeout(() => {
            options.style.display = 'none'
            setIsOpenOutside(false)
            resolve(btnMenu.disabled = false)
        }, 490)
    }).catch(() => {}) // Silent rejection
}

function Options({ btnMenuOutside, isOpen, setIsOpen }) {

    isOpenOutside = isOpen
    setIsOpenOutside = setIsOpen

    useEffect(() => {
        const closeMenu = () => isOpen ? closeOptions() : null
        window.addEventListener('click', closeMenu)
        return () => window.removeEventListener('click', closeMenu)
    })

    return (
        <div className="options md:hidden top-[60px] fixed w-full font-roboto z-10">
            <div id='options' className="hidden flex-col font-thin text-center bg-menuLight dark:bg-menuDark child:p-4 child:w-full child:h-full child:transition child:ease-in-out child:delay-50">
                <Link onClick={() => localStorage.setItem('isGone', false)} to="/home" className='hover:bg-menuLight dark:hover:bg-menuDark'>Home</Link>
                <Link onClick={() => localStorage.setItem('isGone', false)} to="/works" className='hover:bg-menuLight dark:hover:bg-menuDark'>Works</Link>
                <Link onClick={() => localStorage.setItem('isGone', false)} to="/contact" className='hover:bg-menuLight dark:hover:bg-menuDark'>Contact</Link>
            </div>
        </div>
    )
}

export { 
    Options,
    openOptions,
    closeOptions
}