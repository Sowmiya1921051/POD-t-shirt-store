import React from "react";

const Gallery = () => {
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

    return (
        <>
            <div className="heading">
                <h2 className="heading__title">mainka jorge</h2>
                <span className="heading__meta">
                    effect 02: Adjusts mover count, rotation, timing, and animation feel
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
                            <p>Type: {model}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Static Preview Panel */}
            <figure className="panel" role="img" aria-labelledby="caption">
                <div className="panel__img" style={{ backgroundImage: "url(assets/bakery1.webp)" }}></div>
                <figcaption className="panel__content" id="caption">
                    <h3>Choco Truffle</h3>
                    <p>
                        Rich and indulgent layers of chocolate sponge and ganache, crafted with precision and passion.
                    </p>
                    <button type="button" className="panel__close" aria-label="Close preview">Close</button>
                </figcaption>
            </figure>
        </>
    );
};

export default Gallery;
