import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const isLogin = router?.pathname?.includes("/login");
  const isRegister = router?.pathname?.includes("/register");
  const isFooterBlacklist = !isLogin && !isRegister;
  return (
    <>
      {isFooterBlacklist && !isRegister && (
        <div className="fixedFooter">
          <div className="row">
            <div className="col-3">
              <Link href="/">
                <a>
                  <button type="button" className="btn buttonStyle">
                    <Image
                      src="/images/home.svg"
                      width="30vw"
                      height="30vh"
                      alt="HomeMenuIcon"
                    />
                  </button>
                </a>
              </Link>
            </div>
            <div className="col-3">
              <Link href="/recipe/add">
                <a>
                  <button type="button" className="btn buttonStyle">
                    <Image
                      src="/images/plus-square.svg"
                      width="30vw"
                      height="30vh"
                      alt="AddRecipeIcon"
                    />
                  </button>
                </a>
              </Link>
            </div>
            <div className="col-3">
              <button type="button" className="btn buttonStyle" disabled>
                <Image
                  src="/images/message-circle.svg"
                  width="30vw"
                  height="30vh"
                  alt="ChatMenuIcon"
                />
              </button>
            </div>
            <div className="col-3">
              <Link href="/profile">
                <a>
                  <button type="button" className="btn buttonStyle">
                    <Image
                      src="/images/user.svg"
                      width="30vw"
                      height="30vh"
                      alt="UserMenuIcon"
                    />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
