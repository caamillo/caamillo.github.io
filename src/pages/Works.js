// React
import { Link, useParams } from 'react-router-dom'

// Lang


function Works() {
    const { workName } = useParams()
    return (
        <div className="wrapper h-[calc(100vh-60px)] md:h-[calc(100vh-120px)]">
            { workName }
        </div>
    );
}

export default Works