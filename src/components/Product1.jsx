import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

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
        <h2 className="heading__title">Shane Weber</h2>
        <span className="heading__meta">
          effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.
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
        onClick={e => e.stopPropagation()}
      >
        <img src={selectedImage.img} alt={selectedImage.title} />
        <h2>{selectedImage.title}</h2>
        <p>Model: {selectedImage.model}</p>
      </motion.div>
      <motion.button
        className="close-button"
        onClick={e => {
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
