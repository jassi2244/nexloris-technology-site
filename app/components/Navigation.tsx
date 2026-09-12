"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  ["#services", "Services"],
  ["#work", "Work"],
  ["#about", "About"],
  ["#process", "Process"],
  ["#contact", "Start a Project"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 981px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="nav-wrap" ref={header}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Nexloris Technology home" onClick={() => setOpen(false)}>
          <Image src="/nexloris-logo.png" alt="" width={48} height={48} sizes="48px" priority />
          <span><strong>NEXLORIS</strong><small>TECHNOLOGY</small></span>
        </a>
        <div className="nav-links">
          {links.slice(0, 4).map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="button button-small desktop-project-link" href="#contact">Start a Project</a>
        <button className="menu-toggle" type="button" ref={toggle} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
          {open ? "Close" : "Menu"}
        </button>
        <div className="mobile-navigation" id="mobile-navigation" hidden={!open}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => {
              setOpen(false);
              document.getElementById(href.slice(1))?.focus({ preventScroll: true });
            }}>{label}<span aria-hidden="true">↗</span></a>
          ))}
        </div>
      </nav>
    </header>
  );
}
