// React
import { Link, useLocation } from 'react-router-dom'

// Lang
import works from '../lang/works.json'


function Works() {
    const location = useLocation()
    const workname = location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length)
    console.log(workname)
    return (
        <div className="wrapper h-[calc(100vh-60px)] md:h-[calc(100vh-120px)]">
            <h1>{ works['en'][workname]['title'] }</h1>
            <h2>{ works['en']['desc'] }</h2>
        </div>
    );
}

export default Works