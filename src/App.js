// Tailwind
import './tailwind/tailwind.css';

// Components
import Navbar from './components/Navbar';

// Css
import './css/scrollbar.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <section id='home' className='bg-[#121212] w-screen h-screen text-[#fff]'>
        Ciao
      </section>
      <section id='home' className='bg-[#bbb] w-screen h-screen text-[#fff]'>
        Ciao
      </section>
      <section id='home' className='bg-[#ccc] w-screen h-screen text-[#fff]'>
        Ciao
      </section>
    </div>
  );
}

export default App;
