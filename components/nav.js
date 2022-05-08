import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";

const Nav = () => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solidNavBarBackground, setSolidNavbarBackgroundColor] =
    useState(false);

  const changeNavbarBackground = () => {
    if (router.pathname !== "/") {
      return;
    }
    if (window.scrollY >= window.innerHeight - 80) {
      setSolidNavbarBackgroundColor(true);
    } else {
      setSolidNavbarBackgroundColor(false);
    }
  };

  return (
    <nav className={`nav with-background`}>
      <div className={`nav-toggle-container ${isOpen ? "is-open" : ""}`}>
        <button className="btn btn-primary">Menu</button>
      </div>
      <div className={`nav-content container ${opened ? "opened" : ""}`}>
        <div className="nav-left">
          <div className="brand-logo">
            <Link href={"/"}>
              <a aria-label={"Dipankar"}>
                <Logo />
              </a>
            </Link>
            <h1 className="brand-name">Dylan'S Cafe Bar & Restaurant</h1>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-list">
            <Link href={"/"}>
              <a
                className={`nav-item ${
                  router.pathname === "/" ? "active" : ""
                }`}
              >
                <span className="nav-link">Home</span>
              </a>
            </Link>
            <Link href={"/about"}>
              <a
                className={`nav-item ${
                  router.pathname === "/about" ? "active" : ""
                }`}
              >
                <span className="nav-link">About</span>
              </a>
            </Link>
            <Link href={"/menu"}>
              <a
                className={`nav-item ${
                  router.pathname === "/menu" ? "active" : ""
                }`}
              >
                <span className="nav-link">Menu</span>
              </a>
            </Link>
            <Link href={"/gallery"}>
              <a
                className={`nav-item ${
                  router.pathname === "/gallery" ? "active" : ""
                }`}
              >
                <span className="nav-link">Gallery</span>
              </a>
            </Link>
            <Link href={"/contact"}>
              <a
                className={`nav-item ${
                  router.pathname === "/contact" ? "active" : ""
                }`}
              >
                <span className="nav-link">Contact</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={`mobile-nav ${isOpen && "open"}`}>
        <div className="nav-list">
          <Link href={"/"}>
            <a
              className={`nav-item ${router.pathname === "/" ? "active" : ""}`}
            >
              <span className="nav-link">Home</span>
            </a>
          </Link>
          <Link href={"/about"}>
            <a
              className={`nav-item ${
                router.pathname === "/about" ? "active" : ""
              }`}
            >
              <span className="nav-link">About</span>
            </a>
          </Link>
          <Link href={"/menu"}>
            <a
              className={`nav-item ${
                router.pathname === "/menu" ? "active" : ""
              }`}
            >
              <span className="nav-link">Menu</span>
            </a>
          </Link>
          <Link href={"/gallery"}>
            <a
              className={`nav-item ${
                router.pathname === "/gallery" ? "active" : ""
              }`}
            >
              <span className="nav-link">Gallery</span>
            </a>
          </Link>
          <Link href={"/contact"}>
            <a
              className={`nav-item ${
                router.pathname === "/contact" ? "active" : ""
              }`}
            >
              <span className="nav-link">Contact</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
