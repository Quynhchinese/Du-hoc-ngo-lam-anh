# Sinh src/components/sites/ngoc-lam-anh/palace-header.css:
# header lấy cảm hứng từ mái Tử Cấm Thành – mái ngói lưu ly vàng (琉璃瓦) có đầu ngói tròn (瓦当),
# 2 góc mái cong vút, dải xà sơn màu xanh lam – xanh lục (彩画) và tường son đỏ.
# Chạy lại sau khi sửa: python scripts/gen-palace-header.py
import pathlib
import urllib.parse

OUT = pathlib.Path(__file__).resolve().parent.parent / "src/components/sites/ngoc-lam-anh/palace-header.css"


def uri(svg: str) -> str:
    svg = " ".join(svg.split())
    return 'url("data:image/svg+xml,' + urllib.parse.quote(svg, safe=" =:/,.-()'") + '")'


DARK = "#6b4205"

# Ngói ống lưu ly vàng: 1 ô = 1 hàng ngói ống (thân tròn bóng) + đầu ngói tròn ở mép dưới
tile = (
    "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='18' viewBox='0 0 14 18'><defs>"
    "<linearGradient id='b' x1='0' x2='1'><stop offset='0' stop-color='#a8680a'/><stop offset='.35' stop-color='#ffe07a'/>"
    "<stop offset='.6' stop-color='#f3b52a'/><stop offset='1' stop-color='#9a5f08'/></linearGradient>"
    "<radialGradient id='d' cx='.4' cy='.35' r='.7'><stop offset='0' stop-color='#fff0b0'/><stop offset='.6' stop-color='#e9a91f'/>"
    "<stop offset='1' stop-color='#9a5f08'/></radialGradient></defs>"
    "<rect width='14' height='18' fill='#7a4a06'/>"
    "<rect x='1' width='12' height='13' rx='5' fill='url(#b)'/>"
    f"<circle cx='7' cy='12.5' r='4.6' fill='url(#d)' stroke='{DARK}' stroke-width='.9'/>"
    f"<circle cx='7' cy='12.5' r='2.2' fill='none' stroke='{DARK}' stroke-width='.7' opacity='.7'/></svg>"
)

# Góc mái cong vút (trái); bên phải lật ngang
EAVE = ("M80,12 L40,12 C26,12 14,9 7,3 C4,0 0,1 1,5 C4,14 15,24 34,30 L80,30 Z")
eave_body = (
    "<defs><linearGradient id='y' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffe48a'/>"
    "<stop offset='.5' stop-color='#f0b12a'/><stop offset='1' stop-color='#a36508'/></linearGradient></defs>"
    f"<path d='{EAVE}' fill='url(#y)' stroke='{DARK}' stroke-width='1.3'/>"
    f"<path d='M5,6 c-3,-3 -1,-6 2,-5 c3,1 2,5 -1,5' fill='none' stroke='{DARK}' stroke-width='1.2'/>"
    f"<path d='M12,14 C20,20 28,24 40,26' fill='none' stroke='{DARK}' stroke-width='.9' opacity='.6'/>"
)
eave_l = f"<svg xmlns='http://www.w3.org/2000/svg' width='80' height='30' viewBox='0 0 80 30'>{eave_body}</svg>"
eave_r = (f"<svg xmlns='http://www.w3.org/2000/svg' width='80' height='30' viewBox='0 0 80 30'>"
          f"<g transform='translate(80,0) scale(-1,1)'>{eave_body}</g></svg>")

# Dải xà sơn (彩画): khối xanh lam / xanh lục xen kẽ, viền và hoa văn vàng
beam = (
    "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='10' viewBox='0 0 48 10'>"
    "<rect width='24' height='10' fill='#1d5a86'/><rect x='24' width='24' height='10' fill='#1f7a5c'/>"
    "<path d='M0,.6 H48 M0,9.4 H48' stroke='#e9c063' stroke-width='1.2'/>"
    "<path d='M12,2.4 L15,5 L12,7.6 L9,5 Z M36,2.4 L39,5 L36,7.6 L33,5 Z' fill='#f7dc94'/>"
    "<path d='M24,1 V9' stroke='#0c2f48' stroke-width='1'/></svg>"
)

CSS = f"""/* Header kiểu mái Tử Cấm Thành – FILE SINH TỰ ĐỘNG, sửa scripts/gen-palace-header.py rồi chạy lại.
   Mái ngói lưu ly vàng 琉璃瓦 + đầu ngói 瓦当, góc mái cong vút, dải xà sơn 彩画 xanh lam – xanh lục, tường son. */
header.site{{
  --roof-tile:{uri(tile)};
  --roof-eave-l:{uri(eave_l)};
  --roof-eave-r:{uri(eave_r)};
  --roof-beam:{uri(beam)};
  padding-top:40px;
  background:linear-gradient(180deg,#9b1a14,#7e0a10 60%,#6a080c);
  border-bottom:3px solid var(--gold);
  box-shadow:0 1px 0 #5c070b,0 8px 18px rgba(40,0,3,.28);
}}
/* Mái ngói: đường nóc sẫm + hàng ngói ống + 2 góc mái cong */
header.site::before{{content:"";position:absolute;left:0;right:0;top:0;height:30px;pointer-events:none;z-index:1;
  background:
    var(--roof-eave-l) left top/80px 30px no-repeat,
    var(--roof-eave-r) right top/80px 30px no-repeat,
    linear-gradient(180deg,transparent 9px,#8a5508 9px,#c88a1c 11px,#6b4205 13px,transparent 13px) 0 0/100% 100% no-repeat,
    var(--roof-tile) 0 12px/14px 18px repeat-x}}
/* Xà sơn dưới mái */
header.site::after{{content:"";position:absolute;left:0;right:0;top:30px;height:10px;pointer-events:none;
  background:var(--roof-beam) 0 0/48px 10px repeat-x;box-shadow:0 2px 4px rgba(40,0,3,.35)}}
header.site .wrap{{position:relative}}
@media (max-width:640px){{
  header.site{{padding-top:32px}}
  header.site::before{{height:24px;background:
    var(--roof-eave-l) left top/64px 24px no-repeat,var(--roof-eave-r) right top/64px 24px no-repeat,
    linear-gradient(180deg,transparent 7px,#8a5508 7px,#c88a1c 9px,#6b4205 10px,transparent 10px) 0 0/100% 100% no-repeat,
    var(--roof-tile) 0 9px/12px 15px repeat-x}}
  header.site::after{{top:24px;height:8px;background-size:38px 8px}}
}}
"""

OUT.write_text(CSS, encoding="utf-8", newline="\n")
print(f"Đã ghi {OUT} ({len(CSS)} ký tự)")
