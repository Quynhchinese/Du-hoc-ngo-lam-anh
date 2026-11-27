import { CourseCard } from "./CourseCard";
import { PageHead, PageShell } from "./PageShell";
import { CALL_HREF, COURSE_GROUPS, GENERAL_INFO, JUMP_LINKS, PAGE_HEAD, PHONE_LABEL, href } from "./data";

// Du học Trung Quốc có khối riêng ở trang chủ (#du-hoc), không hiện trong danh sách khóa học.
const STUDY_GROUPS = COURSE_GROUPS.filter((g) => g.id !== "du-hoc");

export function CoursesPage() {
  return (
    <PageShell active="khoa-hoc">
        <PageHead zh={PAGE_HEAD.zh} title={PAGE_HEAD.title} intro={PAGE_HEAD.intro} />
        <div className="jump">
          <div className="wrap">
            {JUMP_LINKS.map((j) => (
              <a href={j.href} key={j.href}>
                {j.label}
              </a>
            ))}
          </div>
        </div>
        {STUDY_GROUPS.map((g) => (
          <section className={`block ${g.tone}`} id={g.id} key={g.id}>
            <div className="wrap">
              <div className="head">
                <div className="zh">{g.zh}</div>
                <h2>{g.title}</h2>
                <p>{g.intro}</p>
              </div>
              <div className="courses">
                {g.courses.map((c) => (
                  <CourseCard course={c} key={c.id} />
                ))}
              </div>
            </div>
          </section>
        ))}
        <section className="block light" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="card">
              <b>Thông tin chung</b>
              <p className="muted" style={{ marginTop: 6 }}>
                {GENERAL_INFO} Tư vấn qua điện thoại / Zalo <a href={CALL_HREF}>{PHONE_LABEL}</a>. Thông tin du học Trung Quốc:{" "}
                <a href={href("index.html#du-hoc")}>xem tại trang chủ</a>.
              </p>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
