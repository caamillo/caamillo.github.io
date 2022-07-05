// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import NotFound from './pages/NotFound';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="home" element = { <Home  goto = { 'home' } /> } />
            <Route path="works" element = { <Home goto = { 'works' } /> } />
            <Route path="contact" element = { <Home goto = { 'contact' } /> } />
            <Route path="works/:workName" element = { <Works /> } />
            <Route path="*" element = { <NotFound /> } />
        </Routes>
    </BrowserRouter>
}

export default App