# Sinh file src/components/sites/ngoc-lam-anh/cn-ornament.css:
# họa tiết mây như ý (ruyi), sóng nước 海水纹 màu ngọc lam, viền vàng và hoa văn chữ hồi 回纹 – vẽ bằng SVG nhúng.
# Chạy lại sau khi sửa: python scripts/gen-cn-ornament.py
import pathlib
import urllib.parse

OUT = pathlib.Path(__file__).resolve().parent.parent / "src/components/sites/ngoc-lam-anh/cn-ornament.css"


def uri(svg: str) -> str:
    svg = " ".join(svg.split())
    return 'url("data:image/svg+xml,' + urllib.parse.quote(svg, safe=" =:/,.-()'") + '")'


GOLD = ("<linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#fff1c4'/>"
        "<stop offset='.45' stop-color='#e2b04a'/><stop offset='1' stop-color='#a0701a'/></linearGradient>")
GOLDH = ("<linearGradient id='gh' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-color='#b98424'/>"
         "<stop offset='.5' stop-color='#ffe9a8'/><stop offset='1' stop-color='#b98424'/></linearGradient>")
TEAL, TEAL_L, TEAL_D = "#17766f", "#62c3b4", "#0d4f4a"
BROWN = "#7a4f0c"

# Mép trên hình mây như ý cho đầu thẻ khóa học (viewBox 400x46, kéo giãn ngang theo bề rộng thẻ)
EDGE = ("M0,46 L0,40 Q0,30 12,30 C24,30 30,24 34,18 C40,10 54,8 62,14 C70,20 82,20 90,12 "
        "C104,0 124,10 134,10 L160,10 C172,10 182,2 200,2 C218,2 228,10 240,10 L266,10 "
        "C276,10 296,0 310,12 C318,20 330,20 338,14 C346,8 360,10 366,18 C370,24 376,30 388,30 "
        "Q400,30 400,40 L400,46")
edge_mask = (f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 46' preserveAspectRatio='none'>"
             f"<path d='{EDGE} Z' fill='#000'/></svg>")
edge_line = (f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 46' preserveAspectRatio='none'><defs>{GOLDH}</defs>"
             f"<path d='{EDGE}' fill='none' stroke='{BROWN}' stroke-width='5' vector-effect='non-scaling-stroke' stroke-linejoin='round' transform='translate(0,1.2)'/>"
             f"<path d='{EDGE}' fill='none' stroke='url(#gh)' stroke-width='3.5' vector-effect='non-scaling-stroke' stroke-linejoin='round' transform='translate(0,1.2)'/></svg>")


def scale(cx: float, cy: float) -> str:
    """Một vảy sóng: nền ngọc lam + 4 vòng đồng tâm."""
    rings = "".join(f"<circle cx='{cx}' cy='{cy}' r='{r}'/>" for r in (17, 12.5, 8, 3.5))
    return (f"<circle cx='{cx}' cy='{cy}' r='20' fill='{TEAL}' stroke='{TEAL_D}' stroke-width='1.2'/>"
            f"<g fill='none' stroke='{TEAL_L}' stroke-width='1.3'>{rings}</g>")


SCALES = scale(0, 10) + scale(40, 10) + scale(20, 20)
waves = (f"<svg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 40 20'>"
         f"<rect width='40' height='20' fill='{TEAL}'/>{SCALES}</svg>")

# Đám mây như ý nhỏ màu vàng
cloud = (f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'><defs>{GOLD}</defs>"
         "<path d='M8,34 C2,34 2,24 9,23 C8,14 20,11 25,18 C27,8 41,6 45,15 C49,4 71,4 75,15 C79,6 93,8 95,18 "
         f"C100,11 112,14 111,23 C118,24 118,34 112,34 Z' fill='url(#g)' stroke='{BROWN}' stroke-width='1.6'/>"
         "<g fill='none' stroke='#8a5c12' stroke-width='1.6' stroke-linecap='round'>"
         "<path d='M44,26 c0,-7 9,-9 12,-3 c2,4 -3,7 -5,4'/><path d='M76,26 c0,-7 -9,-9 -12,-3 c-2,4 3,7 5,4'/>"
         "<path d='M20,28 c1,-4 6,-5 8,-1'/><path d='M100,28 c-1,-4 -6,-5 -8,-1'/></g></svg>")

