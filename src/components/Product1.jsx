import React from "react";

const Gallery = () => {
  const images = [
    { id: 1, title: "Drift — A04", model: "Amelia Hart", img: "assets/img1.webp" },
    { id: 2, title: "Veil — K18", model: "Irina Volkova", img: "assets/img2.webp" },
    { id: 3, title: "Ember — M45", model: "Charlotte Byrne", img: "assets/img3.webp" },
    { id: 4, title: "Gleam — S12", model: "Anastasia Morozova", img: "assets/img4.webp" },
    { id: 5, title: "Bloom — J29", model: "Eva Ramirez", img: "assets/img5.webp" },
    { id: 6, title: "Whisper — V87", model: "Milana Petrova", img: "assets/img6.webp" },
    { id: 7, title: "Trace — Z05", model: "Sofia Carter", img: "assets/img7.webp" },
    { id: 8, title: "Flicker — Q62", model: "Alina Kuznetsova", img: "assets/img8.webp" },
    { id: 9, title: "Grain — H71", model: "Isabella Novak", img: "assets/img9.webp" },
    { id: 10, title: "Pulse — B90", model: "Daria Sokolova", img: "assets/img10.webp" },
    { id: 11, title: "Mist — L36", model: "Victoria Fields", img: "assets/img11.webp" },
    { id: 12, title: "Shard — Y22", model: "Natalia Popova & Emily Stone", img: "assets/img12.webp" },
    { id: 13, title: "Vapor — X79", model: "Yulia Orlova", img: "assets/img13.webp" },
    { id: 14, title: "Glow — F13", model: "Camila Ford", img: "assets/img14.webp" },
    { id: 15, title: "Flux — N48", model: "Sofia Mikhailova", img: "assets/img15.webp" },
    { id: 16, title: "Spire — C65", model: "Ava Bennett", img: "assets/img16.webp" },
  ];

  return (
    <>
      <div className="heading">
        <h2 className="heading__title">Shane Weber</h2>
        <span className="heading__meta">
          effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.
        </span>
      </div>

      <div className="grid">
        {images.map(({ id, title, model, img }) => (
          <figure key={id} className="grid__item" role="img" aria-labelledby={`caption${id}`}>
            <div
              className="grid__item-image"
              style={{ backgroundImage: `url(${img})` }}
            />
            <figcaption className="grid__item-caption" id={`caption${id}`}>
              <h3>{title}</h3>
              <p>Model: {model}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Preview Panel */}
      <figure className="panel" role="img" aria-labelledby="caption">
        <div className="panel__img" style={{ backgroundImage: "url(assets/img1.webp)" }}></div>
        <figcaption className="panel__content" id="caption">
          <h3>murmur—207</h3>
          <p>
            Beneath the soft static of this lies a fragmented recollection of motion—faded pulses echoing through
            time-warped layers of light and silence. A stillness wrapped in artifact.
          </p>
          <button type="button" className="panel__close" aria-label="Close preview">Close</button>
        </figcaption>
      </figure>
    </>
  );
};

export default Gallery;
