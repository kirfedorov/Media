import React from "react";
import { useMedia } from "./hooks/useMedia";

export default function App() {
  const current = useMedia(15000); // 20 сек на медиафайл

  return (
    <div className="app">
      {/* ФОН */}
      {current?.type === "image" && (
        <div
          className="background"
          style={{
            backgroundImage: `url(${current.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {current?.type === "video" && (
        <video
          className="background"
          src={current.src}
          autoPlay
          muted
          loop
        />
      )}

      {/* ЗАТЕМНЕНИЕ */}
      <div className="" />

      {/* КАСТОМНАЯ ШАПКА */}
      <div className="titlebar">
        <div className="title">Аполлонния Мед 2025</div>
        <div className="window-buttons">
          {/* <button onClick={() => window.windowControls.minimize()}>−</button> */}
          {/* <button onClick={() => window.windowControls.toggleMaximize()}>▢</button> */}
          <button className="btn-menu" onClick={() => window.windowControls.close()}>Menu</button>
          <button className="btn" onClick={() => window.windowControls.close()}>x</button>
        </div>
      </div>

      {/* Контент */}
      <div className="content">
        {/* <h1>Фон может быть картинкой или видео 🎬</h1> */}
        {/* // <p>Положите JPG/PNG/MP4/WEBM в папку <code>src/assets/media</code>.</p> */}
        {/* <p>Можно поставить календарь или время.</p> */}
      </div>
    </div>
  );
}
