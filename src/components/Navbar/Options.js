let btnMenuOutside = null

function openOptions() {
    const options = document.getElementById('options')

    return new Promise((resolve, reject) => {
        if (options.style.display === 'flex' || btnMenuOutside.disabled === true) return reject(null)

        options.style.display = 'flex'
        btnMenuOutside.disabled = true

        options.animate(
            [
                { transform: 'translateY(-100%)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ], { duration: 500 }
        )

        setTimeout(() => resolve(btnMenuOutside.disabled = false), 500)
    })
}

function closeOptions() {
    const options = document.getElementById('options')

    return new Promise((resolve, reject) => {
        if (options.style.display === 'none' || options.style.display.length < 1 || btnMenuOutside.disabled === true) return reject(null)

        btnMenuOutside.disabled = true

        options.animate(
            [
                { transform: 'translateY(0)', opacity: 1 },
                { transform: 'translateY(-100%)', opacity: 0 }
            ], { duration: 500 }
        )
    
        setTimeout(() => { options.style.display = 'none'; resolve(btnMenuOutside.disabled = false) }, 490)
    })
}

function Options({ btnMenu }) {

    btnMenuOutside = btnMenu

    return (
        <div className="options top-[52px] fixed w-full font-roboto backdrop-blur-sm">
            <ul id='options' className="hidden flex-col font-thin text-center bg-menuDark child:p-4 child:w-full child:h-full child:transition child:ease-in-out child:delay-50">
                <li className='hover:bg-menuDark'>Home</li>
                <li className='hover:bg-menuDark'>Works</li>
            </ul>
        </div>
    )
}

export { 
    Options,
    openOptions,
    closeOptions
}