# Khung ảnh giáo viên kiểu cuộn chiếu thư / bảng vàng: viền gấm đỏ hoa văn vàng, nền lụa vàng, trục gỗ sơn son 2 đầu
# Gấm đỏ (ô lặp 16x16): nền đỏ son, chữ hồi + chấm vàng
brocade = ("<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>"
           "<rect width='16' height='16' fill='#8a0e14'/>"
           "<path d='M2,13 H12 V3 H5 V9 H9 V6' fill='none' stroke='#e9c063' stroke-width='1.3' stroke-linecap='square'/>"
           "<circle cx='14.5' cy='14.5' r='.9' fill='#f7dc94'/></svg>")
# Lụa vàng (ô lặp 64x40): mây cuộn mờ
silk = ("<svg xmlns='http://www.w3.org/2000/svg' width='64' height='40' viewBox='0 0 64 40'>"
        "<g fill='none' stroke='#b8891f' stroke-opacity='.16' stroke-width='1.2' stroke-linecap='round'>"
        "<path d='M6,16 c0,-6 8,-7 10,-2 c2,-6 11,-5 11,1 c4,-1 6,4 2,6 H8 c-4,0 -5,-5 -2,-5'/>"
        "<path d='M38,36 c0,-6 8,-7 10,-2 c2,-6 11,-5 11,1 c4,-1 6,4 2,6 H40 c-4,0 -5,-5 -2,-5'/></g></svg>")

# Hoa văn chữ hồi (回纹) làm đường viền ngang
meander = ("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='12' viewBox='0 0 24 12'>"
           "<path d='M0,11 H10 V3 H4 V7 H7' fill='none' stroke='#e2b04a' stroke-width='1.6'/>"
           "<path d='M12,11 H22 V3 H16 V7 H19' fill='none' stroke='#e2b04a' stroke-width='1.6'/></svg>")

