import { useRef, useEffect } from "react";
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';
import carousel5 from '../assets/carousel5.png';
import carousel6 from '../assets/carousel6.png';


const slides = [
  { image: carousel1, caption: "Thank youu for being such a wonderful friend baksiii" },
  { image: carousel2, caption: "Keep safee and takee caree always ikaww unggoyy" },
  { image: carousel3, caption: "Keep up the goodwork tee! I am always proud of youu" },
  { image: carousel4, caption: "Enjoy your birthday always baksilogg! MBTCCC" },
  { image: carousel5, caption: "Wishing youu achieve all your dreams someday monkeyyy" },
  { image: carousel6, caption: "Ate Yannaa, life can feel heavy, and it’s okay to pause. You don’t have to carry everything alone, lean on family and friends when you need to. Tough moments pass, and brighter days will come. Prayyy lang palagiii" },
];

export default function Carousel() {
  const containerRef = useRef(null);

  const displayedSlides = [...slides, ...slides]; // duplicate for seamless scroll

  useEffect(() => {
    const container = containerRef.current;
    let start = 0;
    const speed = 0.5;

    const animate = () => {
      start += speed;
      if (start >= container.scrollWidth / 2) start = 0; // seamless reset
      container.style.transform = `translateX(-${start}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="flex w-max gap-10"
      >
        {displayedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-[450px] h-[600px] p-4 bg-white flex flex-col gap-5 shadow-lg">
              <img src={slide.image} alt={slide.caption} className="w-full h-auto object-cover" />
              <p className="text-center text-md font-semibold">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}