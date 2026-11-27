"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import "./palace-header.css";
import "./wordmark.css";
import { BRAND, CALL_HREF, CONTACT, NAV, PHONE_LABEL, REGISTER_HREF, href, slugOf, type NavItem, type NavLink } from "./data";

/** Mục menu sáng khi trang hiện tại là chính nó hoặc một trang con (không tính link #neo) */
function isActive(item: NavItem, active: string): boolean {
  const own = (l: NavLink) => !l.href.includes("#") && slugOf(l.href) === active;
  return own(item) || (item.children ?? []).some(own);
}

const MOBILE_MAX = 1100;
const NBSP = String.fromCharCode(160);

/**
 * Chữ "C" của NGỌC: giữ nguyên chữ C của font logo (Playfair Display),
 * gắn một chiếc máy bay nhỏ ở đầu trên của chữ như đang cất cánh khỏi nét chữ.
 */
function PlaneC() {
  return (
    <span className="wm-c">
      C
      <svg className="wm-plane" viewBox="-8 -7 16 14" aria-hidden="true">
        <path d="M7 0 L2.6 -1.1 L-.6 -6 L-2.5 -6 L-.9 -1.2 L-4.4 -1 L-6 -3 L-7.3 -3 L-6.2 0 L-7.3 3 L-6 3 L-4.4 1 L-.9 1.2 L-2.5 6 L-.6 6 L2.6 1.1 Z" />
      </svg>
    </span>
  );
}

function NavAnchor({ link, className }: { link: NavLink; className?: string }) {
  const cls = [link.className, className].filter(Boolean).join(" ") || undefined;
  return (
    <a
      href={href(link.href)}
      className={cls}
      id={link.id}
      {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {link.label}
    </a>
  );
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span className="addr">✈ {BRAND.slogan}</span>
        <span>
          ☎ <a href={CALL_HREF}>{PHONE_LABEL}</a> · {CONTACT.hours}
        </span>
      </div>
    </div>
  );
}

export function SiteHeader({ active = "" }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDd, setOpenDd] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Máy tính: thanh menu cuộn ngang → đặt menu xổ xuống ở vị trí cố định theo mục cha
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const place = (dd: Element) => {
      const a = dd.querySelector<HTMLElement>(":scope>a");
      const m = dd.querySelector<HTMLElement>(".dd-menu");
      if (!a || !m || window.innerWidth <= MOBILE_MAX) return;
      const r = a.getBoundingClientRect();
      m.style.position = "fixed";
      m.style.top = `${r.bottom + 2}px`;
      const w = m.offsetWidth || 240;
      m.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - w - 8))}px`;
    };
    const handler = (e: Event) => {
      const dd = (e.target as Element).closest?.("nav.main .dd");
      if (dd) place(dd);
    };
    nav.addEventListener("mouseover", handler);
    nav.addEventListener("focusin", handler);
    return () => {
      nav.removeEventListener("mouseover", handler);
      nav.removeEventListener("focusin", handler);
    };
  }, []);

  // Điện thoại: chạm lần đầu mở danh sách con, chạm lần nữa mới vào trang
  const onGroupClick = (i: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > MOBILE_MAX) return;
    if (openDd !== i) {
      e.preventDefault();
      setOpenDd(i);
    }
  };

  return (
    <header className="site">
      <div className="wrap">
        <a className="brand" href={href("index.html")} aria-label={`${BRAND.headerName} – ${BRAND.zh} – về trang chủ`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND.logoMark} alt={`Logo ${BRAND.fullName}`} width={48} height={48} />
          {/* Tiếng Việt 2 dòng ⇄ chữ Hán 1 dòng, đổi qua lại bằng hiệu ứng lật chữ */}
          <span className="wordmark" aria-hidden="true">
            <span className="wm-vi-block">
              {BRAND.logoLines.map((line, n) => (
                <span className={`wm-line l${n + 1}`} key={line}>
                  <span className="wm-vi">
                    {Array.from(line).map((ch, i) => (
                      <span key={i} style={{ "--i": i + n * 4 } as CSSProperties}>
                        {ch === " " ? NBSP : n === 1 && ch === "C" && line.indexOf("C") === i ? <PlaneC /> : ch}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </span>
            <span className="wm-zh">
              {Array.from(BRAND.zh).map((ch, i) => (
                <span key={i} style={{ "--i": i * 2 } as CSSProperties}>
                  {ch}
                </span>
              ))}
            </span>
          </span>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mainnav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>
        <nav className={`main${menuOpen ? " open" : ""}`} id="mainnav" ref={navRef}>
          {NAV.map((item, i) =>
            item.children ? (
              <div className={`dd${openDd === i ? " open" : ""}`} key={item.label}>
                <a href={href(item.href)} className={isActive(item, active) ? "on" : undefined} onClick={onGroupClick(i)}>
                  {item.label}{" "}
                  <span className="caret" aria-hidden="true">
                    ▾
                  </span>
                </a>
                <div className="dd-menu">
                  {item.children.map((c) => (
                    <NavAnchor link={c} key={c.href + c.label} />
                  ))}
                </div>
              </div>
            ) : (
              <NavAnchor link={item} key={item.label} className={isActive(item, active) ? "on" : undefined} />
            ),
          )}
        </nav>
        <a className="btn gold sm cta" href={href(REGISTER_HREF)}>
          Đăng ký học
        </a>
      </div>
    </header>
  );
}
