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
        <div className="wrapper h-[calc(100vh-60px)] md:h-[calc(100vh-120px)] flex items-center flex-col">
            <div className="card-work text-center flex flex-col justify-center items-center">
                <div className='card-title m-8'>
                    <h1 className='text-4xl md:text-6xl'>{ works[workname]['title'] }</h1>
                    <h2 className=' opacity-70'>{ works[workname]['langs'] }</h2>
                </div>
                <div className='card-content w-[300px] md:w-[500px] flex justify-center flex-col'>
                    <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis turpis ex. Phasellus nulla magna, laoreet non lacus a, consequat gravida diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae purus scelerisque, maximus lectus eget, interdum neque. Fusce rhoncus, ipsum quis porttitor scelerisque, lorem est tincidunt leo, at venenatis mi purus id nulla. Donec nibh purus, vulputate fringilla sagittis vitae, mollis nec ligula. Vivamus et turpis leo.</p>
                    { works[workname]['link'] && <a href={ works[workname]['link'] } className='text-blurple border-2 border-blurple rounded-md p-2 mt-5 flex justify-center items-center'><ExternalArrow fill="var(--blurple)" className='w-4 mx-2' /> Go to Repo</a> }
                    { !works[workname]['link'] && <div className='text-blurple border-2 border-blurple opacity-60 rounded-md p-2 mt-5 flex justify-center items-center'>Link not avaible</div> }
                </div>
            </div>
        </div>
    );
}

export default Works