import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [embla] = useEmblaCarousel();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="embla" ref={embla}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    </div>
  );
}
