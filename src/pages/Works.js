// React
import { Link, useLocation } from 'react-router-dom'

// Lang
import works from '../lang/works.json'


function Works() {
    const location = useLocation()
    const workname = location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length)
    console.log(workname)
    return (
        <div className="wrapper h-[calc(100vh-60px)] md:h-[calc(100vh-120px)] flex items-center flex-col">
            <div className="card-work text-center">
                <div className='card-title m-8'>
                    <h1 className='text-6xl'>{ works[workname]['title'] }</h1>
                    <h2 className=' opacity-70'>{ works[workname]['langs'] }</h2>
                </div>
                <div className='card-content w-[340px] md:w-[500px]'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis turpis ex. Phasellus nulla magna, laoreet non lacus a, consequat gravida diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae purus scelerisque, maximus lectus eget, interdum neque. Fusce rhoncus, ipsum quis porttitor scelerisque, lorem est tincidunt leo, at venenatis mi purus id nulla. Donec nibh purus, vulputate fringilla sagittis vitae, mollis nec ligula. Vivamus et turpis leo.</p>
                </div>
            </div>
        </div>
    );
}

export default Works