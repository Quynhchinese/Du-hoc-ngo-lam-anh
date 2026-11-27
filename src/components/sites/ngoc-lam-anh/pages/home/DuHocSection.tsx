import { href } from "../../data";
import { DU_HOC } from "./du-hoc-data";
import "./du-hoc.css";

function Card({ title, items, badge, className }: { title: string; items: string[]; badge?: string; className?: string }) {
  return (
    <div className={className ? `dh-card ${className}` : "dh-card"}>
      {badge && <span className="dh-badge">{badge}</span>}
      <b>{title}</b>
      <ul>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export function DuHocSection() {
  const d = DU_HOC;
  return (
    <section className="block deep" id="du-hoc">
      <div className="wrap">
        <div className="head">
          <div className="zh">{d.zh}</div>
          <h2>{d.title}</h2>
          <p>{d.intro}</p>
        </div>

        <div className="unis">
          {d.reasons.map((r) => (
            <div key={r.title}>
              <b>{r.zh}</b>
              <strong>{r.title}</strong>
              <span>{r.text}</span>
            </div>
          ))}
          <div className="more">
            <b>{d.more.value}</b>
            <span>{d.more.label}</span>
          </div>
        </div>

        <div className="dh-levels">
          <div className="dh-levels-head">
            <span className="zh">{d.levelsHead.zh}</span>
            <b>{d.levelsHead.title}</b>
            <span>{d.levelsHead.text}</span>
          </div>
          <div className="dh-cols c4">
            {d.levels.map((l, i) => (
              <Card key={l.title} title={l.title} items={l.items} badge={l.age} className={`lv lv${i + 1}`} />
            ))}
          </div>
        </div>
        <div className="dh-self">
          <b>{d.selfFunded.title}</b>
          {d.selfFunded.items.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>

        <h3 className="dh-sub" id="hoc-bong">
          {d.scholarships.title}
        </h3>
        <div className="dh-table">
          <table>
            <thead>
              <tr>
                {d.scholarships.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.scholarships.rows.map((r) => (
                <tr key={r.name}>
                  <td>
                    {r.name}
                    <small>{r.sub}</small>
                  </td>
                  <td>{r.perks}</td>
                  <td>{r.req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="dh-note">{d.scholarships.note}</p>

        <h3 className="dh-sub">{d.timeline.title}</h3>
        <p className="dh-note top">{d.timeline.sub}</p>
        <ol className="dh-timeline">
          {d.timeline.steps.map((s, i) => (
            <li key={s.when}>
              <span className="no">{i + 1}</span>
              <b>{s.when}</b>
              <span>{s.what}</span>
            </li>
          ))}
        </ol>

        <div className="dh-cols c2 gap-top">
          <Card title={d.documents.title} items={d.documents.items} />
          <Card title={d.support.title} items={d.support.items} />
        </div>

        <h3 className="dh-sub">{d.costs.title}</h3>
        <div className="dh-cols c2">
          {d.costs.groups.map((g) => (
            <Card key={g.title} title={g.title} items={g.items} />
          ))}
        </div>

        <div className="dh-cols c1 gap-top">
          <Card title={d.during.title} items={d.during.items} />
        </div>

        <h3 className="dh-sub">{d.faqTitle}</h3>
        <div className="dh-faq">
          {d.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <div className="study-pts">
          {d.points.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
        <div className="center">
          <a className="btn gold" href={href(d.cta.href)}>
            {d.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
