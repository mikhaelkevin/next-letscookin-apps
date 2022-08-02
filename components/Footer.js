import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixedFooter">
      <div className="row">
        <div className="col-3">
          <Link href="/">
            <a>
              <div className="btn buttonStyle">
                <Image
                  src="/images/home.svg"
                  width="30vw"
                  height="30vh"
                  alt="HomeMenuIcon"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="col-3">
          <div className="btn buttonStyle">
            <Image
              src="/images/plus-square.svg"
              width="30vw"
              height="30vh"
              alt="AddRecipeIcon"
            />
          </div>
        </div>
        <div className="col-3">
          <div className="btn buttonStyle">
            <Image
              src="/images/message-circle.svg"
              width="30vw"
              height="30vh"
              alt="ChatMenuIcon"
            />
          </div>
        </div>
        <div className="col-3">
          <div className="btn buttonStyle">
            <Image
              src="/images/user.svg"
              width="30vw"
              height="30vh"
              alt="UserMenuIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}