import React from "react";
import { useMedia } from "./hooks/useMedia";

export default function App() {


  const current = useMedia(20000); // 20 сек на медиафайл

  return (
    <div className="app">
      {/* ФОН ЕСЛТ НАДО */}
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

      {/* ЗАТЕМНЕНИЕ НАФИГ НЕ НАДО */}
      <div className="" />

      {/*  ШАПКА */}
      <div className="titlebar">
        <div className="title">Аполлонния Мед 2025</div>

        <div className="window-buttons">
          {/* Кнопка: Открыть папку */}
          <button className="btn" onClick={() => window.windowControls.open()}>+</button>
          {/* <button className="btn" onClick={() => window.windowControls.close()}>x</button> */}
        </div>
      </div>

      <div className="content">

      </div>

    </div>
  );
}
