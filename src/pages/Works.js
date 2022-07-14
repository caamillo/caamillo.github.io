// React
import { Link, useLocation } from 'react-router-dom'

// Lang
import works from '../lang/works.json'

// Icons
import { ReactComponent as ExternalArrow } from '../icons/external-arrow.svg'

function Works() {

    const location = useLocation()
    const workname = location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length)

    return (
        <div className="wrapper h-full md:h-[calc(100vh-120px-70px-1.25rem)] flex items-center flex-col">
            <div className="card-work text-center flex flex-col justify-center items-center">
                <div className='card-title m-8'>
                    <h1 className='text-4xl md:text-6xl'>{ works[workname]['title'] }</h1>
                    <h2 className=' opacity-70'>{ works[workname]['langs'] }</h2>
                </div>
                <div className='card-content w-[300px] md:w-[500px] flex justify-center flex-col'>
                    <p className='text-sm md:text-base'>{ works[workname]['desc']['it'] }</p>
                    { works[workname]['link'] && <a href={ works[workname]['link'] } className='text-blurple border-2 border-blurple rounded-md p-2 mt-5 flex justify-center items-center'><ExternalArrow fill="var(--blurple)" className='w-4 mx-2' /> Go to Repo</a> }
                    { !works[workname]['link'] && <div className='text-blurple border-2 border-blurple opacity-60 rounded-md p-2 mt-5 flex justify-center items-center'>Link not available</div> }
                </div>
            </div>
        </div>
    );
}

export default Works