import { Link } from 'react-router-dom'

function Work({ title, desc, Icon, link }) {

    return (
        <div className='border-2 border-blurple rounded-md'>
            <div className="context relative h-[85%] m-5 space-y-3 md:space-y-4">
                <div className="header flex justify-between h-[35px] md:h-[50px]">
                    <Icon fill='var(--blurple)' className='w-[35px] md:w-[50px]' />
                    <div className="project-name w-[75%] md:w-[80%] flex justify-center items-center text-center font-radiocanada font-bold md:text-xl text-blurple text-lg">
                        { title }
                    </div>
                </div>
                <div className="desc text-sm md:text-base space-y-4">
                    <div className="contextDesc break-all">
                        Test ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tincidunt eros. Etiam sit amet laoreet dui. Praesent molestie sem et nunc ultrices, et molestie nibh
                    </div>
                </div>
                <Link to = {link} className='text-blurple text-sm md:text-base absolute bottom-0 left-0 font-bold hover:text-darkBlurple transition ease-in-out delay-50'>Read More</Link>
            </div>
        </div>
    )
}

export default Work