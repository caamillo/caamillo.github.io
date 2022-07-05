// React
import { Link, useParams } from 'react-router-dom'

// Lang
import works from '../lang/works.json'


function Works() {
    const { workName } = useParams()
    console.log(works)
    return (
        <div className="wrapper h-[calc(100vh-60px)] md:h-[calc(100vh-120px)]">
            <h1>{ works['en']['title'] }</h1>
            <h2>{ works['en']['desc'] }</h2>
        </div>
    );
}

export default Works