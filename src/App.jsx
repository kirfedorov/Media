import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
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
        <div className="title">Аполлонния Мед 2025 </div>


        <div className="window-buttons">
          {/* Кнопка: Открыть папку */}
          <button className="btn" onClick={() => window.windowControls.open()}>
            <i class="bi bi-folder-plus"></i>
          </button>
          {/* <button className="btn" onClick={() => window.windowControls.close()}>
            <i class="bi bi-x-lg"></i>
          </button> */}
        </div>
      </div>

      <div className="content">
        <p></p>
      </div>

      <div className="footerbar">
        <div className="footer"><a>www.jokeberry.ru </a> </div>


        <div className="window-buttons">
          {/* Кнопка: Открыть папку */}
          {/* <button className="btn" onClick={() => window.windowControls.open()}>
            <i class="bi bi-folder-plus"></i>
          </button> */}
          {/* <button className="btn" onClick={() => window.windowControls.close()}>
            <i class="bi bi-x-lg"></i>
          </button> */}
        </div>
      </div>

    </div>
  );
}
