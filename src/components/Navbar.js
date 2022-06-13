function Navbar() {
    return(
        <nav className='fixed w-full bg-white/30 dark:bg-[#20202380] backdrop-blur-sm font-roboto z-10'>
          <div className='flex w-full max-w-xl mx-auto py-3 md:px-0 px-10 items-end justify-around'>
            <div className="logo">
              <a href="#" className='text-xl'>Camillo <span className="font-thin">Portfolio</span></a>
            </div>
            <div className="pages space-x-6 font-thin">
              <a href='#' className='md:inline hidden hover:text-black/50 dark:hover:text-white/80'>Home</a>
              <a href='#' className="hover:text-black/50 dark:hover:text-white/80">Works</a>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;