function Navbar() {
    return(
        <nav className='fixed w-full text-[#fff] bg-[#20202380] backdrop-blur'>
        <div className='flex w-full max-w-xl mx-auto py-3 md:px-0 px-10 items-center justify-around'>
          <div className="logo">
            <a href="#" className='text-xl font-roboto'>Camillo <span className="font-thin">Portfolio</span></a>
          </div>
          <div className="pages space-x-6 font-thin">
            <a href='#' className='md:inline hidden hover:text-[#fff]/80'>Home</a>
            <a href='#' className="hover:text-[#fff]/80">Works</a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;