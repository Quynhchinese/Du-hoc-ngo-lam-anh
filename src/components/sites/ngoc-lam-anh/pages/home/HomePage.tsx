import { PageShell } from "../../PageShell";
import { BRAND, CALL_HREF, COURSE_GROUPS, PHONE_LABEL, REGISTER_HREF, href, type Course } from "../../data";
import {
  COURSES_HEAD,
  COURSE_FEES,
  CTA,
  FEE_PLACEHOLDER,
  GALLERY,
  GALLERY_HEAD,
  HOME_COURSE_IDS,
  LEAD_TEACHER,
  ONLINE,
  PATH,
  STATS,
  TEACHERS,
  TEAM_HEAD,
  TESTIMONIALS,
  TESTIMONIALS_HEAD,
  WHYS,
} from "./data";
import { DuHocSection } from "./DuHocSection";
import { HeroFly } from "./HeroFly";
import { OfferBlock } from "./OfferBlock";
import { OFFER } from "./offer-data";
import { ScrollReveal } from "./ScrollReveal";
import "./home.css";
import "./hero-fly.css";

function Head({ zh, title, intro }: { zh: string; title: string; intro?: string }) {
  return (
    <div className="head">
      <div className="zh">{zh}</div>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function HomeCourse({ course }: { course: Course }) {
  const facts = [
    { icon: "👤", label: "Đối tượng", value: course.audience },
    { icon: "⏱", label: course.scheduleLabel ?? "Lịch học", value: course.schedule },
    { icon: "🎯", label: course.outcomeLabel ?? "Đầu ra", value: course.outcome },
  ].filter((f) => f.value);
  const fee = COURSE_FEES[course.id] ?? FEE_PLACEHOLDER;
  return (
    <article className="course" id={course.id}>
      <div className="cv">
        <span className="big" aria-hidden="true">
          {course.glyph}
        </span>
        <span className="tag">{course.tag}</span>
        <h3>{course.title}</h3>
        {(course.months || course.sessions) && (
          <div className="dur">
            {course.months && <b>{course.months}</b>}
            {course.sessions && <span>{course.sessions}</span>}
          </div>
        )}
      </div>
      <div className="bd">
        <p>{course.intro}</p>
        <dl>
          {facts.map((f) => (
            <div key={f.label}>
              <i aria-hidden="true">{f.icon}</i>
              <span>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </span>
            </div>
          ))}
          <div>
            <i aria-hidden="true">💰</i>
            <span>
              <dt>Học phí</dt>
              <dd>
                <b>{fee}</b>
              </dd>
            </span>
          </div>
        </dl>
        <a className="btn pri" href={href(`khoa-hoc.html#${course.id}`)}>
          Xem chi tiết khóa học
        </a>
      </div>
    </article>
  );
}

export function HomePage() {
  const study = COURSE_GROUPS.filter((g) => g.id !== "du-hoc");
  const all = study.flatMap((g) => g.courses);
  const courses = HOME_COURSE_IDS.map((id) => all.find((c) => c.id === id)).filter((c): c is Course => Boolean(c));
  const total = all.length;
  return (
    <PageShell active="">
      <div className="pg-home">
        <ScrollReveal />
        <HeroFly />

        <div className="stats">
          <div className="wrap">
            {STATS.map((s) => (
              <div className="s" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {OFFER.show && <OfferBlock />}

        <section className="block light">
          <div className="wrap">
            <Head zh={COURSES_HEAD.zh} title={COURSES_HEAD.title} intro={COURSES_HEAD.intro} />
            <div className="courses">
              {courses.map((c) => (
                <HomeCourse course={c} key={c.id} />
              ))}
            </div>
            <div className="center">
              <a className="btn" href={href("khoa-hoc.html")}>
                Xem tất cả {total} khóa học
              </a>
            </div>
          </div>
        </section>

        <section className="block red">
          <div className="wrap">
            <Head zh={PATH.zh} title={PATH.title} intro={PATH.intro} />
            <ol className="path p5">
              {PATH.steps.map((s, i) => (
                <li className={`step${i === PATH.steps.length - 1 ? " top" : ""}`} key={s.title}>
                  <span className="no">{i + 1}</span>
                  <div className="ic" aria-hidden="true">
                    {s.ic}
                  </div>
                  <b>{s.title}</b>
                  <span className="goal">{s.goal}</span>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="block light">
          <div className="wrap">
            <Head zh={WHYS.zh} title={WHYS.title} />
            <div className="whys">
              {WHYS.items.map((w) => (
                <div className="why" key={w.title}>
                  <div className="ic" aria-hidden="true">
                    {w.ic}
                  </div>
                  <b>{w.title}</b>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block red" id="doi-ngu">
          <div className="wrap">
            <Head zh={TEAM_HEAD.zh} title={TEAM_HEAD.title} intro={TEAM_HEAD.intro} />
            <div className="lead-t">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LEAD_TEACHER.photo} alt={`Giáo viên ${LEAD_TEACHER.name}`} loading="lazy" />
                <span className="seal" aria-hidden="true">
                  玉林
                </span>
                <span className="ribbon">{LEAD_TEACHER.ribbon}</span>
              </div>
              <div>
                <div className="zh">{BRAND.zh}</div>
                <h3>{LEAD_TEACHER.name}</h3>
                <div className="role">{LEAD_TEACHER.role}</div>
                <p className="bio">{LEAD_TEACHER.bio}</p>
                <div className="chips">
                  {LEAD_TEACHER.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <div className="lead-acts">
                  <a className="btn gold" href={href(REGISTER_HREF)}>
                    Đăng ký học với đội ngũ giáo viên
                  </a>
                </div>
              </div>
            </div>
            <h3 className="team-sub">Giáo viên tại trung tâm</h3>
            <div className="teachers">
              {TEACHERS.map((t) => (
                <a className="teacher" key={t.name} href={t.url} target="_blank" rel="noopener" title={`Hồ sơ giáo viên ${t.name}`}>
                  <div className="ph">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.photo} alt={`Giáo viên ${t.name}`} loading="lazy" />
                    <span className="seal" aria-hidden="true">
                      玉林
                    </span>
                  </div>
                  <div className="plate">
                    <b>{t.name}</b>
                    <small>{t.role}</small>
                  </div>
                  <p className="tbio">{t.bio}</p>
                  <div className="chips">
                    {t.chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <DuHocSection />

        <section className="block light">
          <div className="wrap">
            <Head zh={ONLINE.zh} title={ONLINE.title} intro={ONLINE.intro} />
            <div className="tiles">
              {ONLINE.tiles.map((t) => (
                <a className="tile" href={href(t.href)} key={t.title}>
                  <span className="ic" aria-hidden="true">
                    {t.ic}
                  </span>
                  <b>{t.title}</b>
                  <p>{t.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="block red" id="cam-nhan">
          <div className="wrap">
            <Head zh={TESTIMONIALS_HEAD.zh} title={TESTIMONIALS_HEAD.title} intro={TESTIMONIALS_HEAD.intro} />
            <div className="testis">
              {TESTIMONIALS.map((t, i) => (
                <figure className="testi" key={i}>
                  <span className="q" aria-hidden="true">
                    “
                  </span>
                  {t.sample && (
                    <span className="ph-tag" title="Nội dung minh họa – trung tâm sẽ thay bằng chia sẻ thật của học viên">
                      Minh họa
                    </span>
                  )}
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      {t.initials}
                    </span>
                    <span>
                      <b>{t.name}</b>
                      <small>{t.course}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="block light" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Head zh={GALLERY_HEAD.zh} title={GALLERY_HEAD.title} />
            <div className="gallery">
              {GALLERY.map((g, i) => (
                <figure key={i} className={g.src ? undefined : "ph-img"}>
                  {g.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={g.src} alt={g.caption} loading="lazy" />
                  ) : (
                    <span className="ph-glyph" aria-hidden="true">
                      {"玉林英学中"[i % 5]}
                    </span>
                  )}
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="block red">
          <div className="wrap">
            <div className="band">
              <div>
                <h2>{CTA.title}</h2>
                <p>{CTA.text}</p>
              </div>
              <div className="acts">
                <a className="btn pri" href={href(REGISTER_HREF)}>
                  Đăng ký học
                </a>
                <a className="btn light" href={CALL_HREF}>
                  Gọi {PHONE_LABEL}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
