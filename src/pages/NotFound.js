import { Link } from 'react-router-dom'

function NotFound() {

    return (
        <div className="wrapper h-[calc(100vh-60px-100px-1.25rem)] md:h-[calc(100vh-120px-70px-1.25rem)]">
            <div className="error flex flex-col justify-center items-center w-full h-full text-center">
                <h1 className="text-9xl font-bold font-roboto">404</h1>
                <div className="explain font-roboto">
                    <h2 className="text-xl m-1 text-blurple font-roboto font-bold">PAGE NOT FOUND</h2>
                    <h3 className=''>The page you were looking for does not exists</h3>
                    <h3>So please, <Link to = '/' className="text-blurple hover:text-darkBlurple transition ease-in-out delay-50">go back</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default NotFound