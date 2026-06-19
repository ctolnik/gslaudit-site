// GSL Audit website — Home page
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const { Button, ServiceCard, Tag, Card, Avatar, Badge } = NS;
  const I = window.GSLIcons;
  const { services, categories, stats, testimonials } = window.GSLData;

  function HomePage({ navigate }) {
    const [filter, setFilter] = React.useState("Все услуги");
    const shown = filter === "Все услуги" ? services : services.filter((s) => s.cat === filter);

    return (
      <div>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <span className="gsl-eyebrow hero__eyebrow"><I.ShieldCheck width={15} height={15} /> Аудиторско-консалтинговая компания</span>
              <h1>Финансовая ясность для&nbsp;бизнеса и&nbsp;частного капитала</h1>
              <p className="hero__lead">Аудит, бухгалтерия, налоги и право — включая международные вопросы: МСФО, КИК и&nbsp;зарубежные счета.</p>
              <div className="hero__cta">
                <Button variant="primary" size="lg" onClick={() => navigate("contacts")} iconRight={<I.ArrowRight width={18} height={18} />}>Оставить заявку</Button>
                <Button variant="secondary" size="lg" onClick={() => navigate("service")}>Все услуги</Button>
              </div>
            </div>
            <div className="hero__panel">
              <Card padding="lg" style={{ borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-lg)", position: "relative", overflow: "hidden" }}>
                <img src="../../assets/logos/gsl-mark-sage.svg" alt="" aria-hidden="true"
                     style={{ position: "absolute", right: -40, bottom: -50, width: 220, opacity: 0.12 }} />
                <Badge tone="accent">Что мы закрываем</Badge>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: "var(--space-5)", position: "relative" }}>
                  {[
                    { ic: "ShieldCheck", t: "Аудит по РСБУ и МСФО", d: "Без замечаний контролирующих органов" },
                    { ic: "Globe", t: "Международные вопросы", d: "КИК, зарубежные счета, резидентство" },
                    { ic: "Scale", t: "Юридическая защита", d: "Сделки, проверки, структурирование" },
                  ].map((r) => {
                    const Ic = I[r.ic];
                    return (
                      <div key={r.t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <span className="feature__ic" style={{ flex: "none" }}><Ic width={20} height={20} /></span>
                        <div>
                          <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-body)" }}>{r.t}</div>
                          <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-small)" }}>{r.d}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container">
          <div className="stats" style={{ borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)", padding: "var(--space-12) 0" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat__v gsl-tnum">{s.value}</div>
                <div className="stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section container">
          <div className="sec-head">
            <span className="gsl-eyebrow">Услуги</span>
            <h2>Каталог из 20+ направлений</h2>
            <p>От разового консультирования до полного сопровождения. Выберите направление или оставьте заявку — подберём решение.</p>
          </div>
          <div className="filters">
            {categories.map((c) => (
              <Tag key={c} selected={filter === c} onClick={() => setFilter(c)}>{c}</Tag>
            ))}
          </div>
          <div className="grid-3">
            {shown.map((s) => {
              const Ic = I[s.icon];
              return (
                <ServiceCard key={s.id} icon={<Ic width={24} height={24} />} title={s.title}
                  description={s.desc} meta={s.price} onClick={(e) => { e.preventDefault(); navigate("service"); }} />
              );
            })}
          </div>
        </section>

        {/* Why us */}
        <section className="section--tight" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
          <div className="container feature">
            <div>
              <span className="gsl-eyebrow">Почему GSL</span>
              <h2 style={{ fontSize: "var(--fs-h3)", letterSpacing: "var(--ls-tight)", marginTop: "var(--space-4)" }}>Экспертиза уровня Big-4 — с вниманием частного бутика</h2>
              <div className="feature__list">
                {[
                  { ic: "Users", t: "Команда практиков", d: "Аудиторы, налоговые юристы и бухгалтеры с международным опытом." },
                  { ic: "Globe", t: "40 юрисдикций", d: "Сопровождаем активы и компании в России и за рубежом." },
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              {testimonials.map((t) => (
                <Card key={t.name} padding="lg" style={{ background: "var(--bg-page)" }}>
                  <I.Quote width={26} height={26} style={{ color: "var(--green-300)" }} />
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-strong)", margin: "var(--space-3) 0 var(--space-5)" }}>«{t.quote}»</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Avatar name={t.name} />
                    <div>
                      <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--fs-small)" }}>{t.name}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-caption)" }}>{t.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section container">
          <div className="cta-band">
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
