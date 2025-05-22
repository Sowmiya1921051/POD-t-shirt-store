import React from "react";

const Gallery = () => {
const images = [
  { id: 1, title: "Whorl — B45", model: "Anastasia Volkova", img: "assets/img33.webp" },
  { id: 2, title: "Flicker — D17", model: "Sophia White", img: "assets/img1.webp" },
  { id: 3, title: "Gleam — Z58", model: "Polina Sokolova", img: "assets/img2.webp" },
  { id: 4, title: "Shard — J03", model: "Ava Mitchell", img: "assets/img3.webp" },
  { id: 5, title: "Trace — Q29", model: "Maria Ivanenko", img: "assets/img4.webp" },
  { id: 6, title: "Crush — W92", model: "Ella Foster", img: "assets/img5.webp" },
  { id: 7, title: "Veil — X16", model: "Yulia Morozova", img: "assets/img6.webp" },
  { id: 8, title: "Clasp — S84", model: "Charlotte Hayes", img: "assets/img7.webp" },
  { id: 9, title: "Flint — T66", model: "Viktoria Kuznetsova", img: "assets/img8.webp" },
  { id: 10, title: "Spire — E49", model: "Amelia Parker", img: "assets/img9.webp" },
  { id: 11, title: "Plume — N22", model: "Daria Smirnova", img: "assets/img10.webp" },
  { id: 12, title: "Hollow — B75", model: "Zoe Adams", img: "assets/img11.webp" },
  { id: 13, title: "Brume — K10", model: "Anastasiya Orlova", img: "assets/img12.webp" },
  { id: 14, title: "Crave — F37", model: "Mia Bennett", img: "assets/img13.webp" },
  { id: 15, title: "Quiver — R19", model: "Natalia Volkova", img: "assets/img14.webp" },
  { id: 16, title: "Fathom — L52", model: "Isabella Young", img: "assets/img15.webp" },
];


  return (
    <>
      <div className="heading">
        <h2 className="heading__title">Angela Wong</h2>
        <span className="heading__meta">
          effect 03: Big arcs, smooth start, powerful snap, slow reveal.
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
