// GSL Audit website — Home page (реальный контент, фото, анимации)
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const { Button, ServiceCard, Tag, Card, Badge } = NS;
  const I = window.GSLIcons;
  const { services, categories, stats, team, certs, testimonials } = window.GSLData;

  const initials = (name) => name.split(" ").slice(0, 2).map((w) => w[0]).join("");

  function HomePage({ navigate }) {
    const [filter, setFilter] = React.useState("Все услуги");
    const shown = filter === "Все услуги" ? services : services.filter((s) => s.cat === filter);

    return (
      <div>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <span className="gsl-eyebrow hero__eyebrow reveal"><I.ShieldCheck width={15} height={15} /> Аудиторско-консалтинговая компания</span>
              <h1 className="reveal" data-d="1">25 лет на рынке налогового консалтинга, аудита и&nbsp;бухгалтерии</h1>
              <p className="hero__lead reveal" data-d="2">Услуги для юридических, физических лиц и&nbsp;ИП — включая международные вопросы: МСФО, КИК и&nbsp;зарубежные счета.</p>
              <div className="hero__cta reveal" data-d="3">
                <Button variant="primary" size="lg" onClick={() => navigate("contacts")} iconRight={<I.ArrowRight width={18} height={18} />}>Оставить заявку</Button>
                <Button variant="secondary" size="lg" onClick={() => navigate("service")}>Все услуги</Button>
              </div>
            </div>
            <div className="hero__panel reveal" data-d="2">
              <div className="hero__media">
                <img src="../../assets/img/photo/consulting.webp" alt="Консультация специалистов GSL" />
                <img className="hero__mark" src="../../assets/logos/gsl-mark-sage.svg" alt="" aria-hidden="true" />
                <div className="hero__badge">
                  <div className="hero__badge-num gsl-tnum">300+</div>
                  <div className="hero__badge-cap">постоянных клиентов доверяют GSL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container">
          <div className="stats reveal" style={{ borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)", padding: "var(--space-12) 0" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat__v gsl-tnum" data-count={s.value + s.suffix}>{s.value + s.suffix}</div>
                <div className="stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow">Услуги</span>
            <h2>Полный спектр для бизнеса и частных лиц</h2>
            <p>От разового консультирования до полного сопровождения. Выберите направление или оставьте заявку — подберём решение.</p>
          </div>
          <div className="filters reveal">
            {categories.map((c) => (
              <Tag key={c} selected={filter === c} onClick={() => setFilter(c)}>{c}</Tag>
            ))}
          </div>
          <div className="grid-3">
            {shown.map((s, i) => {
              const Ic = I[s.icon];
              return (
                <div key={s.id} className="reveal" data-d={(i % 3) + 1}>
                  <ServiceCard icon={<Ic width={24} height={24} />} title={s.title}
                    description={s.desc} meta={s.cat} onClick={(e) => { e.preventDefault(); navigate("service"); }} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container">
            <div className="sec-head reveal" style={{ marginBottom: "var(--space-10)" }}>
              <span className="gsl-eyebrow">Команда</span>
              <h2>Наши специалисты</h2>
              <p>Аудиторы, налоговые юристы и эксперты по учёту со стажем 18–36 лет.</p>
            </div>
            <div className="grid-4 team-grid">
              {team.map((m, i) => (
                <div key={m.name} className="team-card reveal" data-d={(i % 4) + 1}>
                  <div className="team-card__photo">
                    {m.photo
                      ? <img src={"../../" + m.photo} alt={m.name} loading="lazy" />
                      : <span className="team-card__initials">{initials(m.name)}</span>}
                  </div>
                  <div className="team-card__body">
                    <div className="team-card__name">{m.name}</div>
                    <div className="team-card__role">{m.role}</div>
                    <div className="team-card__years"><I.Clock width={13} height={13} /> {m.years}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="section container">
          <div className="sec-head reveal">
            <span className="gsl-eyebrow">Доверие</span>
            <h2>Сертификаты и лицензии</h2>
            <p>Членство в СРО «Аудиторская Палата России», внешний контроль качества, допуски и лицензии.</p>
          </div>
          <div className="grid-4">
            {certs.map((c, i) => (
              <figure key={i} className="cert-card reveal" data-d={(i % 4) + 1}>
                <div className="cert-card__img"><img src={"../../" + c.img} alt={c.caption} loading="lazy" /></div>
                <figcaption>{c.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Why us + photo */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container feature">
            <div className="reveal">
              <span className="gsl-eyebrow">Почему GSL</span>
              <h2 style={{ fontSize: "var(--fs-h3)", letterSpacing: "var(--ls-tight)", marginTop: "var(--space-4)" }}>Экономия и спокойствие вместо штатной бухгалтерии</h2>
              <div className="feature__list">
                {[
                  { ic: "Receipt", t: "Дешевле штатного отдела", d: "Платите за результат — без зарплат, налогов и оборудования на своей стороне." },
                  { ic: "ShieldCheck", t: "Ответственность за ошибки", d: "Несём ответственность за качество учёта и отчётности." },
                  { ic: "Users", t: "Непрерывность работы", d: "Взаимозаменяемость специалистов — работа не встанет из-за отпуска или болезни." },
                  { ic: "Clock", t: "Предсказуемые сроки", d: "Фиксируем этапы и дедлайны в договоре." },
                ].map((f) => {
                  const Ic = I[f.ic];
                  return (
                    <div key={f.t} className="feature__item">
                      <span className="feature__ic"><Ic width={20} height={20} /></span>
                      <div>
                        <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-body-lg)" }}>{f.t}</div>
                        <div style={{ color: "var(--text-muted)", marginTop: 2 }}>{f.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="reveal" data-d="2">
              <div className="feature__media">
                <img src="../../assets/img/photo/private.webp" alt="Сопровождение частных клиентов" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section container">
          <div className="sec-head reveal"><span className="gsl-eyebrow">Отзывы</span><h2>Что говорят клиенты</h2></div>
          <div className="grid-2">
            {testimonials.map((t, i) => (
              <Card key={t.name} padding="lg" className="reveal" data-d={i + 1} style={{ background: "var(--surface-card)" }}>
                <I.Quote width={26} height={26} style={{ color: "var(--green-300)" }} />
                <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-5)" }}>«{t.quote}»</p>
                <div>
                  <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-small)" }}>{t.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-caption)" }}>{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section container">
          <div className="cta-band cta-band--photo reveal">
            <div>
              <h2>Обсудим вашу задачу?</h2>
              <p>Бесплатная консультация: оценим объём, сроки и стоимость в течение рабочего дня.</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Button variant="inverse" size="lg" onClick={() => navigate("contacts")}>Оставить заявку</Button>
              <Button variant="ghost" size="lg" style={{ color: "#fff" }} iconRight={<I.Phone width={17} height={17} />}>Позвонить</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  window.GSLHomePage = HomePage;
})();
