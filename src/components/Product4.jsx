import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

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


const gridItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07 }
  })
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.92 }
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="heading">
        <h2 className="heading__title">Kaito Nakamo</h2>
        <span className="heading__meta">
          effect 04: Quick upward motion with bold blending and smooth slow reveal.
        </span>
      </div>

      <div className="grid">
        {images.map(({ id, title, model, img }, i) => (
          <motion.figure
            key={id}
            className="grid__item"
            role="img"
            aria-labelledby={`caption${id}`}
            onClick={() => setSelectedImage({ title, model, img })}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={gridItemVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
          >
            <div
              className="grid__item-image"
              style={{ backgroundImage: `url(${img})` }}
            />
            <figcaption className="grid__item-caption" id={`caption${id}`}>
              <h3>{title}</h3>
              <p>Model: {model}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fullscreen-modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <motion.div
              className="fullscreen-content"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedImage.title}</h2>
              <p>Model: {selectedImage.model}</p>

              {/* T-shirt image preview */}
              <div className="tshirt-display">
                <img src={selectedImage.img} alt={selectedImage.title} className="tshirt-img" />
                <div className="text-overlay">
                  {selectedImage.text?.split("\n").slice(0, 3).map((line, i) => (
                    <p key={i} className="overlay-line">{line}</p>
                  ))}
                </div>
              </div>

              {/* Text Input */}
              <textarea
                className="tshirt-textarea"
                placeholder="Type your T-shirt text (max 3 lines)..."
                rows={3}
                maxLength={180}
                onChange={(e) =>
                  setSelectedImage({ ...selectedImage, text: e.target.value })
                }
              />
            </motion.div>

            {/* Close Button */}
            <motion.button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
