import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function App() {
  const [bgImage, setBgImage] = useState('/church-watercolour-lowres.jpg');

  useEffect(() => {
    const img = new Image();
    img.src = '/church-watercolour.jpg';
    img.onload = () => {
      setBgImage('/church-watercolour.jpg');
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="absolute inset-0 flex items-center justify-center" style={{
        background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
      }}>
        <div className="text-center px-10 lg:px-20">
          <h1 className="text-5xl font-extrabold mb-10 font-cinzel leading-tight text-stone-200">Lac Marois Union Church</h1>
          <a href="/2024-schedule.pdf" download className="px-6 py-3 text-md font-semibold bg-stone-200 text-gray-800 rounded-lg hover:bg-stone-300 transition tracking-wider uppercase">
            Download Program
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;