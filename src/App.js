// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './Home';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element = { <Home /> } />
        </Routes>
    </BrowserRouter>
}

export default App