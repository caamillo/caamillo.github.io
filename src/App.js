// React Router
import { HashRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import NotFound from './pages/NotFound';

function App() {

    return <HashRouter>
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="home" element = { <Home  goto = { 'home' } /> } />
            <Route path="works" element = { <Home goto = { 'works' } /> } />
            <Route path="contact" element = { <Home goto = { 'contact' } /> } />
            <Route path="works/skinalette" element = { <Works /> } />
            <Route path="works/dascanio" element = { <Works /> } />
            <Route path="works/testgame" element = { <Works /> } />
            <Route path="works/eccitamometro" element = { <Works /> } />
            <Route path="*" element = { <NotFound /> } />
        </Routes>
    </HashRouter>
}

export default App