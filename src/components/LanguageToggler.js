import { ReactComponent as Earth } from '../icons/earth.svg'

function LanguageToggler() {

    return(
        <div className="theme-toggler fixed left-0 bottom-0 m-5">
            <button type='button' className="w-[50px] h-[50px] flex items-center justify-center focus:outline-none text-bgDark bg-blurple border-2 border-bgLight dark:border-bgDark rounded-md shadow-[0_0_0_2px_var(--blurple)]">
                <Earth fill='white' className='w-6'/>
            </button>
        </div>
    )
}

export default LanguageToggler;