CSS = f"""/* Họa tiết Trung Hoa cho thẻ khóa học và thẻ giáo viên – FILE SINH TỰ ĐỘNG, sửa scripts/gen-cn-ornament.py rồi chạy lại.
   Mây như ý (đỉnh thẻ), sóng nước 海水纹 màu ngọc lam, viền vàng, hoa văn chữ hồi 回纹 (thẻ khóa học);
   cuộn chiếu thư / bảng vàng: lụa vàng, viền gấm đỏ, trục gỗ, dấu son (ảnh giáo viên). */
:root{{
  --cn-edge-mask:{uri(edge_mask)};
  --cn-edge-line:{uri(edge_line)};
  --cn-waves:{uri(waves)};
  --cn-cloud:{uri(cloud)};
  --cn-brocade:{uri(brocade)};
  --cn-silk:{uri(silk)};
  --cn-meander:{uri(meander)};
}}

/* ===== Thẻ khóa học: đỉnh mây như ý, viền vàng, dải sóng nước ở chân thẻ ===== */
.course{{background:transparent;border:0!important;border-radius:0 0 22px 22px;overflow:visible;box-shadow:none;filter:drop-shadow(0 14px 22px rgba(92,7,11,.2))}}
.course:hover{{box-shadow:none;filter:drop-shadow(0 22px 30px rgba(92,7,11,.3))}}
.course .cv{{min-height:200px;padding:60px 22px 18px;
  -webkit-mask:var(--cn-edge-mask) 0 0/100% 46px no-repeat,linear-gradient(#000 0 0) 0 45px/100% 100% no-repeat;
          mask:var(--cn-edge-mask) 0 0/100% 46px no-repeat,linear-gradient(#000 0 0) 0 45px/100% 100% no-repeat;
  box-shadow:inset 3px 0 0 var(--gold),inset -3px 0 0 var(--gold)}}
.course .cv::before{{content:"";position:absolute;inset:0 0 auto;height:46px;background:var(--cn-edge-line) 0 0/100% 100% no-repeat;z-index:2;pointer-events:none}}
.course .cv::after{{content:"";position:absolute;left:0;right:0;bottom:0;height:12px;background:var(--cn-meander) 0 0/24px 12px repeat-x,var(--red-deep);border-top:1px solid var(--gold)}}
.course .cv .tag{{top:52px}}
.course .cv h3{{margin-top:30px}}
.course .cv .dur{{margin-bottom:12px}}
.course .cv .big{{top:6px}}
.course .bd{{position:relative;background:#fffdf8;border:3px solid var(--gold);border-top:0;border-radius:0 0 22px 22px;overflow:hidden;padding-bottom:62px;
  box-shadow:inset 0 0 0 5px #fffdf8,inset 0 0 0 6px rgba(226,176,74,.55)}}
.course .bd::after{{content:"";position:absolute;left:0;right:0;bottom:0;height:34px;background:var(--cn-waves) 0 0/40px 20px repeat;border-top:3px solid var(--gold)}}
.course .bd::before{{content:"";position:absolute;left:50%;bottom:22px;width:84px;height:28px;translate:-50% 0;background:var(--cn-cloud) center/contain no-repeat;z-index:1}}
.course dl i{{border-radius:50%;background:radial-gradient(circle at 35% 30%,#fffaf0,#f8e6bf);box-shadow:inset 0 0 0 1.5px var(--gold)}}
.course-detail{{background:#fff7e8;border:1px solid rgba(226,176,74,.55)}}
.course-detail b{{display:flex;align-items:center;gap:8px}}
.course-detail b::before{{content:"";flex:none;width:18px;height:9px;background:var(--cn-meander) 0 0/18px 9px no-repeat;filter:brightness(.7)}}
section.red .course .bd{{border-color:var(--gold-lt)}}

/* ===== Thẻ giáo viên: ảnh trên cuộn chiếu thư – lụa vàng, viền gấm đỏ, trục gỗ sơn son đầu bịt vàng, dấu son ===== */
.teacher{{background:linear-gradient(180deg,#fffaf0,#fdf0d6);border:2px solid var(--gold)!important;padding:22px 18px 0}}
.teacher .ph,.lead-t .ph{{position:relative;aspect-ratio:auto;overflow:visible;padding:12px;border:7px solid transparent;
  background:var(--cn-silk) 0 0/64px 40px,linear-gradient(160deg,#fff4cf,#f3d98f 55%,#ecc96f) padding-box,var(--cn-brocade) 0 0/16px 16px border-box;
  box-shadow:0 0 0 1px #c9972f,0 10px 22px rgba(60,0,4,.22)}}
.teacher .ph img,.lead-t .ph img{{display:block;width:100%;height:auto;aspect-ratio:4/5;object-fit:cover;border:0!important;border-radius:2px!important;
  background:radial-gradient(circle at 50% 35%,#fffdf6,#f3dcae 75%);box-shadow:0 0 0 2px #b8891f,0 0 0 4px #fff4cf,0 0 0 5px #b8891f!important}}
/* Trục cuộn trên và dưới: thân gỗ sơn son, 2 đầu bịt vàng nhô ra ngoài */
.teacher .ph::before,.teacher .ph::after,.lead-t .ph::before,.lead-t .ph::after{{content:"";position:absolute;left:-17px;right:-17px;height:13px;border-radius:7px;pointer-events:none;
  background:radial-gradient(circle at 50% 35%,#fff3c9,#e2b04a 50%,#7a4f0c) 0 0/13px 13px no-repeat,radial-gradient(circle at 50% 35%,#fff3c9,#e2b04a 50%,#7a4f0c) 100% 0/13px 13px no-repeat,
    linear-gradient(180deg,#c0392b,#7e0a10 55%,#4a0507) 50% 0/calc(100% - 22px) 100% no-repeat}}
.teacher .ph::before,.lead-t .ph::before{{top:-17px}}
.teacher .ph::after,.lead-t .ph::after{{bottom:-17px}}
/* Dấu son đỏ góc ảnh */
.seal{{position:absolute;right:16px;bottom:18px;z-index:1;width:34px;height:34px;display:grid;place-items:center;rotate:-6deg;
  background:#b5121b;color:#fff3df;border-radius:4px;box-shadow:inset 0 0 0 2px #b5121b,inset 0 0 0 3px #fff3df;
  font:400 13px/1 var(--brush);writing-mode:vertical-rl;letter-spacing:1px;opacity:.92}}
.lead-t .seal{{width:44px;height:44px;font-size:17px;right:22px;bottom:26px}}
.teacher:hover .ph img{{transform:none}}
.teacher .plate{{background:transparent!important;padding-top:22px!important}}
.lead-t .ph .ribbon{{z-index:2;bottom:-34px}}
@media (max-width:680px){{.teacher{{padding:18px 13px 0}}.teacher .ph{{padding:8px;border-width:5px}}.teacher .ph::before,.teacher .ph::after{{left:-12px;right:-12px}}.seal{{width:28px;height:28px;font-size:11px;right:12px;bottom:14px}}}}
@media (max-width:820px){{.lead-t .ph img{{aspect-ratio:4/5}}}}
"""

OUT.write_text(CSS, encoding="utf-8", newline="\n")
print(f"Đã ghi {OUT} ({len(CSS)} ký tự)")
