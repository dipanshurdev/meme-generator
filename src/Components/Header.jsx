import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <img
        src="https://scrimba.com/blobs/sha1:ee3d2e1537021c55cfbfc3e54d0a9dec883a2f77.png"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Generate!</h4>
    </header>
  );
};
