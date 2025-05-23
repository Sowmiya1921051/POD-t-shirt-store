import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

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
        <h2 className="heading__title">Angela Wong</h2>
        <span className="heading__meta">
         effect 03: Big arcs, smooth start, powerful snap, slow reveal.
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
