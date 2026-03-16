import { useRef, useEffect } from "react";
import celebrant from './assets/celebrant.png';
import cake from './assets/cake.gif';
import confetti from './assets/confettiv2.gif';
import birthday from './assets/birthday.png';
import giftboxv3 from './assets/giftboxv3.png';
import arrow from './assets/arrow.gif';
import sparkle from './assets/sparkle.gif';
import happybday from './assets/happybday.mp3';
import './App.css';
import { Typewriter } from "./functions/typewriter.jsx";
import Carousel from './functions/carousel.jsx';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // lower background music volume
    }
  }, []);

  return (
    <div className='overflow-hidden'>

      {/* Background music */}
      <audio ref={audioRef} src={happybday} autoPlay loop style={{ display: "none" }} />

      {/* Section 1 - Hero */}
      <section
        className="relative min-h-screen bg-cover flex justify-center bg-center px-4 md:px-10"
        style={{
          backgroundImage: `
            url(${confetti}),
            linear-gradient(180deg, #FFF8F2 0%, #F7EFE5 45%, #FADADD 100%)
          `
        }}
      >
        <div className="flex flex-col items-center w-full max-w-[1200px]">
          <img
            src={birthday}
            alt="birthday"
            className="mt-5 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />

          <Typewriter
            texts={["Atee Yannaa", "Baksiloggg", "Monkeyyy", "Baksiii", "Unggoyyy"]}
            className="text-[28px] sm:text-[32px] md:text-[50px] absolute top-[100px] sm:top-[120px] md:top-[125px]"
          />
        </div>

        <img
          src={celebrant}
          alt="celebrant"
          className="absolute bottom-[40px] sm:bottom-[60px] w-[80%] max-w-[500px] sm:max-w-[650px] left-1/2 -translate-x-1/2"
        />

        <img
          src={cake}
          alt="cake"
          className="absolute bottom-[-80px] sm:bottom-[-150px] w-[80%] max-w-[500px] sm:max-w-[675px] left-1/2 -translate-x-1/2 z-20"
        />
      </section>

      {/* Divider 1 - Appreciation Marquee */}
      <section className="relative h-[80px] sm:h-[100px] bg-black overflow-hidden flex items-center">
        <div
          className="flex whitespace-nowrap text-white text-xs sm:text-sm font-semibold"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <span className="mx-[2px]">• Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
          <span className="mx-[2px]"> Appreciation & Wishes • Appreciation & Wishes • Appreciation & Wishes •</span>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </section>

      {/* Section 2 - Carousel */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FADADD] via-[#F7EFE5] to-[#F5D0C5] px-4 sm:px-10">
        <div className="w-full max-w-[1200px]">
          <Carousel />
        </div>
      </section>

      {/* Divider 2 - Birthday Gift Marquee */}
      <section className="relative h-[80px] sm:h-[100px] bg-black overflow-hidden flex items-center">
        <div
          className="flex whitespace-nowrap text-white text-xs sm:text-sm font-semibold"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <span className="mx-[2px]">• Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
          <span className="mx-[2px]"> Birthday Gift • Birthday Gift • Birthday Gift •</span>
        </div>
      </section>

      {/* Section 4 - Giftbox */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FADADD] via-[#F5D0C5] to-[#E57373] relative px-4 sm:px-10">
        <div className="flex flex-col items-center w-full max-w-[1200px] relative">
          
          {/* Sparkles */}
          <img src={sparkle} alt="sparkle" className='w-[80px] sm:w-[150px] absolute top-[10px] left-[70%]' />
          <img src={sparkle} alt="sparkle" className='w-[60px] sm:w-[120px] absolute top-[20px] left-[10%]' />
          <img src={sparkle} alt="sparkle" className='w-[40px] sm:w-[100px] absolute top-[-30px] left-[35%]' />

          <a
            href="https://digibouquet.vercel.app/bouquet/b7cd050e-fb34-432e-9561-0b694d77417b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={giftboxv3} alt="giftbox" className="w-[70%] sm:w-[600px] md:w-[650px] lg:w-[650px]" />
          </a>

          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-[35px] sm:text-[75px] text-center sm:text-left">Click mo Te!</p>
            <img src={arrow} alt="arrow" className="w-[100px] sm:w-[150px] mt-4 sm:mt-0 sm:ml-6" />
          </div>

        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#4A2C2A] py-3 text-center">
        <span className="text-[#FFF8F2] text-sm tracking-wide">
          © Mark Joseph the Baksilog
        </span>
      </section>

    </div>
  );
}

export default App;