import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row fixedFooter ">
      <div className="col-3">
        <Image
          src="/images/home.svg"
          width="30vw"
          height="30vh"
          alt="HomeMenuIcon"
        />
      </div>
      <div className="col-3">
        <Image
          src="/images/plus-square.svg"
          width="30vw"
          height="30vh"
          alt="HomeMenuIcon"
        />
      </div>
      <div className="col-3">
        <Image
          src="/images/message-circle.svg"
          width="30vw"
          height="30vh"
          alt="HomeMenuIcon"
        />
      </div>
      <div className="col-3">
        <Image
          src="/images/user.svg"
          width="30vw"
          height="30vh"
          alt="HomeMenuIcon"
        />
      </div>
    </footer>
  );
}
