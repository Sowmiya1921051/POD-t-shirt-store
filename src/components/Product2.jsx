import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

const images = [
  { id: 17, title: "Lumen — T34", model: "Elena Smirnova", img: "assets/img17.webp" },
  { id: 18, title: "Crush — W59", model: "Zara Ivanova", img: "assets/img18.webp" },
  { id: 19, title: "Halo — M98", model: "Olivia Martin", img: "assets/img19.webp" },
  { id: 20, title: "Frost — K72", model: "Lana Petrova", img: "assets/img20.webp" },
  { id: 21, title: "Echo — D83", model: "Chloe Anderson", img: "assets/img21.webp" },
  { id: 22, title: "Nova — G61", model: "Nina Sokolova", img: "assets/img22.webp" },
  { id: 23, title: "Ray — J55", model: "Sophia Ivanenko", img: "assets/img23.webp" },
  { id: 24, title: "Haze — U44", model: "Emily Novak", img: "assets/img24.webp" },
  { id: 25, title: "Quartz — A73", model: "Isla Petrova", img: "assets/img25.webp" },
  { id: 26, title: "Silk — R21", model: "Amelia Sokolov", img: "assets/img26.webp" },
  { id: 27, title: "Drizzle — E19", model: "Lily Carter", img: "assets/img27.webp" },
  { id: 28, title: "Aura — C82", model: "Eva Orlova", img: "assets/img28.webp" },
  { id: 29, title: "Muse — P99", model: "Mila Bennett", img: "assets/img29.webp" },
  { id: 30, title: "Shadow — L70", model: "Arina Kuznetsova", img: "assets/img30.webp" },
  { id: 31, title: "Echo — B14", model: "Sasha Romanova", img: "assets/img31.webp" },
  { id: 32, title: "Opal — F88", model: "Ella Volkova", img: "assets/img32.webp" },

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
        <h2 className="heading__title">Manika Jorge</h2>
        <span className="heading__meta">
        effect 02: Adjusts mover count, rotation, timing, and animation feel.
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
