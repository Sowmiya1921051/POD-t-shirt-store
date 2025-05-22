import React from "react";

const Gallery = () => {


const images = [
  { id: 1, title: "Pulse — D61", model: "Sofia Makarova", img: "assets/img16.webp" },
  { id: 2, title: "Fade — P42", model: "Scarlett James", img: "assets/img17.webp" },
  { id: 3, title: "Wisp — T14", model: "Ekaterina Romanova", img: "assets/img18.webp" },
  { id: 4, title: "Fragment — G77", model: "Aria Robinson", img: "assets/img19.webp" },
  { id: 5, title: "Spiral — Y24", model: "Daria Petrova", img: "assets/img20.webp" },
  { id: 6, title: "Trace — Z85", model: "Chloe Evans", img: "assets/img21.webp" },
  { id: 7, title: "Flare — C11", model: "Sofia Orlova", img: "assets/img22.webp" },
  { id: 8, title: "Chasm — R05", model: "Grace Walker", img: "assets/img23.webp" },
  { id: 9, title: "Bloom — N38", model: "Yana Melnikova", img: "assets/img24.webp" },
  { id: 10, title: "Shard — W20", model: "Mila Scott", img: "assets/img25.webp" },
  { id: 11, title: "Mist — S12", model: "Natalia Ivanova", img: "assets/img26.webp" },
  { id: 12, title: "Crush — E31", model: "Ava Thompson", img: "assets/img27.webp" },
  { id: 13, title: "Ripple — F68", model: "Anastasia Novikova", img: "assets/img28.webp" },
  { id: 14, title: "Gossamer — A07", model: "Madison Brooks", img: "assets/img29.webp" },
  { id: 15, title: "Floe — K96", model: "Ekaterina Smirnova", img: "assets/img30.webp" },
  { id: 16, title: "Shiver — V44", model: "Emily Robinson", img: "assets/img31.webp" },
];



  return (
    <>
      <div className="heading">
        <h2 className="heading__title">Kaito Nakamo</h2>
        <span className="heading__meta">
          effect 04: Quick upward motion with bold blending and smooth slow reveal.
        </span>
      </div>

      <div className="grid">
        {images.map(({ id, title, model, img }) => (
          <figure
            key={id}
            className="grid__item"
            role="img"
            aria-labelledby={`caption${id}`}
            data-steps="10"
            data-step-duration="0.3"
            data-path-motion="sine"
            data-sine-amplitude="300"
            data-clip-path-direction="left-right"
            data-auto-adjust-horizontal-clip-path="true"
            data-step-interval="0.07"
            data-mover-pause-before-exit="0.3"
            data-mover-enter-ease="sine"
            data-mover-exit-ease="power4"
            data-panel-reveal-ease="power4"
            data-panel-reveal-duration-factor="4"
          >
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
    </>
  );
};

export default Gallery;
